const LOGOS = [
  {
    image: "images/hero.webp",
    title: "Exportable code 1",
  },
  {
    image: "images/hero.webp",
    title: "Exportable code 2",
  },
  {
    image: "images/hero.webp",
    title: "Exportable code 3",
  },
  {
    image: "images/hero.webp",
    title: "Exportable code 4",
  },
  {
    image: "images/hero.webp",
    title: "Exportable code 5",
  },
];

export default function About() {
  return (
    <section class="section-container">
      <div class="container mx-auto py-6">
        <div class="flex flex-wrap -m-8">
          <div class="w-full md:w-1/2 p-8">
            <img
              class="mx-auto md:ml-0 rounded-lg"
              src="images/about.png"
              alt="Doctor"
            />
          </div>
          <div class="w-full md:w-1/2 p-8">
            <div class="lg:max-w-xlg">
              <div className="flex flex-col gap-0 prose">
                <h4 className="text-3xl font-bold border-b-2 border-b-neutral-800 pb-1 m-0 md:max-w-md">
                  Dr. Jaime Zermeño
                </h4>
                <h6 className="m-0 leading-tight font-semibold">
                  Cirujano Plástico certificado, con Sub especialidad en
                  Microcirugía y Nervio Periférico
                </h6>
              </div>
              <p class="my-12">
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
              <div class="flex flex-wrap md:flex-nowrap -m-2 justify-center">
                {LOGOS.map((item) => (
                  <div class="w-1/2 md:w-full p-2" key={item.title}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.title} className="w-auto" />
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
