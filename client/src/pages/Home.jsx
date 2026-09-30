import Slider from "../components/Slider";

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20">

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

          {/* LEFT - TEXT */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-400">
              RPKL IT ORGANIZATION
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6x1">
              Build Future
              <br />
              Innovators
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              Learn programming, robotics, multimedia, and game development
              together in one collaborative community.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700">
                Explore
              </button>

              <button className="rounded-full border border-slate-500 px-7 py-3 font-semibold transition hover:bg-slate-800">
                Login
              </button>

            </div>

            <div className="mt-12 flex flex-wrap gap-8 md:gap-12">



              <div>
                <p className="text-3xl font-semibold">18</p>
                <p className="mt-2 text-sm text-sky-300">Members</p>
              </div>

              <div>
                <p className="text-3xl font-semibold">1</p>
                <p className="mt-2 text-sm text-sky-300">Projects</p>
              </div>

              <div>
                <p className="text-3xl font-semibold">6</p>
                <p className="mt-2 text-sm text-sky-300">Divisions</p>
              </div>

            </div>

          </div>

          {/* RIGHT - IMAGE */}
          <Slider />

        </div>

      </section>

      <section className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-sky-400">
              WHAT WE DO
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Welcome to RPKL IT Club!
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Selamat datang di wadah kreativitas digital [Nama Sekolah].
              Kami adalah komunitas tempat berkumpulnya para inovator muda,
              pencinta teknologi, dan calon developer masa depan. Di sini,
              kami belajar, berkolaborasi, dan menciptakan solusi digital
              untuk menghadapi masa depan.
            </p>
          </div>

          {/* Why Join */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              🚀 Mengapa Harus Join IT Club?
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <h4 className="font-semibold text-white">
                  Skill Masa Depan
                </h4>

                <p className="mt-1 leading-7 text-slate-400">
                  Pelajari keahlian yang sangat dibutuhkan di era digital,
                  mulai dari coding hingga desain grafis.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Proyek Nyata
                </h4>

                <p className="mt-1 leading-7 text-slate-400">
                  Jangan cuma belajar teori! Kamu akan diajak membuat
                  website, aplikasi, atau game buatanmu sendiri.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Komunitas Seru
                </h4>

                <p className="mt-1 leading-7 text-slate-400">
                  Temukan teman-teman sefrekunsi yang punya passion
                  sama di bidang teknologi.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Lomba & Prestasi
                </h4>

                <p className="mt-1 leading-7 text-slate-400">
                  Kesempatan untuk mewakili sekolah dalam berbagai
                  kompetisi IT tingkat daerah maupun nasional.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;