import Image from "next/image";

const LOGOS = [
  {
    image: `${process.env.BASE_PATH || ""}/imgs/udg.webp`,
    title: "UDG",
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/colegio-estetico.webp`,
    title: "Colegio de cirugía estética",
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/iesm.webp`,
    title: "IESM",
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/colegio-maestria.webp`,
    title: "Colegio de cirugía con maestría",
  },
  {
    image: `${process.env.BASE_PATH || ""}/imgs/hospital-guarulhos.webp`,
    title: "Hospital Guarulhos",
  },
];

export default function About() {
  return (
    <section className="section-container">
      <div className="container mx-auto py-6">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <Image
              className="mx-auto shadow-[5px_5px_0px_-1px_rgba(0,0,0,0.1)] border-2 border-gray-200"
              src={`${process.env.BASE_PATH || ""}/imgs/about.webp`}
              alt="Doctora Citlalli Zepeda"
              width={455}
              height={730}
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="lg:max-w-xlg">
              <div className="flex flex-col gap-0 prose">
                <p className="m-0 leading-tight font-extralight text-xl text-center md:text-left">
                  Conóceme...
                </p>
                <h5 className="text-2xl text-primary text-light pb-1 m-0 md:max-w-md text-center md:text-left">
                  DRA. CITLALLI ZEPEDA
                </h5>
              </div>
              <div className="my-12 flex flex-col gap-8 text-center md:text-left">
                <p>
                  Cirujano general y estético egresada de la{" "}
                  <span className="text-primary">
                    Universidad de Guadalajara
                  </span>{" "}
                  y del{" "}
                  <span className="text-primary">
                    Universidad de Estudios Superiores en Medicina
                  </span>
                  , miembro del Colegio de cirujanos estéticos de Guadalajara
                  con +8 años de experiencia a nivel internacional y certificada
                  ante el Consejo de Cirujanos Estéticos de México.
                  <br />
                  <br />
                  Mi prioridad es brindar a mis pacientes procedimientos
                  seguros, efectivos y que cumplan con sus objetivos estéticos
                  para realzar su belleza natural y elevar su confianza y
                  percepción de sí mismos, anteponiendo su bienestar y
                  salvaguardar su seguridad desde la primera consulta hasta su
                  recuperación.
                </p>
                <p className="text-md uppercase text-primary">
                  Instituto de Estudios Superiores en Medicina
                  <br />
                  <span className="font-medium">
                    Maestría en Cirugía Estética
                  </span>
                </p>
                <p className="text-md uppercase text-primary">
                  Colegio de cirujanos estéticos de Guadalajara S.A.
                  <br />
                  <span className="font-medium">
                    Miembro activo del comité de Honor y Justicia
                  </span>
                </p>
                <p className="text-md uppercase text-primary">
                  Hospital Gral. de Guarulhos, São Paulo. Brasil
                  <br />
                  <span className="font-medium">Cirujano general</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap -m-2 justify-center  items-center gap-4">
              {LOGOS.map((item) => (
                <div className="w-28 md:w-full p-2" key={item.title}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-auto"
                    width={85}
                    height={85}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
