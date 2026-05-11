export default function Navbar() {
  return (

    <nav className="sticky top-0 z-50 bg-[#081220]/92 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo / Title */}
        <a
          href="/"
          className="
            text-[13px]
            tracking-[0.28em]
            uppercase
            text-white
            font-medium
            whitespace-nowrap
          "
        >
          Quantum Condensed Matter Group
        </a>

        {/* Navigation */}
        <div className="
          hidden
          md:flex
          items-center
          gap-10
          text-[15px]
          text-slate-300
          font-light
        ">

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