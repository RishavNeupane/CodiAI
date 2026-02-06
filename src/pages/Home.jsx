import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-950 text-white">
        {/* HERO */}
        <section className="relative px-6 pt-36 pb-32 overflow-hidden">
          {/* background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-red-600/10 blur-[140px]" />
            <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-red-500/5 blur-[160px]" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 text-xs font-semibold tracking-widest text-red-500 uppercase">
              Developer Learning Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Command the Code.
              <br />
              <span className="text-zinc-300">Build with confidence.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
              Structured learning for developers who want clarity, speed, and
              full control over how they grow.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/learning"
                className="px-8 py-4 rounded-xl bg-red-600 text-white font-semibold text-sm tracking-wide hover:bg-red-500 transition-all shadow-lg shadow-red-600/20"
              >
                Start Learning
              </a>

              <a
                href="/about"
                className="px-8 py-4 rounded-xl border border-zinc-700 text-zinc-300 font-semibold text-sm tracking-wide hover:border-red-500 hover:text-white transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Built for serious learning
              </h2>
              <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
                No distractions. No fluff. Just focused tools designed to make
                you better, faster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Precision Intelligence",
                  desc: "Concepts explained with intent. Every detail refined for maximum clarity.",
                },
                {
                  title: "Relentless Speed",
                  desc: "Instant answers and efficient learning paths that respect your time.",
                },
                {
                  title: "Total Control",
                  desc: "Choose your depth, pace, and direction. You own the process.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    relative p-8 rounded-2xl
                    bg-zinc-900/70
                    border border-zinc-800
                    transition-all duration-300
                    hover:border-red-500/60
                    hover:-translate-y-1
                  "
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
