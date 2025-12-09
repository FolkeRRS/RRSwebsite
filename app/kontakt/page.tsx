export default function KontaktPage() {
    const members = [
      { name: "Erik Svadling", role: "Ljudtekniker", phone: "+46 70 496 77 43", mail: "erik@rrs.se" },
      { name: "Folke Fagerström", role: "Tekniker", phone: "+46 73 995 53 29", mail: "folke@rrs.se" },
      { name: "Henrik Lundin", role: "Ljusdesigner", phone: "+46 70 510 80 28", mail: "henrik@rrs.se" },
      { name: "Janne Arkegren", role: "Projektledare", phone: "+46 70 723 20 40", mail: "janne@rrs.se" },
      { name: "Joacim Fagerström", role: "Ekonomi / Admin", phone: "+46 73 642 03 65", mail: "jocke@rrs.se" },
      { name: "Joakim Ljungmark", role: "Projektledare", phone: "+46 70 243 07 67", mail: "joakim@rrs.se" },
      { name: "Jocke Nilsson", role: "Lager", phone: "+46 73 677 82 09", mail: "" },
      { name: "Lars Göran ”LG” Larsson", role: "Dry Hire", phone: "+46 70 545 15 60", mail: "lg@rrs.se" },
      { name: "Marcus Friberg", role: "Videotekniker", phone: "+46 70 758 33 08", mail: "marcus@rrs.se" },
      { name: "Mattias ”Rappen” Rapp", role: "Videotekniker", phone: "+46 70 550 48 53", mail: "rapp@rrs.se" },
      { name: "Melker Fagerström", role: "Ljustekniker", phone: "+46 73 708 98 96", mail: "melker@rrs.se" },
      { name: "Michael Beijbom", role: "Videotekniker", phone: "+46 70 758 33 05", mail: "michael@rrs.se" },
      { name: "Mikael Lindahl", role: "Lager", phone: "+46 70 758 33 01", mail: "lindahl@rrs.se" },
      { name: "Robert Wallbring", role: "Videotekniker", phone: "+46 70 550 61 05", mail: "robban@rrs.se" },
      { name: "Stefan Andréasson", role: "Videotekniker", phone: "+46 70 868 79 99", mail: "stefan@rrs.se" },
    ];
  
    return (
      <main className="min-h-screen bg-white text-neutral-900 px-10 pt-32 pb-24">
        <h1 className="text-center text-4xl font-light mb-12">Kontakt</h1>
  
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {members.map((m) => (
            <div className="border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 transition shadow-sm" key={m.name}>
              <h2 className="text-lg font-medium">{m.name}</h2>
              <p className="text-neutral-500 text-sm mb-3">{m.role}</p>
  
              <p className="text-sm mb-1">{m.phone}</p>
              {m.mail && (
                <a href={`mailto:${m.mail}`} className="text-sm underline text-neutral-700 hover:text-black">
                  {m.mail}
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    );
  }
  