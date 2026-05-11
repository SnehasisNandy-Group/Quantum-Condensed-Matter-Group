import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GroupPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#081220] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 relative z-10">

          <div className="max-w-5xl">

            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-10">
              Group
            </p>

            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
              Quantum Condensed Matter Group
            </h1>

          </div>

        </div>

      </section>

      {/* PRINCIPAL INVESTIGATOR */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-12 gap-16">

            <div className="lg:col-span-3">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Principal Investigator
              </p>

            </div>

            <div className="lg:col-span-9">

              <div className="max-w-4xl">

                <h2 className="text-4xl lg:text-5xl font-light leading-tight text-slate-900 mb-8">
                  Snehasish Nandy
                </h2>

                <p className="text-xl text-slate-600 leading-[1.9] font-light">
                  Assistant Professor in the Department of Physics
                  at the National Institute of Technology Silchar.
                  Research interests include nonlinear quantum transport,
                  Berry curvature physics, topological quantum matter,
                  quantum geometry, and non-Hermitian systems.
                </p>

                <div className="mt-14 space-y-4 text-lg text-slate-600">

                  <p>
                    PhD — Indian Institute of Technology Kharagpur
                  </p>

                  <p>
                    Research Collaboration — Los Alamos National Laboratory
                  </p>

                  <p>
                    Faculty — National Institute of Technology Silchar
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STUDENTS & RESEARCHERS */}
      <section className="bg-[#0f172a] border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-12 gap-16">

            <div className="lg:col-span-3">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Researchers
              </p>

            </div>

            <div className="lg:col-span-9">

              <div className="space-y-16">

                <div className="border-b border-white/10 pb-12">

                  <h3 className="text-3xl font-light text-white mb-5">
                    Doctoral Students
                  </h3>

                  <p className="text-xl text-slate-400 leading-[1.9]">
                    Information regarding current doctoral researchers
                    and research scholars will be updated soon.
                  </p>

                </div>

                <div className="border-b border-white/10 pb-12">

                  <h3 className="text-3xl font-light text-white mb-5">
                    Collaborators
                  </h3>

                  <p className="text-xl text-slate-400 leading-[1.9]">
                    Active collaborations in condensed matter theory,
                    topological systems,
                    nonlinear transport,
                    and emergent quantum materials.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* RESEARCH ENVIRONMENT */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-12 gap-16">

            <div className="lg:col-span-3">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Research Environment
              </p>

            </div>

            <div className="lg:col-span-9">

              <p className="text-3xl lg:text-5xl leading-[1.7] font-light text-slate-900 max-w-5xl">
                The group works at the intersection of topology,
                geometry, and transport phenomena,
                combining analytical methods,
                semiclassical theory,
                and condensed matter physics.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}