import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GroupPage() {
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
              Group
            </p>

            <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
              Quantum Condensed Matter Group
            </h1>

          </div>

        </div>

      </section>

{/* PRINCIPAL INVESTIGATOR */}
<section className="bg-white border-t border-slate-200">

  <div className="max-w-5xl mx-auto px-6 py-16">

    <div className="grid lg:grid-cols-12 gap-10 items-start">

      {/* LEFT LABEL */}
      <div className="lg:col-span-2">

        <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500 leading-[1.7]">
          Principal
          <br />
          Investigator
        </p>

      </div>

      {/* CONTENT */}
      <div className="lg:col-span-10">

        <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">

          {/* IMAGE */}
          <div>

            <div className="w-[220px] h-[270px] overflow-hidden bg-slate-200">

              <img
                src="/professor.jpg"
                alt="Dr. Snehasish Nandy"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* TEXT */}
          <div className="pt-1 max-w-xl">

            {/* NAME */}
            <h2 className="text-[42px] font-light tracking-tight text-slate-900 mb-5 leading-none">
              Snehasish Nandy
            </h2>

            {/* DESIGNATION */}
            <div className="space-y-1 text-[15px] text-slate-600 leading-[1.5] mb-6">

              <p>Email: snehasisphys@gmail.com, snehasish@phy.nits.ac.in </p>

              

            </div>

            {/* DIVIDER */}
            <div className="w-8 h-px bg-slate-300 mb-6"></div>

            {/* BIO */}
            <p className="text-[15px] leading-[1.8] text-slate-500 mb-6">

              Research interests include nonlinear quantum transport,
              Berry curvature physics, topology,
              quantum geometry, and non-Hermitian systems.

            </p>

            {/* DIVIDER */}
            <div className="w-8 h-px bg-slate-300 mb-6"></div>

            {/* LINKS */}
            <div className="flex items-center gap-6 text-[15px]">

              <a
                href="#"
                className="text-slate-500 hover:text-cyan-700 transition duration-300 border-b border-slate-300 pb-1"
              >
                Google Scholar
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-cyan-700 transition duration-300 border-b border-slate-300 pb-1"
              >
                ResearchGate
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-cyan-700 transition duration-300 border-b border-slate-300 pb-1"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* PHD STUDENTS */}
<section className="bg-white border-t border-slate-200">

  <div className="max-w-5xl mx-auto px-6 py-16">

    <div className="grid lg:grid-cols-12 gap-10 items-start">

      {/* LEFT LABEL */}
      <div className="lg:col-span-2">

        <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500 leading-[1.7]">
          PhD
          <br />
          Students
        </p>

      </div>

      {/* STUDENT CONTENT */}
      <div className="lg:col-span-10">

        <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">

          {/* PHOTO */}
          <div>

            <div className="w-[220px] h-[270px] overflow-hidden bg-slate-200">

              <img
                src="/student1.jpg"
                alt="Ritwik Roy"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* TEXT */}
          <div className="pt-1 max-w-xl">

            {/* NAME */}
            <h2 className="text-[38px] font-light tracking-tight text-slate-900 mb-5 leading-none">
              Ritwik Roy
            </h2>
{/* DESIGNATION */}
            <div className="space-y-1 text-[15px] text-slate-600 leading-[1.5] mb-6">

              <p>Email: ritwik24_rs@phy.nits.ac.in </p>

              

            </div>
            
            {/* DIVIDER */}
            <div className="w-8 h-px bg-slate-300 mb-6"></div>

            {/* RESEARCH */}
            <p className="text-[15px] leading-[1.8] text-slate-500 mb-6">

              Optical Response in Superconductors

            </p>

            {/* DIVIDER */}
            <div className="w-8 h-px bg-slate-300 mb-6"></div>

            {/* STATUS */}
            <div className="space-y-1 text-[14px] text-slate-500">

              <p>Ongoing</p>

              <p>Academic Year : 2024–2025</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* MSC STUDENTS */}
<section className="bg-white border-t border-slate-200">

  <div className="max-w-5xl mx-auto px-6 py-16">

    <div className="grid lg:grid-cols-12 gap-10 items-start">

      {/* LEFT LABEL */}
      <div className="lg:col-span-2">

        <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500 leading-[1.7]">
          MSc
          <br />
          Students
        </p>

      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-10 space-y-16">

        {/* STUDENT 1 */}
        <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start border-b border-slate-200 pb-12">

          {/* PHOTO */}
          <div>

            <div className="w-[180px] h-[220px] overflow-hidden bg-slate-200">

              <img
                src="/msc1.jpg"
                alt="Student Name"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* TEXT */}
          <div className="pt-1 max-w-xl">

            {/* NAME */}
            <h2 className="text-[34px] font-light tracking-tight text-slate-900 mb-4 leading-none">
              Student Name
            </h2>

           {/* DESIGNATION */}
            <div className="space-y-1 text-[15px] text-slate-600 leading-[1.5] mb-6">

              <p>Email: </p>

              

            </div>

            {/* DIVIDER */}
            <div className="w-8 h-px bg-slate-300 mb-5"></div>

            {/* RESEARCH */}
            <p className="text-[15px] leading-[1.8] text-slate-500 mb-5">

              Research topic goes here

            </p>

            {/* DIVIDER */}
            <div className="w-8 h-px bg-slate-300 mb-5"></div>

            {/* STATUS */}
            <div className="space-y-1 text-[14px] text-slate-500">

              <p>Ongoing</p>

              <p>Academic Year : 2024–2025</p>

            </div>

          </div>

        </div>

        {/* STUDENT 2 */}
        <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start">

          {/* PHOTO */}
          <div>

            <div className="w-[180px] h-[220px] overflow-hidden bg-slate-200">

              <img
                src="/msc2.jpg"
                alt="Student Name"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* TEXT */}
          <div className="pt-1 max-w-xl">

            {/* NAME */}
            <h2 className="text-[34px] font-light tracking-tight text-slate-900 mb-4 leading-none">
              Student Name
            </h2>

            {/* DESIGNATION */}
            <div className="space-y-1 text-[15px] text-slate-600 leading-[1.5] mb-6">

              <p>Email: </p>

              

            </div>

            {/* DIVIDER */}
            <div className="w-8 h-px bg-slate-300 mb-5"></div>

            {/* RESEARCH */}
            <p className="text-[15px] leading-[1.8] text-slate-500 mb-5">

              Research topic goes here

            </p>

            {/* DIVIDER */}
            <div className="w-8 h-px bg-slate-300 mb-5"></div>

            {/* STATUS */}
            <div className="space-y-1 text-[14px] text-slate-500">

              <p>Ongoing</p>

              <p>Academic Year : 2024–2025</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

  {/* RESEARCH ENVIRONMENT */}
<section className="bg-[#081220] border-t border-slate-800">

  <div className="max-w-6xl mx-auto px-6 py-20">

    <div className="grid lg:grid-cols-12 gap-12 items-start">

      {/* LEFT LABEL */}
      <div className="lg:col-span-2">

        <p className="text-[12px] uppercase tracking-[0.28em] text-slate-500 leading-[1.7]">
          Research
          <br />
          Environment
        </p>

      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-10">

        <h2 className="text-3xl lg:text-5xl leading-[1.25] font-light text-white max-w-5xl">

          The group works at the intersection of topology,
          geometry, and transport phenomena, combining analytical
          methods, semiclassical theory, and condensed matter physics.

        </h2>

        <p className="mt-8 text-[17px] lg:text-[19px] text-slate-300 leading-[1.8] max-w-4xl">

          Research spans nonlinear quantum transport,
          Berry curvature effects, topological superconductivity,
          quantum geometric responses, and emergent phenomena
          in strongly correlated and non-Hermitian systems.

        </p>

      </div>

    </div>

  </div>

</section>

      <Footer />

    </main>
  );
}