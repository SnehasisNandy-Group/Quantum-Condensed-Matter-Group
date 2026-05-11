import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#081220] overflow-hidden border-b border-slate-800">

        {/* Background Glow */}
        <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">

          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 mb-8">
              Contact
            </p>

            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.08] text-white">
              Contact the Group
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-[1.8] max-w-3xl font-light">
              For research collaborations,
              academic discussions,
              invited talks,
              and prospective student inquiries.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* LEFT LABEL */}
            <div className="lg:col-span-2 pt-1">

              <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500 leading-[1.7]">
                Information
              </p>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-10 space-y-10">

              {/* EMAIL */}
              <div className="border-b border-slate-200 pb-8">

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  Institutional Email
                </h2>

                <a
                  href="mailto:snehasish@phy.nits.ac.in"
                  className="text-[16px] text-slate-600 leading-[1.7] hover:text-cyan-600 transition duration-300"
                >
                  snehasish@phy.nits.ac.in
                </a>

              </div>

              {/* AFFILIATION */}
              <div className="border-b border-slate-200 pb-8">

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  Affiliation
                </h2>

                <p className="text-[16px] text-slate-600 leading-[1.7]">
                  Department of Physics
                  <br />
                  National Institute of Technology Silchar
                </p>

              </div>

              {/* PROFILES */}
              <div>

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  Research Profiles
                </h2>

                <div className="flex flex-col gap-3 text-[16px] text-slate-600">

                  <a
                    href="https://scholar.google.com/citations?user=gh2E7IIAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-600 transition duration-300"
                  >
                    Google Scholar
                  </a>

                  <a
                    href="https://www.researchgate.net/profile/Snehasish-Nandy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-600 transition duration-300"
                  >
                    ResearchGate
                  </a>

                  <a
                    href="https://physics.nits.ac.in/faculties/snehasish-nandy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-600 transition duration-300"
                  >
                    NIT Silchar Profile
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}