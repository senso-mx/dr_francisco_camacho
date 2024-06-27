import Image from "next/image";

const SURGERIES = [
  {
    title: "Hernias de disco",
    img: `${process.env.BASE_PATH || ""}/imgs/hernias.svg`,
  },
  {
    title: "Fracturas vertebrales",
    img: `${process.env.BASE_PATH || ""}/imgs/fracturas.svg`,
  },
  {
    title: "Tumores espinales",
    img: `${process.env.BASE_PATH || ""}/imgs/tumores.svg`,
  },
  {
    title: "Hidrocefalia",
    img: `${process.env.BASE_PATH || ""}/imgs/hidrocefalia.svg`,
  },
  {
    title: "Hematomas craneales",
    img: `${process.env.BASE_PATH || ""}/imgs/hematomas.svg`,
  },
  {
    title: "Tumores de hipófisis",
    img: `${process.env.BASE_PATH || ""}/imgs/hipofisis.svg`,
  },
  {
    title: "Tumores cerebrales",
    img: `${process.env.BASE_PATH || ""}/imgs/tumorescerebrales.svg`,
  },
  {
    title: "Aneurismas cerebrales",
    img: `${process.env.BASE_PATH || ""}/imgs/aneurismas.svg`,
  },
  {
    title: "Endoscopia cerebral",
    img: `${process.env.BASE_PATH || ""}/imgs/endoscopia.svg`,
  },
];

export default function Surgeries() {
  return (
    <section className="section-container -mt-16 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SURGERIES.map((surgery) => (
          <div
            key={surgery.title}
            className="flex flex-row items-center justify-start gap-4 p-4 text-center border-l-16 border-primary bg-neutral-900"
            style={{ borderLeftWidth: '16px'}}
          >
            <Image
              className=""
              src={surgery.img}
              alt={surgery.title}
              width={35}
              height={35}
            />

            <div className="text-white text-md font-semibold">
              {surgery.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
