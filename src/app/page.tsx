import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden relative">

      <Navbar />
{/* Atmospheric Background */}
<div className="absolute top-0 right-[-10%] w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

<div className="absolute top-[30%] left-[-15%] w-[700px] h-[700px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />
     
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

  {/* LEFT SIDE */}
  <div>

    <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-12">
      Department of Physics · National Institute of Technology Silchar
    </p>

    <h1 className="text-5xl lg:text-7xl leading-[1.05] font-semibold tracking-tight text-white max-w-6xl">
  Quantum Condensed Matter Group
</h1>

    <p className="mt-12 text-xl lg:text-2xl text-gray-300 leading-[1.9] max-w-3xl font-light">
      Research in topology, nonlinear transport,
      quantum geometry, Weyl systems,
      and emergent condensed matter phenomena.
    </p>

  </div>

  {/* RIGHT SIDE */}
<div className="relative hidden lg:flex items-center justify-center h-[600px]">

  {/* Outer Glow */}
  <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] animate-glow"></div>

  {/* Geometry */}
  <div className="relative w-[420px] h-[420px]">

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
    <div className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 blur-md"></div>

  </div>

</div>


</div>
      </section>

{/* About */}
<section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/[0.05]">

  <div className="grid lg:grid-cols-12 gap-20">

    {/* Left Label */}
    <div className="lg:col-span-2">

      <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
        About
      </p>

    </div>

    {/* Main Content */}
    <div className="lg:col-span-10">

      <div className="grid lg:grid-cols-[320px_1fr] gap-24 items-start">

        {/* LEFT PROFILE CARD */}
        <div className="space-y-8">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-white/10">

            <Image
              src="/professor.png"
              alt="Professor Snehasish Nandy"
              width={320}
              height={400}
              className="object-cover grayscale contrast-110 brightness-95"
              priority
            />

          </div>

          {/* Basic Info */}
          <div className="space-y-5">

            <div>

              <h2 className="text-3xl font-light text-white leading-tight">
                Dr. Snehasish Nandy
              </h2>

              <p className="mt-4 text-lg text-gray-400 leading-relaxed">
                Assistant Professor
                <br />
                Department of Physics
                <br />
                National Institute of Technology Silchar
              </p>

            </div>

            {/* Contact */}
            <div className="space-y-3 text-base text-gray-300">

              <p>
                <span className="text-gray-500">Email</span>
                <br />
                <a
                  href="mailto:snehasish@phy.nits.ac.in"
                  className="text-cyan-300 hover:text-white transition"
                >
                  snehasish@phy.nits.ac.in
                </a>
              </p>

              <p>
                <span className="text-gray-500">Phone</span>
                <br />
                +91 XXXXXXXXXX
              </p>

            </div>

            {/* Links */}
            <div className="flex items-center gap-5 pt-2">

              <a
                href="https://scholar.google.com/citations?user=gh2E7IIAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                <GraduationCap size={22} />
              </a>

              <a
                href="https://www.researchgate.net/profile/Snehasish-Nandy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition text-lg font-semibold"
              >
                RG
              </a>

              <a
                href="https://in.linkedin.com/in/snehasish-nandy-1529a215b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                <LinkIcon size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-20">

         
          {/* Side Information */}
<div className="space-y-20">

            {/* Research Interests */}
            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-6">
                Research Interests
              </p>

              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">

                <p>Nonlinear Quantum Transport</p>
                <p>Berry Curvature Physics</p>
                <p>Topological Quantum Matter</p>
                <p>Quantum Geometry</p>
                <p>Non-Hermitian Systems</p>

              </div>

            </div>

            {/* Academic Journey */}
            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-6">
                Academic Journey
              </p>

              <div className="space-y-5 text-lg text-gray-300 leading-relaxed">

                <p>
                  PhD — IIT Kharagpur
                </p>

                <p>
                  Post Doc — Los Alamos National Laboratory
                </p>

                <p>
                  Faculty — NIT Silchar
                </p>

              </div>

            </div>
<a
  href="#"
  className="text-cyan-300 hover:text-white transition"
>
  Curriculum Vitae →
</a>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* Selected Publications */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Selected Publications
            </p>

          </div>

          <div className="lg:col-span-9 space-y-14">

            <a
              href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.119.176804"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-white/10 pb-10 group"
            >

              <h3 className="text-3xl font-light leading-[1.6] text-white/90">
                Chiral anomaly as the origin of the planar Hall effect in Weyl semimetals
              </h3>

              <p className="text-gray-500 mt-5 text-lg">
                Physical Review Letters · 2017
              </p>

            </a>

            <a
              href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.195119"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-white/10 pb-10 group"
            >

              <h3 className="text-3xl font-light leading-[1.6] text-white/90">
                Nonlinear anomalous transverse responses induced by the Berry curvature quadrupole in systems with broken time-reversal symmetry
              </h3>

              <p className="text-gray-500 mt-5 text-lg">
                Physical Review B · 2024
              </p>

            </a>

            <a
              href="https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.032066"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-white/10 pb-10 group"
            >

              <h3 className="text-3xl font-light leading-[1.6] text-white/90">
                Fundamental relations for anomalous thermoelectric transport coefficients in the nonlinear regime
              </h3>

              <p className="text-gray-500 mt-5 text-lg">
                Physical Review Research · 2020
              </p>

            </a>

          </div>

        </div>

      </section>

      {/* Collaborations */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Collaborations
            </p>

          </div>

          <div className="lg:col-span-9 grid md:grid-cols-2 gap-x-20 gap-y-14">

            <div>

              <p className="text-2xl text-white mb-3">
                National Institute of Technology Silchar
              </p>

              <p className="text-gray-500 text-lg">
                Department of Physics
              </p>

            </div>

            <div>

              <p className="text-2xl text-white mb-3">
                Los Alamos National Laboratory
              </p>

              <p className="text-gray-500 text-lg">
                Theoretical & Computational Physics
              </p>

            </div>

            <div>

              <p className="text-2xl text-white mb-3">
                IIT Kharagpur
              </p>

              <p className="text-gray-500 text-lg">
                Doctoral Research & Collaboration
              </p>

            </div>

            <div>

              <p className="text-2xl text-white mb-3">
                Max Planck Institute for the Physics of Complex Systems
              </p>

              <p className="text-gray-500 text-lg">
                Guest Scientist Collaboration
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Updates */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-white/[0.05]">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-3">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Recent Updates
            </p>

          </div>

          <div className="lg:col-span-9 space-y-12">

            <div className="border-b border-white/10 pb-10">

              <p className="text-gray-500 text-sm uppercase tracking-wide mb-5">
                March 2026
              </p>

              <h3 className="text-3xl font-light leading-[1.6] text-white/90">
                New work on nonlinear transport and quantum geometry uploaded to arXiv.
              </h3>

            </div>

            <div className="border-b border-white/10 pb-10">

              <p className="text-gray-500 text-sm uppercase tracking-wide mb-5">
                APS March Meeting
              </p>

              <h3 className="text-3xl font-light leading-[1.6] text-white/90">
                Presented recent theoretical results on topological quantum systems and emergent transport responses.
              </h3>

            </div>

            <div>

              <p className="text-gray-500 text-sm uppercase tracking-wide mb-5">
                Research Collaboration
              </p>

              <h3 className="text-3xl font-light leading-[1.6] text-white/90">
                Ongoing collaborations in condensed matter theory, topology, and non-Hermitian quantum systems.
              </h3>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}


