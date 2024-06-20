import Image from "next/image";

const SURGERIES = [
  {
    title: "CARA",
    image: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
    description:
      "Procedimientos para rejuvenecer y mejorar tu apariencia, diseñados para armonizar y equilibrar rasgos faciales y resaltar tu belleza natural.",
    surgeries: [
      "Rinoplastia",
      "Bichectomia",
      "Lifting facial",
      "Cirugía de párpados",
      "Liposucción de papada",
    ],
  },
  {
    title: "CUERPO Y BUSTO",
    image: `${process.env.BASE_PATH || ""}/imgs/cuerpo-busto.webp`,
    description:
      "Define y realza tu silueta luciendo como siempre  has deseado. Tratamientos diseñados para lograr resultados naturales y armoniosos.",
    surgeries: [
      "Liposucción | Lipoescultura",
      "Abdominoplastia",
      "Aumento | Levantamiento de busto",
      "Aumento de glúteos",
      "Mommy Makeover",
    ],
  },
  {
    title: "SIN CIRUGÍA",
    image: `${process.env.BASE_PATH || ""}/imgs/sin-cirugia.webp`,
    description:
      "Procedimientos mínimamente invasivos diseñados para rejuvenecer y embellecer su apariencia sin necesidad de pasar por el quirófano.",
    surgeries: [
      "Rellenos faciales",
      "Aumento de labios",
      "Microdermoabrasión",
      "Dermapen",
      "Entre otros...",
    ],
  },
];

export default function Surgeries() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {SURGERIES.map((surgery) => (
          <div
            key={surgery.title}
            className="flex flex-col items-center justify-between gap-2 min-h-48 rounded-lg p-4 text-center "
          >
            <div className="text-primary w-full text-3xl font-light">
              {surgery.title}
            </div>
            <div className="w-full my-4 text-sm">{surgery.description}</div>

            <Image
              className="rounded-full aspect-square"
              src={surgery.image}
              alt={surgery.title}
              width={260}
              height={260}
            />

            <div className="mt-8 p-8 shadow-[5px_5px_0px_-1px_rgba(0,0,0,0.1)] border-2 border-gray-50 w-full">
              <div className="flex flex-col items-center justify-between gap-1">
                {surgery.surgeries.map((s) => (
                  <p className="w-full" key={s}>
                    {s}
                  </p>
                ))}
              </div>

              <a
                className="btn btn-secondary btn-md px-12 mt-8 rounded-none border-2 border-primary"
                href={surgery.link}
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                Solicitar Valoración
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
