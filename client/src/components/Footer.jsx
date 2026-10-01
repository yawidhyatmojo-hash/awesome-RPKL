import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold text-white">
              RPKL
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Build Future Innovators.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">
              Follow Us
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400 hover:text-sky-400"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400 hover:text-sky-400"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400 hover:text-sky-400"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400 hover:text-sky-400"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-slate-500">
            © 2026 RPKL. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;