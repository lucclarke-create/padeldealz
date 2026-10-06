const steps = [
  {
    title: "Vergelijk",
    body: "Zelfde product, meerdere shops. Je ziet prijs, verzending en het echte totaal.",
  },
  {
    title: "Vertrouw",
    body: "Elke aanbieding toont de webshop, het land en een betrouwbaarheidsscore.",
  },
  {
    title: "Bespaar",
    body: "Kies de beste deal en ga naar de shop. PadelDealz rekent zelf niets af.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="scroll-mt-24 border-t border-line bg-line/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Hoe het werkt</h2>
        <ul className="mt-10 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="space-y-3">
              <p className="text-sm font-medium text-orange">{`0${index + 1}`}</p>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
