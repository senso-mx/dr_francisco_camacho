const SURGERIES = [
  {
    title: "Implabnte de mamas",
    image: "/images/hero.webp",
    link: "",
  },
  {
    title: "Liposucción",
    image: "/images/hero.webp",
    link: "",
  },
  {
    title: "Lifting Facial",
    image: "/images/hero.webp",
    link: "",
  },
  {
    title: "Aumento de Glúteos",
    image: "/images/hero.webp",
    link: "",
  },
  {
    title: "Abdominoplastia",
    image: "/images/hero.webp",
    link: "",
  },
  {
    title: "Rinoplastia",
    image: "/images/hero.webp",
    link: "",
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
            }}
          >
            <h3 className="text-center text-white">{surgery.title}</h3>
            <a
              className="btn btn-secondary btn-sm px-12"
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
