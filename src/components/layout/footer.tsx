import Link from "next/link";

interface FooterProps {
  lang: string;
  dictionary: {
    footer: {
      quickLinks: string;
      followUs: string;
      contact: string;
      copyright: string;
      address: string;
      phone: string;
    };
    nav: {
      home: string;
      models: string;
    };
  };
}

export function Footer({ lang, dictionary }: FooterProps) {
  const { footer, nav } = dictionary;

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Description */}
          <div>
            <Link
              href={`/${lang}`}
              className="text-xl font-bold uppercase tracking-wider"
            >
              HONDA
            </Link>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Honda Indonesia — Power of Dreams. Delivering innovative vehicles
              designed for Indonesian roads.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              {footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={`/${lang}`}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/all-models`}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {nav.models}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              {footer.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-zinc-400">{footer.address}</li>
              <li className="text-sm text-zinc-400">{footer.phone}</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              {footer.followUs}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="text-center text-sm text-zinc-400">
            &copy; 2026 {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
