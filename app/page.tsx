// app/page.tsx

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/30">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* R R S vänster */}
          <p className="text-xs uppercase tracking-[0.38em] text-neutral-600">
            R R S
          </p>

          {/* Meny i mitten */}
          <nav className="flex gap-10 text-sm font-light text-neutral-700">
            <a href="/" className="hover:text-black transition">
              Hem
            </a>
            <a href="#projects" className="hover:text-black transition">
              Projekt
            </a>
            <a href="#services" className="hover:text-black transition">
              Om oss
            </a>
            <a href="/kontakt" className="hover:text-black transition">
              Kontakt
            </a>
          </nav>

          {/* Tom div för perfekt centrering */}
          <div className="w-[40px] opacity-0">•</div>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-[85vh] w-full flex flex-col items-center justify-center text-center px-6 pt-24">
        <h1 className="text-[32px] md:text-[48px] font-light leading-[1.25] text-neutral-900">
          Teknik som smälter in,<br />
          upplevelser som står ut.
        </h1>

        <p className="uppercase tracking-[0.32em] text-neutral-500 text-xs mt-4">
          Ljud • Ljus • Bild
        </p>

        <div className="flex gap-5 mt-10">
          <a
            href="/kontakt"
            className="px-7 py-3 rounded-full bg-black text-white text-sm hover:bg-neutral-900 transition"
          >
            Boka produktion
          </a>
          <a
            href="#projects"
            className="px-7 py-3 rounded-full border border-neutral-300 text-sm hover:border-neutral-900 transition"
          >
            Se projekt
          </a>
        </div>
      </section>

      {/* TJÄNSTER */}
      <section
        id="services"
        className="px-8 md:px-24 py-24 bg-[#fafafa] border-t border-neutral-200"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 mb-4">
          Tjänster
        </p>
        <div className="grid gap-14 md:grid-cols-3 text-sm text-neutral-600">
          <div>
            <h3 className="font-medium text-neutral-900">Eventproduktion</h3>
            <p>Live, corporate & konsert.</p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">Studio & streaming</h3>
            <p>Webinar & broadcast.</p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">Dry Hire</h3>
            <p>Hyr ljud, ljus & bild.</p>
          </div>
        </div>
      </section>

      {/* PROJEKT */}
      <section id="projects" className="px-8 md:px-24 py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 mb-4">
          Projekt
        </p>
        <div className="grid gap-10 md:grid-cols-3 text-sm text-neutral-700">
          {[
            "Techday – Telenor",
            "The Game – Avicii Arena",
            "Salesforce + Slack – Nobis Hotel",
            "ABBA Voyage – Live reveal",
            "EY – Entrepreneur Of The Year",
            "Zara Larsson – Dance Party",
          ].map((title) => (
            <div
              key={title}
              className="border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition"
            >
              <h3 className="text-neutral-900 font-medium">{title}</h3>
              <p className="text-neutral-500 text-xs">
                Ljud, ljus & bild med precision.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-[11px] text-neutral-500 text-center border-t border-neutral-200">
        © {new Date().getFullYear()} RRS — Teknik som smälter in, upplevelser som står ut.
      </footer>
    </main>
  );
}
