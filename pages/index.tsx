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

      <main className="relative z-10 max-w-[var(--content-max)] text-center font-timesdot p-10 animate-[rise_1.2s_ease_both] md:p-28 drop-shadow-[var(--text-drop-shadow)] [text-shadow:var(--text-shadow)]">
        <h1 className="mb-2 text-[length:var(--fs-title)] leading-tight drop-shadow-[var(--text-drop-shadow)] [text-shadow:var(--text-shadow)]">
          {data.name}
        </h1>
        <div className="mb-2 inline-flex items-center gap-3 text-[length:var(--fs-symbol)] uppercase tracking-[0.3em]">
          {/* <span>{data.tagline}</span>
          <span aria-hidden="true">•</span> */}
          <span className="font-hieroglyphs">{data.symbol}</span>
        </div>
        <div className="space-y-5 text-[length:var(--fs-body)] leading-[1.25] text-[color:var(--text)] drop-shadow-[var(--text-drop-shadow)] [text-shadow:var(--text-shadow)]">
          {data.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="first:w-[80%] mx-auto  [&_a]:text-[color:var(--accent)] [&_a]:underline-none [&_a]:underline-offset-4 [&_a]:transition [&_a]:duration-200 [&_a]:[text-shadow:none] hover:[&_a]:text-[color:var(--ink)] "
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        <div className="mt-8 leading-none text-[length:var(--fs-note)] drop-shadow-[var(--text-drop-shadow)] [text-shadow:var(--text-shadow)]">
          * {data.note} *
        </div>
        <p className="mt-0 text-[length:var(--fs-note)] text-[color:var(--text)] drop-shadow-[var(--text-drop-shadow)] [text-shadow:var(--text-shadow)]">
          {data.cta}
        </p>

        <div className="mt-0 flex flex-wrap gap-1flex-col max-sm:items-start justify-center leading-none">
          {data.socials.map((item, index) => (
            <>
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-1 py-0 text-[length:var(--fs-note)] leading-none no-underline transition duration-200 hover:-translate-y-0.5 hover:text-[color:var(--ink)] hover:border-[rgba(248,184,224,0.8)] hover:bg-[rgba(248,184,224,0.12)]  drop-shadow-[var(--text-drop-shadow)] [text-shadow:var(--text-shadow)]"
              >
                {item.label}
              </a>
              {index < data.socials.length - 1 && (
                <span className="text-[length:var(--fs-note)] drop-shadow-[var(--text-drop-shadow)] [text-shadow:var(--text-shadow)]">
                  *
                </span>
              )}
            </>
          ))}
        </div>
      </main>
    </div>
  );
}
