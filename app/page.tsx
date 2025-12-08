export default function Page() {
  return (
    <main className="smooth-scroll premium-site text-black bg-white overflow-x-hidden">

      {/* Hero */}
      <section className="relative h-[90vh] w-full flex items-center justify-center parallax-bg animate-zoom bg-[url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center text-center">
        {/* Ljus → mörk gradientoverlay för Apple-känsla */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-black/60" />

        <div className="relative bg-white/60 backdrop-blur-md p-12 md:p-16 rounded-3xl max-w-3xl animate-reveal shadow-xl">
          <p className="uppercase tracking-[0.25em] text-neutral-600 text-sm mb-2">
            Ljud • Ljus • Bild
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-4">
            Vi skapar upplevelser som känns.
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-6">
            Ljus. Ljud. Människor. Momentum.
          </p>
          <div className="flex justify-center gap-4 animate-fade-up-delay">
            <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-900 transition-transform duration-300 hover:scale-[1.03]">
              Boka produktion
            </button>
            <button className="px-6 py-3 rounded-full border border-neutral-600 hover:border-black transition-transform duration-300 hover:scale-[1.03] bg-white/70">
              Se projekt
            </button>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-8 py-28 animate-fade-up"
      >
        <h2 className="text-center text-4xl font-semibold mb-16">
          Tjänster
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Event</h3>
            <p className="text-neutral-600">
              Helhetsproduktion för liveupplevelser, konferenser och konserter där ljud,
              ljus och bild vävs samman till en tydlig upplevelse.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Studio</h3>
            <p className="text-neutral-600">
              Streama, spela in och skapa — i vår studio vid Avicii Arena.
              Byggt för livesändning, webinar och innehåll som känns professionellt.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Dry Hire</h3>
            <p className="text-neutral-600">
              För dig som vill hyra teknik eller bygga vidare på eget koncept —
              med stöd av tekniker som kan verkligheten på plats.
            </p>
          </div>
        </div>
      </section>

      {/* Projekt-galleri */}
      <section
        id="projects"
        className="bg-black text-white py-28 px-8 animate-fade-up"
      >
        <h2 className="text-center text-4xl font-semibold mb-16">
          Projekt
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 rounded-2xl p-6">Techday – Telenor</div>
          <div className="bg-white/5 rounded-2xl p-6">The Game – Avicii Arena</div>
          <div className="bg-white/5 rounded-2xl p-6">
            Salesforce + Slack – Nobis Hotel
          </div>
          <div className="bg-white/5 rounded-2xl p-6">ABBA Voyage Live reveal</div>
          <div className="bg-white/5 rounded-2xl p-6">
            EY Entrepreneur Of The Year
          </div>
          <div className="bg-white/5 rounded-2xl p-6">
            Zara Larsson – Dance Party
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-8 py-28 animate-fade-up"
      >
        <h2 className="text-center text-4xl font-semibold mb-12">
          Kontakt
        </h2>
        <p className="text-center text-neutral-700 mb-6">
          Vi älskar nya idéer — hör av dig!
        </p>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-neutral-700 text-lg">📞 08-324 324</p>
          <p className="text-neutral-700 mb-4">✉️ hej@rrs.se</p>
          <button className="px-8 py-3 rounded-full bg-black text-white hover:bg-neutral-900 transition-transform duration-300 hover:scale-[1.03]">
            Skicka förfrågan
          </button>
        </div>
      </section>
    </main>
  );
}
