import Image from "next/image";

const LOGOS = [
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospitals/country2000.webp`,
    title: "Country 2000",
    width: 85,
    height: 85,
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospitals/sanjavier.webp`,
    title: "San Javier",
    width: 70,
    height: 70,
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospitals/puertadehierro.webp`,
    title: "Puerta de Hierro",
    width: 140,
    height: 80,
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospitals/angeles.webp`,
    title: "Angeles",
    width: 85,
    height: 150,
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospitals/sanfrancisco.webp`,
    title: "San Francisco",
    width: 85,
    height: 85,
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospitals/sanjose.webp`,
    title: "San José",
    width: 85,
    height: 85,
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospitals/santamargarita.webp`,
    title: "Santa Margarita",
    width: 85,
    height: 85,
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospitals/santamaria.webp`,
    title: "Santa María",
    width: 85,
    height: 85,
  },
];

export default function Hospitals() {
  return (
    <section className="section-container text-center mt-12">
      <p className="font-bold text-2xl">
        Cirugías seguras y equipo especializado en los mejores Hospitales
      </p>
      <p className="text-primary text-md lg:text-lg">
        Atención de calidad, siempre cerca de ti.
      </p>
      <div className="flex flex-wrap md:flex-nowrap -m-2 justify-center items-center gap-8 mt-8">
        {LOGOS.map((item) => (
          <div className="w-28 md:w-full p-2 h-24 text-center" key={item.title}
            style={{
              background: `url(${item.image})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain'
            }}
          >
          </div>
        ))}
      </div>

      <div className="flex w-full items-center justify-center mt-12">
        <div className="join">
          <a
            role="button"
            className="btn btn-primary btn-lg px-12 join-item rounded-none"
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
          <a
            role="button"
            className="btn btn-secondary btn-lg px-12 join-item border-2 border-primary rounded-none"
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Llamada
          </a>
        </div>
      </div>
    </section>
  );
}
