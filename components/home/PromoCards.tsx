import Link from "next/link";

const cards = [
  {
    title: "Get A Free Estimate",
    body: "Tell us about your space and we'll put together a no-obligation price quote.",
    color: "bg-brand-600",
  },
  {
    title: "Gift Cards Available",
    body: "Give the gift of a genuinely clean home — ask about gift cards for any service.",
    color: "bg-accent-500",
  },
  {
    title: "We Clean For A Reason",
    body: "Proud sponsors of Cleaning for a Reason, providing free cleanings to families fighting cancer.",
    color: "bg-brand-800",
  },
];

export function PromoCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href="/contact/"
            className={`${card.color} rounded-xl p-6 text-white transition hover:opacity-90`}
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-white/90">{card.body}</p>
            <span className="mt-4 inline-block text-sm font-semibold underline">Contact Us →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
