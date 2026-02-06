import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-950 text-white">
        {/* HERO */}
        <section className="relative px-6 pt-36 pb-32 overflow-hidden text-center">
          {/* background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-red-600/10 blur-[140px]" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            <span className="inline-block mb-6 text-xs font-semibold tracking-widest text-red-500 uppercase">
              About the Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Forged with intent.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
              Built to remove hesitation between idea and execution — so momentum
              never breaks.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="px-6 pb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Why We Exist",
                desc:
                  "Modern developers lose momentum fighting tools instead of building. We exist to remove friction, shorten feedback loops, and keep you in flow.",
              },
              {
                title: "What We Believe",
                desc:
                  "Clarity beats complexity. Execution beats intention. Real learning happens when theory meets immediate action.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="
                  relative p-10 rounded-2xl
                  bg-zinc-900/70
                  border border-zinc-800
                  transition-all duration-300
                  hover:border-red-500/60
                  hover:-translate-y-1
                "
              >
                <h3 className="text-2xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-4 text-zinc-400 text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION */}
        <section className="px-6 pb-40">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Our Mission
            </h2>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              To build a learning system that thinks like an engineer —
              structured, fast, and precise.
              <br />
              No distractions. No noise. Just progress.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
