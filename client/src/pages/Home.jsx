function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

           {/* LEFT - TEXT */}
          <div>
            <p className="font-semibold tracking-[0.2em] text-sky-400">
              RPKL IT ORGANIZATION
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight">
              Build Future
              <br />
              Innovators
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Learn programming, robotics, multimedia, and game development
              together in one collaborative community.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700">
                Explore
              </button>

              <button className="rounded-full border border-slate-500 px-7 py-3 font-semibold transition hover:bg-slate-800">
                Login
              </button>

            </div>

          </div>

           {/* RIGHT - IMAGE */}
          <div>
            <img
              src="/assets/images/gamedev.png"
              alt="RPKL workspace"
              className="w-full rounded-3xl object-cover"
            />
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;