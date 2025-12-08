"use client";

import { useEffect } from "react";

export default function Page() {
  // Scroll reveal
  useEffect(() => {
    const elems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    elems.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden">
      {/* HEADER – R R S upp till vänster */}
      <header className="fixed top-0 left-0 right-0 z-40 px-8 py-6">
        <p className="text-xs uppercase tracking-[0.38em] text-neutral-500">
          R R S
        </p>
      </header>

      {/* HERO */}
      <section
        className="min-h-[85vh] flex flex-col items-center justify-center text-center px-8"
        data-reveal
      >
        <h1 className="mt-4 text-[30px] md:text-[38px] font-light leading-[1.35] text-neutral-800">
          Teknik som smälter in,
          <br /> upplevelser som står ut.
        </h1>

        <p className="mt-5 text-[15px] max-w-md font-light text-neutral-500">
          Ljud, ljus och bild som förstärker – aldrig tar över.{" "}
          Produktioner där tekniken är självklar, inte synlig.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="px-7 py-3 rounded-full bg-black text-white text-xs font-medium hover:bg-neutral-900 transition"
          >
            Boka produktion
          </a>
          <a
            href="#projects"
            className="px-7 py-3 rounded-full border border-neutral-300 text-xs hover:border-black transition"
          >
            Se projekt
          </a>
        </div>
      </section>

      {/* TJÄNSTER */}
      <section
        id="services"
        className="px-8 md:px-24 py-24 bg-[#fafafa] border-t border-neutral-200"
        data-reveal
      >
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 mb-4">
          Tjänster
        </p>
        <div className="grid gap-14 md:grid-cols-3 text-sm text-neutral-600">
          <div className="space-y-2">
            <h3 className="font-medium text-neutral-900 text-sm">
              Eventproduktion
            </h3>
            <p>
              Live, corporate och konsert – där ljus, ljud och bild sitter ihop
              från första rad till sista applåd.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-neutral-900 text-sm">
              Studio & streaming
            </h3>
            <p>
              Webinar, sändningar och inspelning från vår studio vid Avicii
              Arena. Du fokuserar på innehållet, vi tar tekniken.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-neutral-900 text-sm">
              Dry Hire & support
            </h3>
            <p>
              Hyr ljud, ljus och bild från oss – skala upp med oss som teknisk
              partner när det behövs.
            </p>
          </div>
        </div>
      </section>

      {/* PROJEKT */}
      <section
        id="projects"
        className="px-8 md:px-24 py-24"
        data-reveal
      >
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
            <article
              key={title}
              className="space-y-2 border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition"
            >
              <h3 className="text-neutral-900 font-medium text-sm">{title}</h3>
              <p className="text-neutral-500 text-xs">
                Ljud, ljus och bild med fokus på tydlighet, närvaro och tempo.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section
        id="contact"
        className="px-8 md:px-24 py-24 bg-[#fafafa] border-t border-neutral-200 text-center"
        data-reveal
      >
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">
          Kontakt
        </p>
        <p className="text-sm text-neutral-600 mb-8">
          Berätta kort om ert event eller projekt – vi återkommer med upplägg,
          möjlig teknik och budgetförslag.
        </p>
        <div className="max-w-md mx-auto flex flex-col gap-4 text-sm">
          <input
            placeholder="Namn"
            className="border border-neutral-300 px-4 py-2 rounded-xl outline-none focus:border-neutral-900"
          />
          <input
            placeholder="E-post"
            className="border border-neutral-300 px-4 py-2 rounded-xl outline-none focus:border-neutral-900"
          />
          <textarea
            rows={4}
            placeholder="Kort om projektet, datum eller idé…"
            className="border border-neutral-300 px-4 py-2 rounded-xl outline-none focus:border-neutral-900"
          />
          <button className="bg-black hover:bg-neutral-900 text-white rounded-full text-xs py-3 mt-2">
            Skicka förfrågan
          </button>
          <p className="pt-3 text-xs text-neutral-500">
            eller mejla direkt:{" "}
            <span className="text-neutral-800">hej@rrs.se</span>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-[11px] text-neutral-500 text-center border-t border-neutral-200">
        © {new Date().getFullYear()} RRS — Teknik som smälter in, upplevelser som står ut.
      </footer>
    </main>
  );
}
