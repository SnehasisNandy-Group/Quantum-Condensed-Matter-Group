export default function Navbar() {
  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/[0.04]">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <a
          href="/"
          className="text-sm tracking-[0.25em] uppercase text-white/90"
        >
          Quantum Condensed Matter Group
        </a>

        <div className="flex items-center gap-10 text-sm tracking-wide text-gray-400">

          <a
            href="/research"
            className="hover:text-white transition duration-300"
          >
            Research
          </a>

          <a
            href="/group"
            className="hover:text-white transition duration-300"
          >
            Group
          </a>

          <a
            href="/publications"
            className="hover:text-white transition duration-300"
          >
            Publications
          </a>

          <a
            href="/teaching"
            className="hover:text-white transition duration-300"
          >
            Teaching
          </a>
<a
  href="/opportunities"
  className="hover:text-white transition duration-300"
>
  Opportunities
</a>
          <a
            href="/contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>

  );
}