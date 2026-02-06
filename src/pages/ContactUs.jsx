import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-950 text-white px-6">
        <section className="relative flex items-center justify-center pt-36 pb-40 overflow-hidden">
          {/* background accent */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-red-600/10 blur-[140px]" />
          </div>

          <div className="relative max-w-xl w-full text-center">
            <span className="inline-block mb-6 text-xs font-semibold tracking-widest text-red-500 uppercase">
              Contact
            </span>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Let's Talk.
            </h1>

            <p className="mt-6 text-lg text-zinc-400">
              Questions, feedback, or collaboration, reach out and we'll respond
              with intent.
            </p>

            <form
              className="
                mt-14 p-10 rounded-2xl
                bg-zinc-900/70
                border border-zinc-800
                space-y-5
                transition-all
                hover:border-red-500/50
              "
            >
              <input
                className="
                  w-full bg-zinc-950
                  border border-zinc-800
                  px-4 py-3 rounded-lg
                  text-white placeholder:text-zinc-500
                  focus:outline-none focus:border-red-500
                "
                placeholder="Your name"
              />

              <input
                type="email"
                className="
                  w-full bg-zinc-950
                  border border-zinc-800
                  px-4 py-3 rounded-lg
                  text-white placeholder:text-zinc-500
                  focus:outline-none focus:border-red-500
                "
                placeholder="Your email"
              />

              <textarea
                rows="4"
                className="
                  w-full bg-zinc-950
                  border border-zinc-800
                  px-4 py-3 rounded-lg
                  text-white placeholder:text-zinc-500
                  focus:outline-none focus:border-red-500
                  resize-none
                "
                placeholder="Your message"
              />

              <button
                className="
                  w-full mt-4 py-3 rounded-xl
                  bg-red-600 text-white
                  font-semibold text-sm tracking-wide
                  hover:bg-red-500
                  transition-all
                  shadow-lg shadow-red-600/20
                "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;
