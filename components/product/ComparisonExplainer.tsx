export function ComparisonExplainer() {
  return (
    <section className="border-t border-line pt-12">
      <h2 className="text-xl font-semibold tracking-tight">Hoe bepalen we de beste deal?</h2>
      <ul className="mt-6 max-w-2xl space-y-3 text-sm leading-6 text-muted">
        <li>We kijken naar de totale prijs inclusief verzending, niet alleen naar de productprijs.</li>
        <li>Beschikbaarheid telt mee: uitverkochte shops staan onderaan en zijn niet de beste deal.</li>
        <li>
          We tonen land, beoordeling en reviews van de webshop, zodat je niet alleen naar de laagste
          prijs hoeft te kijken.
        </li>
        <li>Kortingscodes kunnen de uiteindelijke deal verbeteren; die staan als badge bij de shop.</li>
      </ul>
      <p className="mt-6 text-xs text-muted">Prototype — prijzen en aanbiedingen zijn fictief.</p>
    </section>
  );
}
