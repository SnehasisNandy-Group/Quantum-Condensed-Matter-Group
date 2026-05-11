import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TeachingPage() {
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
              Teaching
            </p>

            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.08] text-white">
              Courses &
              <br />
              Academic Teaching
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-[1.8] max-w-3xl font-light">
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

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* LEFT LABEL */}
            <div className="lg:col-span-2 pt-1">

              <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500 leading-[1.7]">
                Courses
              </p>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-10 space-y-12">

              {/* Quantum Mechanics */}
              <div className="border-b border-slate-200 pb-10">

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  Quantum Mechanics
                </h2>

                <p className="text-[16px] text-slate-600 leading-[1.8] max-w-3xl">
                  Undergraduate and postgraduate instruction in
                  foundational and advanced quantum mechanics,
                  including quantum dynamics,
                  operator methods,
                  and symmetry principles.
                </p>

              </div>

              {/* Condensed Matter */}
              <div className="border-b border-slate-200 pb-10">

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  Condensed Matter Physics
                </h2>

                <p className="text-[16px] text-slate-600 leading-[1.8] max-w-3xl">
                  Electronic properties of matter,
                  topological quantum systems,
                  correlated materials,
                  and modern condensed matter phenomena.
                </p>

              </div>

              {/* Statistical Physics */}
              <div>

                <h2 className="text-[24px] lg:text-[30px] font-light text-slate-900 mb-3">
                  Statistical Physics
                </h2>

                <p className="text-[16px] text-slate-600 leading-[1.8] max-w-3xl">
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