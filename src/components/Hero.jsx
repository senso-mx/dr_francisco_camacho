import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex justify-end items-end h-full w-full relative">
      <div className="section-container flex flex-col md:flex-row items-center min-h-full py-10 w-full gap-8 md:gap-0">
        <div className="prose-lg flex flex-col justify-center items-center md:items-start gap-2 w-full">
          <div className="flex flex-row justify-center items-center md:justify-start gap-8">
            <Image
              className="m-0"
              src={`${process.env.BASE_PATH || ""}/imgs/logo.svg`}
              alt="logo"
              width={80}
              height={182}
            />

            <h1 className="text-primary font-bold pb-6 m-0 text-left text-3xl md:text-5xl w-100">
              Dr. Francisco Camacho
            </h1>
          </div>
          <div className="flex flex-col gap-0">
            <h2 className="m-0 text-center md:text-left text-xl md:text-2xl mt-4">
              Neurocirujano especialista en cerebro y columna
            </h2>
            <p className="m-0 italic text-center md:text-left text-sm md:text-md border-t-2 mt-2 pt-2">
              <b>CÉDULA</b> 7712889 11720504
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 mt-6">
            <div className="flex flex-row justify-start items-center gap-8">
              <div style={{ width: "35px" }}>
                <Image
                  className="m-0"
                  src={`${process.env.BASE_PATH || ""}/imgs/hernias.svg`}
                  alt="Fracturas vertebrales"
                  width={25}
                  height={30}
                />
              </div>

              <p className="grow font-semibold m-0 text-center md:text-left">
                Hernias de disco
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-8">
              <Image
                className="m-0"
                src={`${
                  process.env.BASE_PATH || ""
                }/imgs/tumorescerebrales.svg`}
                alt="Tumores cerebrales"
                width={35}
                height={40}
              />

              <p className="grow font-semibold m-0 text-center md:text-left">
                Tumores cerebrales
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-8">
              <div style={{ width: "35px" }}>
                <Image
                  className="m-0"
                  src={`${process.env.BASE_PATH || ""}/imgs/fracturas.svg`}
                  alt="Fracturas vertebrales"
                  width={25}
                  height={30}
                />
              </div>

              <p className="font-semibold m-0 text-center md:text-left">
                Fracturas vertebrales
              </p>
            </div>
          </div>
          <p className="leading-tight text-center md:text-left text-sm md:text-regular">
            Tratamiento a problemas complejos neurológicos y de columna con
            procedimientos de mínima invasión.
          </p>
          <div className="join">
            <a
              role="button"
              className="btn btn-primary btn-lg join-item rounded-none px-12"
              href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
              target="_blank"
            >
              Whatsapp
            </a>
            <a
              role="button"
              className="btn btn-secondary btn-lg join-item border-2 border-primary rounded-none px-12"
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              target="_blank"
            >
              Llamada
            </a>
          </div>
        </div>
        <div className="w-full">
          <Image
            className="rounded-lg mx-auto"
            src={`${process.env.BASE_PATH || ""}/imgs/herobg.webp`}
            alt="Dr. Francisco Camacho"
            width={500}
            height={400}
          />
        </div>
      </div>
      <a
        className="whats"
        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
        target="_blank"
      >
        <Image
          src={`${process.env.BASE_PATH || ""}/imgs/walogo.svg`}
          className="waicon"
          width={30}
          height={30}
          alt="WhatsApp Icon"
        />
      </a>
    </section>
  );
}
