const SURGERIES = [
  {
    title: "Microcirugía",
    image: `${process.env.BASE_PATH || ''}/images/micro.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
  },
  {
    title: "Cirugía Parálisis facial",
    image: `${process.env.BASE_PATH || ''}/images/paralisis.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
  },
  {
    title: "Cirugía Plexo braquial",
    image: `${process.env.BASE_PATH || ''}/images/plexo.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
  },
  {
    title: "Cirugía Nervio Periferico Hombro",
    image: `${process.env.BASE_PATH || ''}/images/nervio.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
  },
  {
    title: "Cirugía de nervio radial",
    image: `${process.env.BASE_PATH || ''}/images/radial.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
  },
  {
    title: "Cirugía de nervio Mediano",
    image: `${process.env.BASE_PATH || ''}/images/mediano.webp`,
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
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
              aspectRatio : "16/9",
              position: "relative"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full gradiente rounded-lg"></div>
            <h3 className="text-center text-white z-10">{surgery.title}</h3>
            <a
              className="btn btn-neutral btn-sm px-12  z-10"
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
