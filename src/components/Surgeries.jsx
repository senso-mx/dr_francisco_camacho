const SURGERIES = [
  {
    title: "Implante de mamas",
    image: `${process.env.BASE_PATH || ""}/images/implantesdemama.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    price: "Desde $70,000 MXN",
  },
  {
    title: "Liposucción",
    image: `${process.env.BASE_PATH || ""}/images/lipo.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    price: "Desde $115,000 MXN",
  },
  {
    title: "Lifting Facial",
    image: `${process.env.BASE_PATH || ""}/images/lifting.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    price: "Precio por Valoración",
  },
  {
    title: "Aumento de Glúteos",
    image: `${process.env.BASE_PATH || ""}/images/gluteos.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    price: "Desde $130,000 MXN",
  },
  {
    title: "Abdominoplastia",
    image: `${process.env.BASE_PATH || ""}/images/abdomino.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    price: "Desde $100,000 MXN",
  },
  {
    title: "Rinoplastia",
    image: `${process.env.BASE_PATH || ""}/images/rino.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    price: "Desde $70,000 MXN",
  },
];

export default function Surgeries() {
  return (
    <section className="section-container overlap-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SURGERIES.map((surgery, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-2 min-h-48 rounded-lg p-4"
            style={{
              background: `url(${surgery.image})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "transparent",
              aspectRatio: "16/9",
              position: "relative",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full gradiente rounded-lg"></div>
            <div className="z-10">
              <h3 className="text-center text-white">{surgery.title}</h3>
                  <hr />
                  <p className="px-12 text-white">{surgery.price}</p>
            </div>

            <a
              className="btn btn-secondary btn-sm px-12  z-10"
              href={surgery.link}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              Solicitar Valoración
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
