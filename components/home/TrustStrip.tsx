const items = [
  { label: "Insured", sub: "& trained crew" },
  { label: "Locally Owned", sub: "Ogden, UT" },
  { label: "Free Estimates", sub: "no obligation" },
];

export function TrustStrip() {
  return (
    <div className="flex justify-around border-b border-brand-100 bg-gradient-to-b from-brand-100/60 to-brand-50 px-4 py-6">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center">
          {i > 0 && <div className="mr-6 h-8 w-px bg-brand-100 sm:mr-10" />}
          <div className="text-center">
            <div className="font-heading text-lg font-bold text-brand-900">{item.label}</div>
            <div className="text-xs text-brand-500">{item.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
