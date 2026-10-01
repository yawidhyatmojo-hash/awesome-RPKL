function About() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* TEXT */}
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-sky-400">
              ABOUT RPKL
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Mengenal 
              <br />
              RPKL IT CLUB
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              RPKL IT Organization adalah wadah bagi siswa untuk belajar,
              berkolaborasi, dan mengembangkan kemampuan di bidang teknologi.
              Kami mendorong anggota untuk menciptakan karya, menyelesaikan
              masalah, dan terus berkembang bersama.
            </p>
          </div>

          {/* LANYARD */}
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex h-[380px] w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-900/50">
              <p className="text-sm text-slate-500">
                Lanyard akan dipasang di sini
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default About;