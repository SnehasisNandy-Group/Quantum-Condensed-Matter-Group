import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] mt-32">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div className="flex items-start gap-6">

            <Image
              src="/nit-logo.png"
              alt="NIT Silchar"
              width={70}
              height={70}
              className="opacity-80"
            />

            <div>

              <h3 className="text-lg text-white font-light">
                Quantum Condensed Matter Group
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                Department of Physics
                <br />
                National Institute of Technology Silchar
                <br />
                Silchar, Assam 788010
                <br />
                India
              </p>

            </div>

          </div>

          {/* Right Side */}
          <div className="lg:text-right">

            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
              Official Links
            </p>

            <div className="flex lg:justify-end gap-8 text-sm text-gray-400">

              <a
                href="https://www.nits.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                NIT Silchar
              </a>

              <a
                href="https://physics.nits.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Physics Department
              </a>

              

            </div>

            <p className="mt-10 text-xs text-gray-600">
              © 2026 Quantum Condensed Matter Group
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}