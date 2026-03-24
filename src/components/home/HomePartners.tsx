export default function HomePartners() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-10">
          Global Markalar & Teknoloji Ortakları
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center opacity-80">
          {[
            "/logos/digicert.svg",
            "/logos/geotrust.png",
            "/logos/thawte.png",
            "/logos/rapidssl.png",
            "/logos/cloudflare.png",
            "/logos/sectigo.png",
            "/logos/venafi.png",
            "/logos/keeper.png",
            "/logos/securenvoy.png",
            "/logos/nospamproxy.png",
            "/logos/keytalk.png",
            "/logos/positiveSSL.png",
          ].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <img
                src={logo}
                alt="Partner Logo"
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
