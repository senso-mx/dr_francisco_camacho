import Image from "next/image";

const METHODS = [
  {
    title: "Pago en efectivo",
    image: `${process.env.BASE_PATH || ""}/imgs/efectivo.svg`,
    description:
      "Realiza directamente en nuestras ya sea en consulta o clínica.",
  },
  {
    title: "Tarjetas de débito | crédito",
    image: `${process.env.BASE_PATH || ""}/imgs/tarjetas.svg`,
    description:
      "Tarjetas tanto nacionales como internacionales. (Tarjetas extranjeras sujetas a una comisión)",
  },
  {
    title: "Usa tu SGMM",
    image: `${process.env.BASE_PATH || ""}/imgs/sgmm.svg`,
    description:
      "Trabajamos con todas las Aseguradoras, Realiza tu cirugía de forma segura y sin preocupaciones.",
  },
];

export default function PaymentMethods() {
  return (
    <section className="section-container bg-neutral-900 p-16 mb-12">
      <p className="text-2xl text-white text-center mb-12 font-bold">Opciones de pago disponibles</p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {METHODS.map((surgery) => (
          <div
            key={surgery.title}
            className="flex flex-col items-center justify-between gap-2 min-h-48 p-4 text-center "
          >
            <Image
              className="aspect-square"
              src={surgery.image}
              alt={surgery.title}
              width={80}
              height={80}
            />
            <div className="text-primary w-full text-lg font-semibold">
              {surgery.title}
            </div>
            <div className="w-full my-4 text-sm text-white" dangerouslySetInnerHTML={{__html: surgery.description}} />
          </div>
        ))}
      </div>
    </section>
  );
}
