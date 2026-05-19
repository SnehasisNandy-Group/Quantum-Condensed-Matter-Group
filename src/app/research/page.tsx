import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResearchPage() {
 

return (
  <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

    <Navbar />

    {/* HERO */}
    <section className="relative bg-[#081220] overflow-hidden border-b border-slate-800">

      {/* Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">

        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-[0.28em] text-slate-500 mb-8">
            Research
          </p>

          <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.08] text-white">
            Topology, Quantum Geometry,
            <br />
            and Emergent Transport
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-[1.8] max-w-3xl font-light">
            The group investigates transport phenomena,
            Berry curvature physics, nonlinear responses,
            quantum geometry, and topological quantum matter.
          </p>

        </div>

      </div>

    </section>

      {/* RESEARCH AREAS */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* LEFT LABEL */}
            <div className="lg:col-span-3">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Core Areas
              </p>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-9 space-y-6">

              {/* Quantum Transport */}
              <div className="border-b border-slate-200 pb-5">

                <h2 className="text-2xl lg:text-3xl font-light leading-tight mb-2 text-slate-900">
                  Quantum Transport Phenomena
                </h2>

                <p className="text-base lg:text-lg text-slate-600 leading-[1.8] max-w-4xl">
                  Theoretical studies of nonlinear Hall effects,
                  magnetotransport, thermal transport,
                  and emergent electrical responses
                  in topological quantum systems.
                </p>

              </div>

              {/* Berry Curvature */}
              <div className="border-b border-slate-200 pb-5">

                <h2 className="text-2xl lg:text-3xl font-light leading-tight mb-2 text-slate-900">
                  Berry Curvature & Quantum Geometry
                </h2>

                <p className="text-base lg:text-lg text-slate-600 leading-[1.8] max-w-4xl">
                  Investigating geometric effects in condensed matter systems,
                  including Berry curvature dipoles,
                  topology-driven transport,
                  and nonlinear geometric responses.
                </p>

              </div>

              {/* Topological Matter */}
              <div className="border-b border-slate-200 pb-5">

                <h2 className="text-2xl lg:text-3xl font-light leading-tight mb-2 text-slate-900">
                  Topological Quantum Matter
                </h2>

                <p className="text-base lg:text-lg text-slate-600 leading-[1.8] max-w-4xl">
                  Research on Weyl semimetals,
                  topological superconductors,
                  quantum anomalous transport,
                  and exotic topological phases of matter.
                </p>

              </div>

              {/* Non-Hermitian Physics */}
              <div>

                <h2 className="text-2xl lg:text-3xl font-light leading-tight mb-2 text-slate-900">
                  Non-Hermitian Systems
                </h2>

                <p className="text-base lg:text-lg text-slate-600 leading-[1.8] max-w-4xl">
                  Exploring emergent behavior in non-Hermitian quantum systems,
                  exceptional topology,
                  dissipative transport,
                  and unconventional quantum responses.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}