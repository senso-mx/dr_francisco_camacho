import Image from "next/image";

export default function About() {
  return (
    <section className="section-container">
      <div className="container mx-auto lg:py-6">
        <div className="flex flex-wrap -m-8 flex-col-reverse md:flex-row">
          <div className="w-full lg:w-1/2 p-8">
            <div className="lg:max-w-xlg">
              <div className="flex flex-col gap-0 prose border-primary border-l-8">
                <p className="text-3xl text-primary font-bold pb-1 m-0 md:max-w-md text-center md:text-left ml-8 py-4">
                  Dr. Luis Francisco
                  <br />
                  Camacho Herrera
                </p>
              </div>
              <div className="my-12 flex flex-col gap-8 text-center md:text-left text-lg">
                <p>
                  <strong>
                    Neurocirujano en Guadalajara con una sólida formación
                    académica y{" "}
                    <span className="text-primary">
                      amplia experiencia en técnicas de vanguardia en cirugía de
                      columna y cráneo.
                    </span>{" "}
                    Egresado de la Universidad de Guadalajara y especializado en
                    Neurocirugía con un enfoque en{" "}
                    <span className="text-primary">
                      cirugía de mínima invasión.
                    </span>
                  </strong>{" "}
                  <br />
                  <br />
                  Con un compromiso con la excelencia y la innovación en
                  neurocirugía, participo activamente como miembro de la
                  <span className="text-primary">
                    {" "}
                    Sociedad Mexicana de Cirugía Neurológica
                  </span>
                  , ha servido como vicepresidente y presidente de la
                  <span className="text-primary">
                    Sociedad de Neurocirujanos Universitarios
                  </span>
                  , médico adscrito en el antiguo hospital civil de Guadalajara
                  además de pertenecer a la Clínica de columna, trauma de cráneo
                  y tumores cerebrales.
                  <br />
                  <br />
                  Mi prioridad es proporcionar tratamientos seguros y efectivos,
                  utilizando las técnicas más avanzadas en neurocirugía para
                  mejorar la calidad de vida de los pacientes y lograr
                  solucionar los padecimientos más complejos de columna y
                  cráneo.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <Image
              className="mx-auto"
              src={`${process.env.BASE_PATH || ""}/imgs/about.webp`}
              alt="Dr. Francisco Camacho"
              width={592}
              height={653}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
