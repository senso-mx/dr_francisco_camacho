"use client";

const PROMOS = [
  {
    title: "Microdiscectomía Lumbar",
    price: "$95,000 MXN",
    description: "Incluye hospital, honorarios y materiales",
    walink: "https://api.whatsapp.com/send?phone=+523311960990&text=%C2%A1Hola%21%20quiero%20agendar%20una%20cita%20de%20valoraci%C3%B3n%20para%20la%20promoci%C3%B3n%20de%20Microdiscectom%C3%ADa%20Lumbar%20%281%20Nivel%29%20con%20el%20Dr.%20Francisco%20Camacho"
  },
  {
    title: "Vertebroplastia",
    price: "$85,000 MXN",
    description: "Incluye hospital, honorarios y materiales",
    walink: "https://api.whatsapp.com/send?phone=+523311960990&text=%C2%A1Hola%21%20quiero%20agendar%20una%20cita%20de%20valoraci%C3%B3n%20para%20la%20promoci%C3%B3n%20de%20Vertebroplastia%20%281%20Nivel%29%20con%20el%20Dr.%20Francisco%20Camacho"
  },
  {
    title: "Microdiscectomía Cervical",
    price: "$110,000 MXN",
    description: "Incluye hospital, honorarios y materiales",
    walink: "https://api.whatsapp.com/send?phone=+523311960990&text=%C2%A1Hola%21%20quiero%20agendar%20una%20cita%20de%20valoraci%C3%B3n%20para%20la%20promoci%C3%B3n%20de%20Microdiscectom%C3%ADa%20Cervical%20%281%20Nivel%29%20con%20el%20Dr.%20Francisco%20Camacho"
  },
];

export default function Promos() {
  return (
    <section
      class="container mx-auto bg-primary text-white overflow-hidden my-8 lg:my-16 "
      style={{
        backgroundImage: `url(${
          process.env.BASE_PATH || ""
        }/imgs/promos-bg.webp)`,
        overlay: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div class="mx-auto px-4 bg-gray-800/60 p-8 py-20">
        <div class="max-w-7xl mx-auto">
          <div class="mb-10 mx-auto text-center">
            <h2 class="mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-wide">
              Promociones de Septiembre
            </h2>
            <p class="text-xl text-gray-300">
              Todas las promociones{' '}
              <span className="font-semibold text-white tracking-wider bg-primary">incluyen hospital, honorarios y materiales</span>
              {' '}necesarios.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {PROMOS.map((promo) => (
              <div class="w-full md:w-1/3 p-4" key={promo.title}>
                <div class="p-8 text-center h-full bg-gray-100">
                  <p
                    class="font-heading text-xl text-gray-900 font-bold"
                    dangerouslySetInnerHTML={{ __html: promo.title }}
                  />
                  <p class="mb-2 text-lg text-gray-900">(1 Nivel)</p>
                  <p class="text-2xl mt-6 font-black">{promo.price}</p>
                  <p class="text-gray-500 text-xs italic">
                    * Aplican restricciones
                  </p>

                  <a
                    role="button"
                    className="btn btn-primary btn-sm px-8 join-item rounded-none mt-8"
                    href={promo.walink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Valoración
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
