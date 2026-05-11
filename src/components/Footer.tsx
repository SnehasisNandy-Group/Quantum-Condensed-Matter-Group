import Image from "next/image";

export default function Footer() {
  return (

    <footer className="bg-[#081220] border-t border-white/10 mt-32">

      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="flex items-start gap-6">

            <Image
              src="/nit-logo.png"
              alt="NIT Silchar"
              width={72}
              height={72}
              className="opacity-90"
            />

            <div>

              <h3 className="text-xl text-white font-light tracking-wide">
                Quantum Condensed Matter Group
              </h3>

              <p className="mt-5 text-slate-500 leading-relaxed text-sm">

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

          {/* RIGHT SIDE */}
          <div className="lg:text-right">

            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-8">
              Official Links
            </p>

            <div className="
              flex
              lg:justify-end
              gap-10
              text-sm
              text-slate-500
            ">

              <a
                href="https://www.nits.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                NIT Silchar
              </a>

              <a
                href="https://physics.nits.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                Physics Department
              </a>

            </div>

            <div className="mt-12 w-full h-px bg-white/10"></div>

            <p className="mt-8 text-xs tracking-wide text-slate-500">
              © 2026 Quantum Condensed Matter Group
            </p>

          </div>

        </div>

      </div>

    </footer>

  );
}