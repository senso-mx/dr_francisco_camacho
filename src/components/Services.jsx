"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGE_PREFIX = process.env.BASE_PATH || "/neurocirujano-en-guadalajara";

const SURGERIES = [
  {
    title: "Hernias de disco",
    img: `${IMAGE_PREFIX}/imgs/hernias.svg`,
    content:
      "Padecimiento en que un fragmento del disco intervertebral comprime la medula espinal o raíces nerviosas provocando dolor, entumecimiento, hormigueo, perdida de fuerza, el tratamiento de mínima invasión consiste en retirar el fragmento de disco y descomprimir la medula espinal y raíces nerviosas.",
  },
  {
    title: "Fracturas vertebrales",
    img: `${IMAGE_PREFIX}/imgs/fracturas.svg`,
    content:
      "Padecimiento en el que se acumula liquido dentro del cerebro provocando dolor de cabeza, nausea, vomito, crisis convulsivas, el tratamiento consiste en liberar la presión de liquido",
  },
  {
    title: "Tumores espinales",
    img: `${IMAGE_PREFIX}/imgs/tumores.svg`,
    content:
      "Padecimiento en el que crece de manera descontrolada un conjunto de células dando origen a un tumor, produce dolor de cabeza, náuseas, vómito, alteración mental,",
  },
  {
    title: "Hidrocefalia",
    img: `${IMAGE_PREFIX}/imgs/hidrocefalia.svg`,
    content:
      "Padecimiento originado por accidentes o caídas en el que alguna estructura de la vértebra se rompe ocasionando dolor severo, deformidad en la columna, pérdida de fuerza en las extremidades el tratamiento puede ser manejo medico o quirúrgico",
  },
  {
    title: "Hematomas craneales",
    img: `${IMAGE_PREFIX}/imgs/hematomas.svg`,
    content:
      "Grupo de padecimientos originados por golpes, caídas o accidentes en el que se acumula sangre dentro del cráneo comprimiendo el cerebro pudiendo ser mortal sin tratamiento el cual consiste en drenar el sangrado y aliviar la presión sobre el cerebro",
  },
  {
    title: "Tumores de hipófisis",
    img: `${IMAGE_PREFIX}/imgs/hipofisis.svg`,
    content:
      "Padecimiento en el que una arteria sufre una dilatación la cual tiene una pared delgada y frágil ocasiona dolor de cabeza o caída de un parpado, en caso de ruptura puede sangrar ocasionando dolor de cabeza muy intenso, convulsiones y alteración del estado mental, su tratamiento es con microcirugía.",
  },
  {
    title: "Tumores cerebrales",
    img: `${IMAGE_PREFIX}/imgs/tumorescerebrales.svg`,
    content:
      "Padecimiento en el cual crecen células anormales de manera descontrolada comprimiendo los nervios y la médula espinal provocando disminución de fuerza, entumecimiento y hormigueo, el tratamiento es con microcirugía.",
  },
  {
    title: "Aneurismas cerebrales",
    img: `${IMAGE_PREFIX}/imgs/aneurismas.svg`,
    content:
      "Son tumores que pueden provocar alteraciones hormonales y pérdida de la visión, su tratamiento es a través de cirugia endoscopia vía nasal",
  },
  {
    title: "Endoscopia cerebral",
    img: `${IMAGE_PREFIX}/imgs/endoscopia.svg`,
    content:
      "Técnica quirúrgica de mínima invasión que se utiliza para tratar la hidrocefalia, tomar biopsias, extirpar cisticercos, drenar hemorragias, entre otros.",
  },
];

export default function Surgeries() {
  const [selectedSurgery, setSelectedSurgery] = useState(null);

  const toggleSurgery = (surgery) => {
    setSelectedSurgery(
      !!selectedSurgery
        ? selectedSurgery !== surgery
          ? surgery
          : null
        : surgery
    );
  };

  return (
    <section className="section-container z-10">
      {!!selectedSurgery?.title ? (
        <div className="flex flex-row w-full gap-8 card-showcase">
          <div className="w-full p-0 h-full">
            <div
              className="w-full p-8 flex flew-row justify-center items-center bg-slate-200 rounded-xl h-full"
              width="100%"
              style={{
                boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.2)",
                cursor: "default",
              }}
            >
              <div className="flex flex-col text-center justify-start items-center w-full gap-1">
                <Image
                  width={35}
                  height={35}
                  src={selectedSurgery.img}
                  alt={selectedSurgery.title}
                />
                <p
                  className="text-center my-2 font-bold text-lg"
                  dangerouslySetInnerHTML={{ __html: selectedSurgery.title }}
                />
                <p
                  className="text-center my-2 mx-0 md:mx-20"
                  dangerouslySetInnerHTML={{ __html: selectedSurgery.content }}
                />
                <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 mt-4">
                  <button
                    className="text-sm"
                    onClick={() => {
                      setSelectedSurgery("");
                    }}
                  >
                    {"< "}Volver
                  </button>
                  <a
                    className="btn btn-primary btn-lg rounded-none"
                    href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    Agendar cita
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col overflow-scroll hidden md:flex w-96 h-full">
            {SURGERIES.map((surgery) => {
              if (surgery.title === selectedSurgery?.title) return null;
              return ServiceCard(toggleSurgery, surgery);
            })}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SURGERIES.map((surgery) => {
            return ServiceCard(toggleSurgery, surgery);
          })}
        </div>
      )}
    </section>
  );
}

function ServiceCard(toggleSurgery, surgery) {
  return (
    <div
      onClick={() => toggleSurgery(surgery)}
      key={surgery.title}
      className="flex flex-row items-center justify-center md:justify-start gap-4 p-4 text-center cursor-pointer"
    >
      <Image
        className=""
        src={surgery.img}
        alt={surgery.title}
        width={35}
        height={35}
      />

      <div className="text-md font-semibold">{surgery.title}</div>
    </div>
  );
}
