const countryLabels: Record<string, { flag: string; name: string }> = {
  NL: { flag: "🇳🇱", name: "Nederland" },
  BE: { flag: "🇧🇪", name: "België" },
  DE: { flag: "🇩🇪", name: "Duitsland" },
  FR: { flag: "🇫🇷", name: "Frankrijk" },
  ES: { flag: "🇪🇸", name: "Spanje" },
};

export function getCountryDisplay(code: string): { flag: string; name: string } {
  return countryLabels[code] ?? { flag: "", name: code };
}
