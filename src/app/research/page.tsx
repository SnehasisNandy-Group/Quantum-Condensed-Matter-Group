import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResearchPage() {
  return (

    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#081220] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 relative z-10">

          <div className="max-w-5xl">

            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-12">
              Research
            </p>

            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
              Topology, Quantum Geometry,
              <br />
              and Emergent Transport
            </h1>

            <p className="mt-12 text-xl lg:text-2xl text-slate-300 leading-[1.9] max-w-4xl font-light">
              The group investigates transport phenomena,
              Berry curvature physics, nonlinear responses,
              quantum geometry, and topological quantum matter.
            </p>

          </div>

        </div>

      </section>

      {/* RESEARCH AREAS */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-12 gap-16">

            {/* LEFT LABEL */}
            <div className="lg:col-span-3">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Core Areas
              </p>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-9 space-y-24">

              {/* Quantum Transport */}
              <div className="border-b border-slate-200 pb-16">

                <h2 className="text-4xl font-light leading-tight mb-8 text-slate-900">
                  Quantum Transport Phenomena
                </h2>

                <p className="text-xl text-slate-600 leading-[1.9] max-w-4xl">
                  Theoretical studies of nonlinear Hall effects,
                  magnetotransport, thermal transport,
                  and emergent electrical responses
                  in topological quantum systems.
                </p>

              </div>

              {/* Berry Curvature */}
              <div className="border-b border-slate-200 pb-16">

                <h2 className="text-4xl font-light leading-tight mb-8 text-slate-900">
                  Berry Curvature & Quantum Geometry
                </h2>

                <p className="text-xl text-slate-600 leading-[1.9] max-w-4xl">
                  Investigating geometric effects in condensed matter systems,
                  including Berry curvature dipoles,
                  topology-driven transport,
                  and nonlinear geometric responses.
                </p>

              </div>

              {/* Topological Matter */}
              <div className="border-b border-slate-200 pb-16">

                <h2 className="text-4xl font-light leading-tight mb-8 text-slate-900">
                  Topological Quantum Matter
                </h2>

                <p className="text-xl text-slate-600 leading-[1.9] max-w-4xl">
                  Research on Weyl semimetals,
                  Dirac systems,
                  unconventional superconductivity,
                  and emergent quantum phases.
                </p>

              </div>

              {/* Non-Hermitian */}
              <div>

                <h2 className="text-4xl font-light leading-tight mb-8 text-slate-900">
                  Non-Hermitian Systems
                </h2>

                <p className="text-xl text-slate-600 leading-[1.9] max-w-4xl">
                  Exploring exceptional phenomena,
                  non-Hermitian transport,
                  symmetry-breaking effects,
                  and unconventional quantum dynamics.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* RESEARCH VISION */}
      <section className="bg-[#0f172a] border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-12 gap-16">

            <div className="lg:col-span-3">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Vision
              </p>

            </div>

            <div className="lg:col-span-9">

              <p className="text-4xl lg:text-5xl leading-[1.6] font-light text-white max-w-5xl">
                Understanding emergent quantum phenomena through topology,
                geometry, and transport in condensed matter systems.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );
}