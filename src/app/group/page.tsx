import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GroupPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">

        <div className="max-w-5xl">

          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-10">
            Group
          </p>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
            Quantum Materials &
            <br />
            Transport Theory Group
          </h1>

          

        </div>

      </section>

      {/* Principal Investigator */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Principal Investigator
            </p>

          </div>

          <div className="lg:col-span-9">

            <div className="max-w-4xl">

              <h2 className="text-4xl lg:text-5xl font-light leading-tight text-white mb-8">
                Snehasish Nandy
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] font-light">
                Assistant Professor in the Department of Physics
                at the National Institute of Technology Silchar.
                Research interests include nonlinear quantum transport,
                Berry curvature physics, topological quantum matter,
                quantum geometry, and non-Hermitian systems.
              </p>

              <div className="mt-14 space-y-4 text-lg text-gray-400">

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

      </section>

      {/* Students & Researchers */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Researchers
            </p>

          </div>

          <div className="lg:col-span-9">

            <div className="space-y-16">

              <div className="border-b border-white/[0.06] pb-12">

                <h3 className="text-3xl font-light text-white mb-5">
                  Doctoral Students
                </h3>

                <p className="text-xl text-gray-400 leading-[1.9]">
                  Information regarding current doctoral researchers
                  and research scholars will be updated soon.
                </p>

              </div>

              <div className="border-b border-white/[0.06] pb-12">

                <h3 className="text-3xl font-light text-white mb-5">
                  Collaborators
                </h3>

                <p className="text-xl text-gray-400 leading-[1.9]">
                  Active collaborations in condensed matter theory,
                  topological systems,
                  nonlinear transport,
                  and emergent quantum materials.
                </p>

              </div>

             

            </div>

          </div>

        </div>

      </section>

      {/* Research Environment */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Research Environment
            </p>

          </div>

          <div className="lg:col-span-9">

            <p className="text-3xl lg:text-5xl leading-[1.7] font-light text-white/90 max-w-5xl">
              The group works at the intersection of topology,
              geometry, and transport phenomena,
              combining analytical methods,
              semiclassical theory,
              and condensed matter physics.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}