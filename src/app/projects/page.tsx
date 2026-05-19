import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const projects = [
  {
    year: "2025–Present",
    title:
      "Exploring novel transport induced by quantum geometry in unconventional superconductors",
    agency: "ANRF — Prime Minister Early Career Research Grant",
    amount: "₹40 Lakhs",
    duration: "09/07/2025 – 08/07/2028 · 3 Years",
    role: "Principal Investigator",
  },

  {
    year: "2025",
    title:
      "Harnessing 2D van der Waals Semiconducting Heterostructures for Quantum Optoelectronic Devices",
    agency: "DST — Indo-Russia Joint Research Grant",
    amount: "₹1 Crore",
    duration: "2 Years",
    role: "Co-Principal Investigator",
  },

  {
    year: "2022–2023",
    title:
      "Anomalous Transport in Correlated Topological Materials",
    agency:
      "Laboratory Directed Research and Development (LDRD), LANL",
    amount: "230K USD",
    duration: "21/03/2022 – 11/12/2023",
    role: "Co-Principal Investigator",
  },
];

export default function ProjectsPage() {
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
              Projects
            </p>

            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.08] text-white">
              Research Projects
              <br />
              & Grants
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-[1.8] max-w-3xl font-light">
              Sponsored research projects in condensed matter physics,
              topology, quantum geometry,
              and emergent transport phenomena under Snehasish Nandy
            </p>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* LEFT LABEL */}
            <div className="lg:col-span-2">

              <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500 leading-[1.7]">
                                Projects
              </p>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-10 space-y-10">

              {projects.map((project, index) => (

                <div
                  key={index}
                  className="border-b border-slate-200 pb-8"
                >

                  {/* YEAR */}
                  <p className="text-[13px] uppercase tracking-[0.18em] text-cyan-700 mb-3">

                    {project.year}

                  </p>

                  {/* TITLE */}
                  <h2 className="text-[24px] lg:text-[30px] leading-[1.4] font-light text-slate-900 max-w-4xl mb-5">

                    {project.title}

                  </h2>

                  {/* DETAILS */}
                  <div className="space-y-2 text-[15px] text-slate-600 leading-[1.7]">

                    <p>
                      <span className="text-slate-900 font-medium">
                        Funding Agency:
                      </span>{" "}
                      {project.agency}
                    </p>

                    <p>
                      <span className="text-slate-900 font-medium">
                        Amount:
                      </span>{" "}
                      {project.amount}
                    </p>

                    <p>
                      <span className="text-slate-900 font-medium">
                        Duration:
                      </span>{" "}
                      {project.duration}
                    </p>

                    <p>
                      <span className="text-slate-900 font-medium">
                        Role:
                      </span>{" "}
                      {project.role}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}