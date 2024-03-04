import Image from "next/image";

const LOGOS = [
  {
    image: `${process.env.BASE_PATH || ''}/images/logos/uach.webp`,
    title: "UACH",
  },
  {
    image: `${process.env.BASE_PATH || ''}/"images/logos/udg.webp`,
    title: "UDG",
  },
  {
    image: `${process.env.BASE_PATH || ''}/"images/logos/assh.webp`,
    title: "ASSH",
  },
  {
    image: `${process.env.BASE_PATH || ''}/"images/logos/aspn.webp`,
    title: "ASPN",
  },
  {
    image: `${process.env.BASE_PATH || ''}/"images/logos/cmcp.webp`,
    title: "CMCP",
  },
];

export default function About() {
  return (
    <section className="section-container">
      <div className="container mx-auto py-6">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <Image
              className="mx-auto md:ml-0 rounded-lg aspect-auto[760/871]"
              src={`${process.env.BASE_PATH || ''}/images/about.webp`}
              alt="Doctor"
              width={608}
              height={697}
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="lg:max-w-xlg">
              <div className="flex flex-col gap-0 prose">
                <h4 className="text-3xl font-bold border-b-2 border-b-neutral-800 pb-1 m-0 md:max-w-md">
                  Dr. Jaime Zermeño
                </h4>
                <h6 className="m-0 leading-tight font-semibold">
                  Cirujano Plástico certificado, con Sub especialidad en<br/>
                  Microcirugía y Nervio Periférico
                </h6>
              </div>
              <p className="my-12">
                Médico Cirujano Plástico Certificado en Zapopan egresado de la
                Universidad Autónoma de Chihuahua, con especialidad en{" "}
                <strong>
                  Cirugía General y sub-especialidad en Cirugía Plástica,
                  Estética y Reconstructiva
                </strong>
                , busco ofrecer atención médica de primera calidad ante
                problemas estéticos y de autoestima, mejorando la silueta y
                armonía facial.
                <br />
                <br />
                Además de contar con Alta especialidad en{" "}
                <strong>
                  Cirugía de Nervio Periférico y Plexo Braquial
                </strong>{" "}
                en la Universidad Autónoma de Coahuila que me permite brindar
                tratamientos de vanguardia para tratar lesiones nerviosas
                relacionadas con los nervios periféricos y del plexo braquial,
                como lesiones traumáticas o compresiones nerviosas crónicas y
                cirugía de mano.
              </p>
              <div className="flex flex-wrap md:flex-nowrap -m-2 justify-center gap-4">
                {LOGOS.map((item) => (
                  <div className="w-28 md:w-full p-2 " key={item.title} >
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-auto aspect-square"
                      width={101}
                      height={101}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
