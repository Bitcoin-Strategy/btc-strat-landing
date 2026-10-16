import { cn } from '@/lib/cn';
import { BRAND, FOOTER } from '@/content/site';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink/60">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-body leading-relaxed text-fg-muted">{FOOTER.blurb}</p>
            <p className="label-mono mt-6 text-fg-faint">
              Ticker: <span className="text-btc">{BRAND.ticker}</span>
              <span className="mx-2 text-line-strong">·</span>
              Fixed Cap: <span className="text-fg">{BRAND.maxSupply}</span>
            </p>

            <SocialLinks className="mt-6" />
          </div>

          {FOOTER.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="label-mono text-fg-faint">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => {
                  const muted = 'muted' in link && link.muted;
                  return (
                    <li key={link.label}>
                      {muted ? (
                        <span className="text-body text-fg-faint">{link.label}</span>
                      ) : (
                        <a
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-body text-fg-muted transition-colors hover:text-btc"
                        >
                          {link.label}
                          {'soon' in link && link.soon && (
                            <span className="label-mono text-[8px] text-btc">Soon</span>
                          )}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="label-mono text-fg-faint">{FOOTER.status.title}</h2>
            <dl className="panel mt-5 space-y-3 p-4">
              {FOOTER.status.rows.map(([k, v], i) => (
                <div key={k} className="flex flex-col gap-1">
                  <dt className="label-mono text-fg-faint">{k}</dt>
                  <dd className={cn('label-mono', i === 1 ? 'text-fg' : 'text-btc')}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="rule-fade my-12" />

        <p className="border-l-2 border-btc/50 pl-4 text-[12.5px] leading-relaxed text-fg-soft">
          {FOOTER.disclaimer}
        </p>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="meta-mono text-fg-faint">{BRAND.copyright}</p>
          <p className="meta-mono text-fg-muted">{BRAND.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
