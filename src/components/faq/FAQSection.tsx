import FAQItem from "./FAQItem";

type FAQ = {
  q: string;
  a: string;
};

type Props = {
  items: FAQ[];
};

export default function FAQSection({ items }: Props) {
  return (
    <section id="sss" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 space-y-3">
        {items.map((item) => (
          <FAQItem key={item.q} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  );
}
