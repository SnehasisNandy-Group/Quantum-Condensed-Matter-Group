import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { title } from "process";

const publications = [
   {
    year: "2026",
    title: "Giant Spin Magnetization from Quantum Geometry in Altermagnets",
    journal: "arXiv preprint arXiv:2604.28088",
    link: "https://arxiv.org/abs/2604.28088",
  },

  {
    year: "2026",
    title: "Semiclassical theory of frequency dependent linear magneto-optical transport in Weyl semimetals",
    journal: "arXiv preprint arXiv:2604.11527",
    link: "https://arxiv.org/abs/2604.11527",
  },

  {
    year: "2026",
    title: "Magnetic field Controlled Anderson Delocalization in a Spinful Non-Hermitian Chain",
    journal: "arXiv preprint arXiv:2603.25700",
    link: "https://arxiv.org/abs/2603.25700",
  },

  {
    year: "2026",
    title: "Probing pure spin-rotation quantum geometry in persistent spin textures via nonlinear transport",
    journal: "arXiv preprint arXiv:2603.04023",
    link: "https://arxiv.org/abs/2603.04023",
  },

  {
    year: "2026",
    title: "Quantum geometry-driven photogalvanic responses in semi-Dirac systems",
    journal: "arXiv preprint arXiv:2603.00146",
    link: "https://arxiv.org/abs/2603.00146",
  },

{
    year: "2026",
    title: "Unveiling novel resonant interband contribution to polarizability in three-dimensional systems",
    journal: "New Journal of Physics",
    link: "https://iopscience.iop.org/article/10.1088/1367-2630/ae4136/meta",
  },
{
    year: "2026",
    title: "Intrinsic Nonlinear Gyrotropic Magnetic Effect Governed by Spin-Rotation Quantum Geometry",
    journal: "arXiv preprint arXiv:2601.22019",
    link: "https://arxiv.org/pdf/2601.22019",
  },

  {
    year: "2026",
    title: "Flexible and lightweight PVDF-CsPbBr 2 I piezoelectric nanogenerator with enhanced interfacial coupling for versatile high-output sensing applications",
    journal: "Journal of Materials Chemistry A",
    link: "https://pubs.rsc.org/en/content/articlelanding/2026/ta/d5ta10590k/unauth",
  },

 {
    year: "2025",
    title: "Gyrotropic Fingerprints of Magnetic Topological Insulator-Unconventional Magnet Interfaces",
    journal: "arXiv preprint arXiv:2512.18621",
    link: "https://arxiv.org/pdf/2512.18621",
  },

  {
    year: "2025",
    title: "Approximate half-integer quantization in anomalous planar transport in d-wave altermagnets",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/1b5p-k5vj",
  },

{
    year: "2025",
    title: "Electric field induced Berry curvature dipole and non-linear anomalous Hall effects in higher wave symmetric unconventional magnets",
    journal: "arXiv preprint arXiv:2510.20237",
    link: "https://arxiv.org/pdf/2510.20237",
  },

 {
    year: "2025",
    title: "Gauge field induced skin effect in spinful non-Hermitian systems",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/vhz9-xwf4",
  },

    {
    year: "2025",
    title: "Zeeman Quantum Geometry as a Probe of Unconventional Magnetism",
    journal: "arXiv preprint arXiv:2508.14745",
    link: "https://arxiv.org/pdf/2508.14745",
  },

  {
    year: "2025",
    title: "Role of disorder in the third-order anomalous Hall effect in time-reversal symmetric systems",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.235113",
  },

  {
    year: "2025",
    title: "Fingerprint of non-Hermiticity in a d-wave altermagnet",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.155119",
  },

  {
    year: "2025",
    title: "Topological optical pseudospin injection beyond Weyl semimetals",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.L041402",
  },

 {
    year: "2024",
    title: "Nonlinear anomalous transverse responses induced by the Berry curvature quadrupole in systems with broken time-reversal symmetry",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.195119",
  },

  {
    year: "2024",
    title: "Layer-dependent electronic structures and magnetic ground states of polar-polar LaVO3/KTaO3 (001) heterostructures",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.054402",
  },

   {
    year: "2024",
    title: "Second Harmonic Generation in Correlated Topological Semimetals",
    journal: "APS March Meeting Abstracts",
    link: "https://ui.adsabs.harvard.edu/abs/2024APS..MARZ04002N/abstract",
  },

  {
    year: "2024",
    title: "Quantum Hall effect in a Weyl-Hubbard model: Interplay between topology and correlation",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.109.085111",
  },

  {
    year: "2024",
    title: "Signature of nodal topology in nonlinear quantum transport across junctions in Weyl and multi-Weyl semimetals",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.109.045437",
  },

  {
    year: "2023",
    title: "Theoretical investigations on Kerr and Faraday rotations in topological multi-Weyl Semimetals",
    journal: "SciPost Physics",
    link: "https://www.scipost.org/SciPostPhys.15.4.133?acad_field_slug=politicalscience",
  },

  {
    year: "2023",
    title: "Third-order Hall effect in the surface states of a topological insulator",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.245141",
  },
{
    year: "2023",
    title: "Revisiting quantum transport across junctions of single and double-Weyl semimetals",
    journal: "Journal of Physics: Conference Series",
    link: "https://iopscience.iop.org/article/10.1088/1742-6596/2518/1/012005/meta",
  },

  {
    year: "2023",
    title: "Dark Matter Detection with Strongly Correlated Topological Materials: Flatband Effect",
    journal: "arXiv preprint arXiv:2305.19967",
    link: "https://arxiv.org/pdf/2305.19967",
  },


   {
    year: "2023",
    title: "Decoupling intranode and internode scattering in Weyl fermions",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.115161",
  },


   {
    year: "2023",
    title: "Quantum oscillations as a robust fingerprint of chiral anomaly in nonlinear response in Weyl semimetals",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.L081107",
  },

  {
    year: "2023",
    title: "Planar Hall effect without external magnetic field in strained Weyl semimetals",
    journal: "APS March Meeting Abstracts",
    link: "https://ui.adsabs.harvard.edu/abs/2023APS..MART00011G/abstract",
  },

  {
    year: "2023",
    title: "Weyl-Hubbard System: A Platform to Investigate the Interplay between Topology and Correlations",
    journal: "APS March Meeting Abstracts",
    link: "https://ui.adsabs.harvard.edu/abs/2023APS..MARF43007N/abstract",
  },

  {
    year: "2022",
    title: "Giant anomalous thermal Hall effect in tilted type-I magnetic Weyl semimetal Co3Sn2S2",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.245133",
  },

   {
    year: "2022",
    title: "Nonreciprocal optics and magnetotransport in Weyl metals as signatures of band topology",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.L041108",
  },
{
    year: "2022",
    title: "Higher-order topological phases on fractal latticesy",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.L201301",
  },

  
   {
    year: "2022",
    title: "Low-energy effective theory and anomalous Hall effect in monolayer WTe2",
    journal: "SciPost Physics",
    link: "https://www.scipost.org/SciPostPhys.12.4.120?acad_field_slug=all",
  },

  {
    year: "2022",
    title: "Chiral anomaly induced nonlinear Nernst and thermal Hall effects in Weyl semimetals",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.125131",
  },

  {
    year: "2022",
    title: "Higher-Order Topological Phases on Quantum Fractals",
    journal: "APS March Meeting Abstracts",
    link: "https://ui.adsabs.harvard.edu/abs/2022APS..MARB59012R/abstract",
  },

  {
    year: "2021",
    title: "Chiral anomaly induced nonlinear Hall effect in semimetals with multiple Weyl points",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.205124",
  },

  {
    year: "2021",
    title: "Topological Magnus responses in two- and three-dimensional systems",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.115420",
  },
{
    year: "2021",
    title: "Nonlinear transport in Weyl semimetals induced by Berry curvature dipole",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.245119",
  },


  {
    year: "2021",
    title: "Nonlinear transport without spin-orbit coupling or warping in two-dimensional Dirac semimetals",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.L201202",
  },
{
    year: "2021",
    title: "Probing mirror anomaly and classes of Dirac semimetals with circular dichroism",
    journal: "Physical Review Research",
    link: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013230",
  },

  {
    year: "2020",
    title: "Chiral Magnetic Effect of Hot Electrons",
    journal: "Physical Review Letters",
    link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.125.266601",
  },

  {
    year: "2020",
    title: "Magneto-transport phenomena of type-I multi-Weyl semimetals in co-planar setups",
    journal: "Journal of Physics: Condensed Matter",
    link: "https://iopscience.iop.org/article/10.1088/1361-648X/abc310/meta",
  },

   {
    year: "2020",
    title: "Sign of longitudinal magnetoconductivity and the planar Hall effect in Weyl semimetals",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.205107",
  },

  {
    year: "2020",
    title: "Fundamental relations for anomalous thermoelectric transport coefficients in the nonlinear regime",
    journal: "Physical Review Research",
    link: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.032066",
  },

  {
    year: "2020",
    title: "Chirality-dependent planar Hall effect in inhomogeneous Weyl semimetals",
    journal: "Physical Review B",
    link: "https://arxiv.org/abs/1911.01130",
  },

   {
    year: "2020",
    title: "Wiedemann-Franz law and Mott relation for transport coefficients in the non-linear regime",
    journal: "Bulletin of the American Physical Society",
    link: "https://meetings.aps.org/Meeting/MAR20/Session/X60.6",
  },

  {
    year: "2020",
    title: "Dynamic chiral magnetic effect and anisotropic natural optical activity of tilted Weyl semimetals",
    journal: "Scientific reports",
    link: "https://www.nature.com/articles/s41598-020-59385-6",
  },

  {
    year: "2019",
    title: "Generalized Triple-Component Fermions: Lattice Model, Fermi arcs and Anomalous Transport",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.235201",
  },

  {
    year: "2020",
    title: "Nonlinear Nernst effect in bilayer WTe2",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.245102",
  },

  {
    year: "2019",
    title: "Symmetry and quantum kinetics of the nonlinear Hall effect",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.195117",
  },

  {
    year: "2019",
    title: "Planar Thermal Hall Effect in Weyl Semimetals",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.115139",
  },
{
    year: "2019",
    title: "Mirror anomaly and anomalous Hall effect in type-I Dirac semimetals",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.99.075116",
  },

  {
    year: "2019",
    title: "The weight of the Berry Curvature Dipole",
    journal: "APS March Meeting Abstracts",
    link: "https://ui.adsabs.harvard.edu/abs/2019APS..MART70263M/abstract",
  },

  {
    year: "2018",
    title: "Ultrafast time-resolved investigations of excitons and biexcitons at room temperature in layered WS2",
    journal: "2D Materials",
    link: "https://iopscience.iop.org/article/10.1088/2053-1583/aae872/meta",
  },

  {
    year: "2018",
    title: "Berry phase theory of planar Hall effect in topological insulators",
    journal: "Scientific Reports",
    link: "https://www.nature.com/articles/s41598-018-33258-5",
  },

  {
    year: "2018",
    title: "Suppression of the Hall number due to charge density wave order in high-Tc cuprates",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.195153",
  },

  {
    year: "2018",
    title: "Nature of spiral state and absence of electric polarisation in Sr-doped YBaCuFeO5 revealed by first-principle study",
    journal: "Scientific Reports",
    link: "https://www.nature.com/articles/s41598-018-20774-7",
  },

   {
    year: "2018",
    title: "Electronic structure of metallic tetra-boride TmB4: An LDA+ DMFT study",
    journal: "arXiv preprint arXiv:1807.05388",
    link: "https://www.academia.edu/download/79662122/1807.pdf",
  },

  {
    year: "2018",
    title: "Planar hall effect in Weyl semimetals",
    journal: "Proceedings of the national conference on quantum condensed matter",
    link: "https://inis.iaea.org/records/t3jxa-fss51",
  },

  {
    year: "2018",
    title: "Magnetic transition, nature of spiral state, and absence of electric polarisation in Sr doped YBaCuFeO5: A DFT+ QMC study",
    journal: "Proceedings of the national conference on quantum condensed matter",
    link: "https://inis.iaea.org/records/yrwcq-kcj84",
  },


  {
    year: "2018",
    title: "Chiral anomaly as origin of planar Hall effect in Weyl semimetals",
    journal: "APS March Meeting Abstracts",
    link: "https://ui.adsabs.harvard.edu/abs/2018APS..MARF40002T/abstract",
  },


  {
    year: "2017",
    title: "Chiral anomaly as the origin of the planar Hall effect in Weyl semimetals",
    journal: "Physical Review Letters",
    link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.119.176804",
  },

  {
    year: "2016",
    title: "Anomalous transport near the Lifshitz transition at the LaAlO 3/SrTiO 3 interface",
    journal: "Physical Review B",
    link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.94.155103",
  },

];

export default function PublicationsPage() {

  const groupedPublications = publications.reduce((acc, publication) => {

    if (!acc[publication.year]) {
      acc[publication.year] = [];
    }

    acc[publication.year].push(publication);

    return acc;

  }, {} as Record<string, typeof publications>);

return (
  <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

    <Navbar />

    {/* HERO */}
    <section className="relative bg-[#081220] overflow-hidden border-b border-slate-800">

      {/* Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Orbital Lines */}
      
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative z-10">

        <div className="max-w-5xl">

          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-12">
            Publications
          </p>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] text-white">
            Publications Archive
          </h1>

          <p className="mt-12 text-xl lg:text-2xl text-slate-300 leading-[1.9] max-w-4xl font-light">
            Research publications in condensed matter physics,
            topological systems, nonlinear transport,
            Berry curvature physics, and quantum geometry.
          </p>

        </div>

      </div>

    </section>

    {/* PUBLICATIONS */}
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        {Object.entries(groupedPublications)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([year, papers]) => (

            <div
              key={year}
              className="grid lg:grid-cols-12 gap-16 mb-28"
            >

              {/* YEAR */}
              <div className="lg:col-span-2">

                <h2 className="text-5xl lg:text-6xl font-semibold text-[#1d4ed8] sticky top-32">
                  {year}
                </h2>

              </div>

              {/* PAPERS */}
              <div className="lg:col-span-10">

                <div className="space-y-14">

                  {papers.map((paper, index) => (

                    <div
                      key={index}
                      className="border-b border-slate-200 pb-10"
                    >

                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >

                        <h3 className="text-2xl lg:text-3xl font-light text-slate-900 leading-[1.6] group-hover:text-cyan-600 transition duration-300">

                          {paper.title}

                        </h3>

                        <p className="text-slate-500 mt-5 text-lg">
                          {paper.journal}
                        </p>

                      </a>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

      </div>

    </section>

    <Footer />

  </main>
);
}