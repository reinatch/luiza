import type { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

type SocialLink = {
  label: string;
  href: string;
};

type PageData = {
  name: string;
  symbol: string;
  tagline: string;
  paragraphs: string[];
  note: string;
  cta: string;
  socials: SocialLink[];
};

type HomeProps = {
  data: PageData;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw) as PageData;

  return {
    props: { data }
  };
};

export default function Home({ data }: HomeProps) {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden">
      <div
        className="absolute inset-0 scale-[1.02] bg-[url('/background.gif')] bg-contain bg-center [filter:saturate(2)_contrast(1.05)_brightness(2)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(140deg,rgba(5,5,8,0.75)_0%,rgba(10,10,16,0.35)_45%,rgba(5,5,8,0.85)_100%)] mix-blend-multiply"
        aria-hidden="true"
      />

      <main className="relative z-10 mx-6 max-w-[60%] text-center font-timesdot  bg-[color:var(--card)] p-10 animate-[rise_1.2s_ease_both] sm:p-14">
        <h1 className="mb-6 text-5xl leading-tight drop-shadow-[0_0_28px_rgba(249,199,132,0.55)] [text-shadow:0_0_24px_rgba(249,199,132,0.45)]">
          {data.name}
        </h1>
        <div className="mb-6 inline-flex items-center gap-3 text-3xl uppercase tracking-[0.3em]">
          {/* <span>{data.tagline}</span>
          <span aria-hidden="true">•</span> */}
          <span className='font-hieroglyphs'>{data.symbol}</span>
        </div>
        <div className="space-y-5 text-5xl leading-[1.1] text-[color:var(--muted)] drop-shadow-[0_0_28px_rgba(249,199,132,0.55)] [text-shadow:0_0_24px_rgba(249,199,132,0.45)]">
          {data.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="[&_a]:text-[color:var(--accent)] [&_a]:underline [&_a]:underline-offset-4 [&_a]:transition [&_a]:duration-200 [&_a]:[text-shadow:none] hover:[&_a]:text-[color:var(--ink)]"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        <div className="mt-8 text-3xl  tracking-[0.22em] drop-shadow-[0_0_28px_rgba(249,199,132,0.55)] [text-shadow:0_0_24px_rgba(249,199,132,0.45)]">
          * {data.note} *
        </div>
        <p className="mt-6 text-3xl text-[color:var(--muted)]">{data.cta}</p>

        <div className="mt-4 flex flex-wrap gap-3 max-sm:flex-col max-sm:items-start justify-center">
          {data.socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-3xl no-underline transition duration-200 hover:-translate-y-0.5 hover:text-[color:var(--ink)] hover:border-[rgba(249,199,132,0.8)] hover:bg-[rgba(249,199,132,0.12)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
