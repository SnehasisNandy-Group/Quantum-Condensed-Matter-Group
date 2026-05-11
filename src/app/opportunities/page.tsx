import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">

        <div className="max-w-5xl">

          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-10">
            Opportunities
          </p>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
            Join the Group
          </h1>

          <p className="mt-12 text-xl lg:text-2xl text-gray-300 leading-[1.9] max-w-4xl font-light">
            The group welcomes motivated students and collaborators
            interested in theoretical condensed matter physics,
            topology, quantum transport,
            and emergent quantum phenomena.
          </p>

        </div>

      </section>

      {/* Opportunities */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-20 items-start">

          <div className="lg:col-span-3 pt-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Openings
            </p>

          </div>

          <div className="lg:col-span-9 space-y-28">

            <div className="border-b border-white/[0.06] pb-20">

              <h2 className="text-3xl lg:text-4xl font-light text-white mb-8">
                PhD Opportunities
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Prospective doctoral students with interests in
                condensed matter theory,
                topology,
                nonlinear transport,
                quantum geometry,
                and related areas are encouraged to contact the group.
              </p>

            </div>

            <div className="border-b border-white/[0.06] pb-20">

              <h2 className="text-4xl font-light text-white mb-8">
                Research Collaborations
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                The group is open to research collaborations in
                topological quantum matter,
                Berry curvature physics,
                non-Hermitian systems,
                and emergent transport phenomena.
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-light text-white mb-8">
                Contact
              </h2>

              <p className="text-xl text-gray-300 leading-[1.9] max-w-4xl">
                Interested students and collaborators may contact the group
                via institutional email with a brief description
                of research interests and academic background.
              </p>

              <a
                href="mailto:snehasish@phy.nits.ac.in"
                className="inline-block mt-10 text-cyan-300 text-lg hover:text-white transition duration-300"
              >
                snehasish@phy.nits.ac.in
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}