const socials = [
  // { label: 'GitHub', href: 'https://github.com/your-handle' },
  { label: 'Instagram', href: 'https://instagram.com/your-handle' },
  { label: 'Contact', href: 'https://x.com/your-handle' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' }
];

export default function Home() {
  return (
    <div className="page">
      <div className="bg" aria-hidden="true" />
      <div className="veil" aria-hidden="true" />

      <main className="content">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 className="name">Luiza Martelo</h1>
        <p className="bio">
          Short bio goes here. Write a one or two line snapshot about what you do
          and what you care about. Keep it simple and human.
        </p>

        <div className="links">
          {socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
