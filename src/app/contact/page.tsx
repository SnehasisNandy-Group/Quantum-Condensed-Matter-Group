import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">

        <div className="max-w-5xl">

          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-10">
            Contact
          </p>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
            Contact the Group
          </h1>

          <p className="mt-12 text-xl lg:text-2xl text-gray-300 leading-[1.9] max-w-4xl font-light">
            For research collaborations,
            academic discussions,
            invited talks,
            and prospective student inquiries.
          </p>

        </div>

      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-20 items-start">

          <div className="lg:col-span-3 pt-2">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Information
            </p>

          </div>

          <div className="lg:col-span-9 space-y-28">

            <div className="border-b border-white/[0.06] pb-20">

              <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
                Institutional Email
              </h2>

              <a
                href="mailto:snehasish@phy.nits.ac.in"
                className="text-xl text-gray-300 leading-[1.9] hover:text-cyan-300 transition duration-300"
              >
                snehasish@phy.nits.ac.in
              </a>

            </div>

            <div className="border-b border-white/[0.06] pb-20">

              <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
                Affiliation
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9]">
                Department of Physics
                <br />
                National Institute of Technology Silchar
              </p>

            </div>

            <div>

              <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
                Research Profiles
              </h2>

              <div className="flex flex-col gap-6 text-xl text-gray-300">

                <a
                  href="https://scholar.google.com/citations?user=gh2E7IIAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition duration-300"
                >
                  Google Scholar
                </a>

                <a
                  href="https://www.researchgate.net/profile/Snehasish-Nandy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition duration-300"
                >
                  ResearchGate
                </a>

                <a
                  href="https://physics.nits.ac.in/faculties/snehasish-nandy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition duration-300"
                >
                  NIT Silchar Profile
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}