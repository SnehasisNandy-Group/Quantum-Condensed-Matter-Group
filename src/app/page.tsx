
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
  <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

  <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 pt-10 pb-24 relative z-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div>

        <p className="text-sm uppercase tracking-[0.22em] text-slate-500 mb-10 whitespace-nowrap">
          Department of Physics · National Institute of Technology Silchar
        </p>

        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-white max-w-4xl">
          Quantum Condensed
          <br />
          Matter Group
        </h1>

        <p className="mt-10 max-w-2xl text-lg lg:text-xl text-slate-300 leading-[1.9] font-light">
          Research in topology, nonlinear quantum transport,
          Berry curvature physics, quantum geometry,
          and emergent condensed matter phenomena.
        </p>

        {/* Accent Line */}
        <div className="mt-12 w-24 h-px bg-cyan-400/70"></div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative hidden lg:flex items-center justify-center h-[520px]">

        {/* Outer Glow */}
        <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px] animate-glow"></div>

        {/* Geometry */}
        <div className="relative w-[360px] h-[360px] opacity-80">

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

          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 blur-md"></div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ABOUT SECTION */}
<section className="bg-white border-t border-slate-200">

  <div className="max-w-7xl mx-auto px-6 pt-10 pb-24">

    <div className="grid lg:grid-cols-12 gap-16 items-start">

      {/* LEFT PANEL */}
      <div className="lg:col-span-4">

        <p className="text-sm uppercase tracking-[0.28em] text-slate-500 mb-8">
          About
        </p>

        {/* PI Card */}
        <div className="max-w-[280px]">

          {/* Professor Image */}
          <div className="w-[250px] h-[320px] bg-slate-200 overflow-hidden rounded-sm mb-5">

            <img
              src="/professor.jpg"
              alt="Dr. Snehasish Nandy"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Name */}
          <div className="mb-">

            <h3 className="text-[26px] leading-none font-medium text-slate-900 mb-3">
              Dr. Snehasish Nandy
            </h3>

            <p className="text-slate-600 leading-[1.45] text-[15px]">
              Assistant Professor
              <br />
              Department of Physics
              <br />
              National Institute of Technology Silchar
            </p>

          </div>

          {/* Contact */}
          <div className="space-y-2 text-slate-600 text-[15px] mb-3">

            <p>
              snehasish@phy.nits.ac.in
            </p>

            <p>
              +91 XXXXX XXXXX
            </p>

          </div>

{/* Social Links */}
<div className="flex items-center gap-4 pt-3">

  {/* Google Scholar */}
  <a
    href="https://scholar.google.com/citations?user=gh2E7IIAAAAJ&hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-cyan-700 hover:border-cyan-700 transition duration-300"
  >
    <GraduationCap size={18} />
  </a>

  {/* ResearchGate */}
  <a
    href="https://www.researchgate.net/profile/Snehasish-Nandy"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-[13px] font-medium text-slate-600 hover:text-cyan-700 hover:border-cyan-700 transition duration-300"
  >
    RG
  </a>

  {/* LinkedIn */}
  <a
    href="https://in.linkedin.com/in/snehasish-nandy-1529a215b"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-cyan-700 hover:border-cyan-700 transition duration-300"
  >
    <LinkIcon size={18} />
  </a>

</div>
{/* CV Link */}
<div className="pt-8">

  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-3 text-[15px] tracking-wide text-slate-700 hover:text-cyan-700 transition duration-300"
  >
    <span>
      Curriculum Vitae
    </span>

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>

  </a>

</div>
        </div>

      </div>

      {/* CENTER CONTENT */}
      <div className="lg:col-span-5 pt-[78px]">

        <p className="text-[17px] lg:text-[21px] leading-[1.5] text-slate-900 font-light max-w-3xl text-justify">

          The group is led by Dr. Snehasish Nandy,
          Assistant Professor in the Department of Physics
          at the National Institute of Technology Silchar.
          Current research focuses on topology,
          transport phenomena, quantum geometry,
          and emergent condensed matter systems.

        </p>

      </div>

      {/* RIGHT PANEL */}
      <div className="lg:col-span-3 border-l border-slate-200 pl-10 pt-[78px] space-y-16">

        {/* Research Interests */}
        <div>

          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 mb-6">
            Research Interests
          </p>

          <div className="space-y-4 text-[17px] text-slate-700 leading-[1.5]">

            <p>Nonlinear Quantum Transport</p>
            <p>Berry Curvature Physics</p>
            <p>Topological Quantum Matter</p>
            <p>Quantum Geometry</p>
            <p>Non-Hermitian Systems</p>

          </div>

        </div>

        {/* Academic Journey */}
        <div>

          <p className="text-sm uppercase tracking-[0.22em] text-slate-500 mb-6">
            Academic Journey
          </p>

          <div className="space-y-5 text-[17px] text-slate-700 leading-[1.5]">

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

</section>


      {/* RESEARCH HIGHLIGHTS */}
      <section className="bg-[#0f172a] border-t border-slate-800">

        <div className="max-w-6xl mx-auto px-6 py-32">

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-1">

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">
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

  <div className="max-w-6xl mx-auto px-6 py-20">

    <div className="grid lg:grid-cols-12 gap-12 items-start">

      {/* LEFT LABEL */}
      <div className="lg:col-span-2">

        <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500">
          Research Vision
        </p>

      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-10">

        <h2 className="text-3xl lg:text-5xl leading-[1.2] font-light text-white max-w-5xl">

          Understanding emergent quantum phenomena through topology,
          geometry, and transport in condensed matter systems.

        </h2>

        <p className="mt-8 text-[17px] lg:text-[19px] text-slate-300 leading-[1.8] max-w-4xl">

          Current research focuses on nonlinear transport phenomena,
          Berry curvature effects, topological superconductivity,
          and quantum geometric responses in strongly correlated
          and non-Hermitian systems.

        </p>

      </div>

    </div>

  </div>

</section>

      <Footer />

    </main>
  );
}

