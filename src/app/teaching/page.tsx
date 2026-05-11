import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TeachingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#081220] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-[-10%] w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative z-10">

          <div className="max-w-5xl">

            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 mb-10">
              Teaching
            </p>

            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
              Courses &
              <br />
              Academic Teaching
            </h1>

            <p className="mt-12 text-xl lg:text-2xl text-slate-300 leading-[1.9] max-w-4xl font-light">
              Undergraduate and postgraduate teaching in theoretical physics,
              condensed matter physics,
              quantum mechanics,
              and statistical physics.
            </p>

          </div>

        </div>

      </section>

      {/* COURSES */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-12 gap-20 items-start">

            {/* LEFT LABEL */}
            <div className="lg:col-span-3 pt-2">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Courses
              </p>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-9 space-y-24">

              {/* Quantum Mechanics */}
              <div className="border-b border-slate-200 pb-20">

                <h2 className="text-2xl lg:text-[44px] font-light text-slate-900 mb-4">
                  Quantum Mechanics
                </h2>

                <p className="text-xl text-slate-600 leading-[1.9] max-w-4xl">
                  Undergraduate and postgraduate instruction in
                  foundational and advanced quantum mechanics,
                  including quantum dynamics,
                  operator methods,
                  and symmetry principles.
                </p>

              </div>

              {/* Condensed Matter */}
              <div className="border-b border-slate-200 pb-20">

                <h2 className="text-2xl lg:text-[44px] font-light text-slate-900 mb-4">
                  Condensed Matter Physics
                </h2>

                <p className="text-xl text-slate-600 leading-[1.9] max-w-4xl">
                  Electronic properties of matter,
                  topological quantum systems,
                  correlated materials,
                  and modern condensed matter phenomena.
                </p>

              </div>

              {/* Statistical Physics */}
              <div>

                <h2 className="text-2xl lg:text-[44px] font-light text-slate-900 mb-4">
                  Statistical Physics
                </h2>

                <p className="text-xl text-slate-600 leading-[1.9] max-w-4xl">
                  Thermodynamics,
                  many-body systems,
                  phase transitions,
                  and emergent collective behavior in physical systems.
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