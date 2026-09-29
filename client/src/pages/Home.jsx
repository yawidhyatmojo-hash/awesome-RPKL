import Slider from "../components/Slider";

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20">

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

          {/* LEFT - TEXT */}
          <div>
            <p className="font-semibold tracking-[0.2em] text-sky-400">
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

    </main>
  );
}

export default Home;