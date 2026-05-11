import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function OpportunitiesPage() {
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
              Opportunities
            </p>

            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.08] text-white">
              Join the Group
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-[1.8] max-w-3xl font-light">
              The group welcomes motivated students and collaborators
              interested in theoretical condensed matter physics,
              topology, quantum transport,
              and emergent quantum phenomena.
            </p>

          </div>

        </div>

      </section>

      {/* OPPORTUNITIES */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT LABEL */}
            <div className="lg:col-span-2 pt-1">

              <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500 leading-[1.7]">
                Openings
              </p>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-10 space-y-12">

              {/* PhD */}
              <div className="border-b border-slate-200 pb-10">

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  PhD Opportunities
                </h2>

                <p className="text-[16px] text-slate-600 leading-[1.8] max-w-3xl">
                  Prospective doctoral students with interests in
                  condensed matter theory,
                  topology,
                  nonlinear transport,
                  quantum geometry,
                  and related areas are encouraged to contact the group.
                </p>

              </div>

              {/* Collaborations */}
              <div className="border-b border-slate-200 pb-10">

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  Research Collaborations
                </h2>

                <p className="text-[16px] text-slate-600 leading-[1.8] max-w-3xl">
                  The group is open to research collaborations in
                  topological quantum matter,
                  Berry curvature physics,
                  non-Hermitian systems,
                  and emergent transport phenomena.
                </p>

              </div>

              {/* Contact */}
              <div>

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  Contact
                </h2>

                <p className="text-[16px] text-slate-600 leading-[1.8] max-w-3xl">
                  Interested students and collaborators may contact the group
                  via institutional email with a brief description
                  of research interests and academic background.
                </p>

                <a
                  href="mailto:snehasish@phy.nits.ac.in"
                  className="inline-block mt-6 text-[16px] text-cyan-600 hover:text-cyan-700 transition duration-300"
                >
                  snehasish@phy.nits.ac.in
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