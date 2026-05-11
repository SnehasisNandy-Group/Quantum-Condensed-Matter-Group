
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden relative">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#081220] overflow-hidden">

        {/* Atmospheric Background */}
        <div className="absolute top-0 right-[-10%] w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="absolute top-[30%] left-[-15%] w-[700px] h-[700px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT SIDE */}
            <div>

              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-12">
                Department of Physics · National Institute of Technology Silchar
              </p>

              <h1 className="max-w-5xl text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-white">
                Quantum Condensed
                <br />
                Matter Group
              </h1>

              <p className="mt-10 max-w-3xl text-xl lg:text-2xl text-slate-300 leading-[1.9] font-light">
                Research in topology, nonlinear quantum transport,
                Berry curvature physics, quantum geometry,
                and emergent condensed matter phenomena.
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative hidden lg:flex items-center justify-center h-[600px]">

              {/* Outer Glow */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] animate-glow"></div>

              {/* Geometry */}
              <div className="relative w-[440px] h-[440px] opacity-90">

                {/* Circle 1 */}
                <div className="absolute inset-0 rounded-full border border-white/10"></div>

                {/* Circle 2 */}
                <div className="absolute inset-10 rounded-full border border-cyan-400/20"></div>

                {/* Circle 3 */}
                <div className="absolute inset-20 rounded-full border border-white/10"></div>

                {/* Horizontal Line */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/10"></div>

                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-white/10"></div>

                {/* Diagonal Line */}
                <div className="absolute top-0 left-0 w-full h-full">

                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 rotate-45"></div>

                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -rotate-45"></div>

                </div>

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 blur-md"></div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-12 gap-16">

            <div className="lg:col-span-3">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                About
              </p>

            </div>

            <div className="lg:col-span-9">

              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-20">

                <div>

                  <p className="text-3xl lg:text-4xl leading-[1.7] text-slate-900 font-light max-w-4xl">
                    The group is led by Dr. Snehasish Nandy,
                    Assistant Professor in the Department of Physics
                    at the National Institute of Technology Silchar.
                    Current research focuses on topology,
                    transport phenomena,
                    quantum geometry,
                    and emergent condensed matter systems.
                  </p>

                </div>

                <div className="space-y-14">

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-5">
                      Research Interests
                    </p>

                    <div className="space-y-3 text-lg text-slate-700 leading-relaxed">

                      <p>Nonlinear Quantum Transport</p>
                      <p>Berry Curvature Physics</p>
                      <p>Topological Quantum Matter</p>
                      <p>Quantum Geometry</p>
                      <p>Non-Hermitian Systems</p>

                    </div>

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-5">
                      Academic Journey
                    </p>

                    <div className="space-y-4 text-lg text-slate-700 leading-relaxed">

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

          </div>

        </div>

      </section>


      {/* RESEARCH HIGHLIGHTS */}
      <section className="bg-[#0f172a] border-t border-slate-800">

        <div className="max-w-6xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-1">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-8">
                Research Highlights
              </p>

              <h2 className="text-4xl leading-tight font-light text-white">
                Understanding quantum matter through topology,
                transport, and geometry.
              </h2>

            </div>

            <div className="lg:col-span-2 grid gap-8">

              <div className="border border-white/10 rounded-3xl p-10 hover:border-cyan-400/30 transition duration-500 bg-white/[0.02]">

                <h3 className="text-3xl font-semibold text-white mb-5 leading-tight">
                  Topological Quantum Systems
                </h3>

                <p className="text-slate-500 text-lg leading-relaxed">
                  Exploring emergent phases and transport phenomena
                  in topological condensed matter systems.
                </p>

              </div>

              <div className="border border-white/10 rounded-3xl p-10 hover:border-cyan-400/30 transition duration-500 bg-white/[0.02]">

                <h3 className="text-3xl font-semibold text-white mb-5 leading-tight">
                  Nonlinear Quantum Transport
                </h3>

                <p className="text-slate-500 text-lg leading-relaxed">
                  Investigating Berry curvature effects,
                  quantum transport responses,
                  and emergent electronic behavior.
                </p>

              </div>

              <div className="border border-white/10 rounded-3xl p-10 hover:border-cyan-400/30 transition duration-500 bg-white/[0.02]">

                <h3 className="text-3xl font-semibold text-white mb-5 leading-tight">
                  Quantum Geometry
                </h3>

                <p className="text-slate-500 text-lg leading-relaxed">
                  Theoretical and computational approaches
                  to geometric and correlated quantum phenomena.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* RECENT UPDATES */}
      <section className="bg-white border-t border-slate-200">

        <div className="max-w-6xl mx-auto px-6 py-32">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-12">
            Recent Updates
          </p>

          <div className="space-y-10">

            <div className="border-b border-slate-200 pb-8">

              <p className="text-slate-500 text-sm tracking-wide uppercase mb-4">
                March 2026
              </p>

              <h3 className="text-2xl text-slate-900 leading-relaxed">
                New work on nonlinear transport and quantum geometry
                uploaded to arXiv.
              </h3>

            </div>

            <div className="border-b border-slate-200 pb-8">

              <p className="text-slate-500 text-sm tracking-wide uppercase mb-4">
                APS March Meeting
              </p>

              <h3 className="text-2xl text-slate-900 leading-relaxed">
                Presented recent theoretical results on topological
                quantum systems and emergent transport responses.
              </h3>

            </div>

            <div className="border-b border-slate-200 pb-8">

              <p className="text-slate-500 text-sm tracking-wide uppercase mb-4">
                Research Collaboration
              </p>

              <h3 className="text-2xl text-slate-900 leading-relaxed">
                Ongoing collaborations in condensed matter theory,
                topology, and non-Hermitian quantum systems.
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* RESEARCH VISION */}
      <section className="bg-[#081220] border-t border-slate-800">

        <div className="max-w-5xl mx-auto px-6 py-40">

          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-10">
            Research Vision
          </p>

          <p className="text-4xl lg:text-5xl leading-tight font-light text-white">
            Understanding emergent quantum phenomena through topology,
            geometry, and transport in condensed matter systems.
          </p>

          <p className="mt-12 text-xl text-slate-500 leading-relaxed max-w-3xl">
            Current research focuses on nonlinear transport phenomena,
            Berry curvature effects, topological superconductivity,
            and quantum geometric responses in strongly correlated
            and non-Hermitian systems.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}

