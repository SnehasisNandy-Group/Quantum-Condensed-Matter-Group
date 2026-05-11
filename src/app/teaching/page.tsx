import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TeachingPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">

        <div className="max-w-5xl">

          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-10">
            Teaching
          </p>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
            Courses &
            <br />
            Academic Teaching
          </h1>

          <p className="mt-12 text-xl lg:text-2xl text-gray-300 leading-[1.9] max-w-4xl font-light">
            Undergraduate and postgraduate teaching in theoretical physics,
            condensed matter physics,
            quantum mechanics,
            and statistical physics.
          </p>

        </div>

      </section>

      {/* Courses */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-20 items-start">

          <div className="lg:col-span-3 pt-2">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Courses
            </p>

          </div>

          <div className="lg:col-span-9 space-y-28">

            <div className="border-b border-white/[0.06] pb-20">

              <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
                Quantum Mechanics
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Undergraduate and postgraduate instruction in
                foundational and advanced quantum mechanics,
                including quantum dynamics,
                operator methods,
                and symmetry principles.
              </p>

            </div>

            <div className="border-b border-white/[0.06] pb-20">

              <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
                Condensed Matter Physics
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Electronic properties of matter,
                topological quantum systems,
                correlated materials,
                and modern condensed matter phenomena.
              </p>

            </div>

            <div>

              <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
                Statistical Physics
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Thermodynamics,
                many-body systems,
                phase transitions,
                and emergent collective behavior in physical systems.
              </p>

            </div>

          </div>

        </div>

      </section>

      

      <Footer />

    </main>
  );
}