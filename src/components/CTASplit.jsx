import Image from "next/image";
const HOSPITALS = [
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospital-sao-paulo.webp`,
    title: "Hospital São Paulo",
    address: "Av. Pablo Neruda 2335  Guadalajara",
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/clinica-ontario.webp`,
    title: "Clínica Quirürgica Ontario",
    address: "Calle Ontario 545 Guadalajara",
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospital-san-vicente.webp`,
    title: "Hospital San Vicente",
    address: "Aquiles Serdán 126 Santa Anita",
  },
];
export default function CTASplit() {
  return (
    <section className="section-container">
      <div className="container mx-auto py-6 mt-8">
        <div className="flex flex-wrap-reverse -m-8 border-4 border-gray-200">
          <div className="w-full md:w-1/3 p-8 flex flex-col justify-center items-start gap-6">
            <div className="flex flex-col gap-0 prose">
              <h6 className="text-2xl m-0 md:max-w-md text-center md:text-left text-primary font-light">
                TU CIRUGÍA SEGURA
                <br />Y CON EL MEJOR EQUIPO
              </h6>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-8">
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 items-center">
              {HOSPITALS.map((item) => (
                <div
                  className="p-2 px-8 text-center flex flex-col items-center justify-between w-full"
                  key={item.title}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                  />
                  <div>
                    <p className="text-md mt-8 whitespace-nowrap font-medium">
                      {item.title}
                    </p>
                    <p className="text-xs whitespace-nowrap">{item.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
