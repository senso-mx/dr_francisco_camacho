import Image from "next/image";

const SURGERIES = [
  {
    title: "Hernias de disco",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
  },
  {
    title: "Fracturas vertebrales",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
  },
  {
    title: "Tumores espinales",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
  },
  {
    title: "Hidrocefalia",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
  },
  {
    title: "Hematomas craneales",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
  },
  {
    title: "Tumores de hipófisis",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
  },
  {
    title: "Tumores cerebrales",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
  },
  {
    title: "Aneurismas cerebrales",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
  },
  {
    title: "Endoscopia cerebral",
    img: `${process.env.BASE_PATH || ""}/imgs/cara.webp`,
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
              width={60}
              height={60}
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
