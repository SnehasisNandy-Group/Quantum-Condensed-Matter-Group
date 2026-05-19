import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AlumniPage() {

  return (

    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      {/* ALUMNI */}
      <section className="bg-white">

        <div className="max-w-5xl mx-auto px-6 py-24">

          {/* PAGE TITLE */}
          <h1 className="text-5xl font-light mb-16">
            Alumni
          </h1>

          <div className="space-y-10">

            {/* ALUMNI 1 */}
            <div className="border-b border-slate-200 pb-8">

              <h2 className="text-[28px] font-light tracking-tight text-slate-900 mb-2">
                Mandira Narayan
              </h2>

              <div className="space-y-0 text-[14px] text-slate-600 leading-[1.5] mb-3">

                <p>MSc Student</p>

                <p>Department of Physics, NIT Silchar</p>

                <p>Academic Year : 2024–2025</p>

              </div>

              <div className="w-8 h-px bg-slate-300 mb-3"></div>

              <p className="text-[14px] leading-[1.6] text-slate-500">
                Anomalous Responses in Weyl Semimetals
              </p>

            </div>

            {/* ALUMNI 2 */}
            <div className="border-b border-slate-200 pb-8">

              <h2 className="text-[28px] font-light tracking-tight text-slate-900 mb-2">
                Nitesh Kumar
              </h2>

              <div className="space-y-0 text-[14px] text-slate-600 leading-[1.5] mb-3">

                <p>MSc Student</p>

                <p>Department of Physics, NIT Silchar</p>

                <p>Academic Year : 2024–2025</p>

              </div>

              <div className="w-8 h-px bg-slate-300 mb-3"></div>

              <p className="text-[14px] leading-[1.6] text-slate-500">
                Superconductivity in Altermagnets
              </p>

            </div>

            {/* ALUMNI 3 */}
            <div>

              <h2 className="text-[28px] font-light tracking-tight text-slate-900 mb-2">
                Mangaldeep Sinha
              </h2>

              <div className="space-y-0 text-[14px] text-slate-600 leading-[1.5] mb-3">

                <p>MSc Student</p>

                <p>Department of Physics, NIT Silchar</p>

                <p>Academic Year : 2024–2025</p>

              </div>

              <div className="w-8 h-px bg-slate-300 mb-3"></div>

              <p className="text-[14px] leading-[1.6] text-slate-500">
                Finite Temperature Study of Chiral Magnets
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}