type Props = {
  children: React.ReactNode;
  bg?: "white" | "soft" | "dark";
};

export default function SectionWrapper({ children, bg = "white" }: Props) {
  const map = {
    white: "bg-white",
    soft: "bg-[#F7F9FF]",
    dark: "bg-[#020A18] text-white",
  };

  return (
    <section className={`py-32 ${map[bg]}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">{children}</div>
    </section>
  );
}
