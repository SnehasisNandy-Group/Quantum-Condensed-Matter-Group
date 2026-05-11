import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-28">

        <div className="max-w-5xl">

          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-12">
            Research
          </p>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
            Topology, Quantum Geometry,
            <br />
            and Emergent Transport
          </h1>

          <p className="mt-12 text-xl lg:text-2xl text-gray-300 leading-[1.9] max-w-4xl font-light">
            The group investigates transport phenomena,
            Berry curvature physics, nonlinear responses,
            quantum geometry, and topological quantum matter.
          </p>

        </div>

      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Core Areas
            </p>

          </div>

          <div className="lg:col-span-9 space-y-24">

            <div>

              <h2 className="text-4xl font-light leading-tight mb-8">
                Quantum Transport Phenomena
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Theoretical studies of nonlinear Hall effects,
                magnetotransport, thermal transport,
                and emergent electrical responses
                in topological quantum systems.
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-light leading-tight mb-8">
                Berry Curvature & Quantum Geometry
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Investigating geometric effects in condensed matter systems,
                including Berry curvature dipoles,
                topology-driven transport,
                and nonlinear geometric responses.
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-light leading-tight mb-8">
                Topological Quantum Matter
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Research on Weyl semimetals,
                Dirac systems,
                unconventional superconductivity,
                and emergent quantum phases.
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-light leading-tight mb-8">
                Non-Hermitian Systems
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Exploring exceptional phenomena,
                non-Hermitian transport,
                symmetry-breaking effects,
                and unconventional quantum dynamics.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Research Vision */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Vision
            </p>

          </div>

          <div className="lg:col-span-9">

            <p className="text-4xl lg:text-5xl leading-[1.6] font-light text-white/90 max-w-5xl">
              Understanding emergent quantum phenomena through topology,
              geometry, and transport in condensed matter systems.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}