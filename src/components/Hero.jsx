import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex justify-end items-end h-full w-full bg-[left_-300px_top] md:bg-center relative bg-gray-300 md:bg-white"
      style={{
        backgroundImage: `url(${process.env.BASE_PATH || ""}/imgs/herobg.webp)`,
        overlay: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row items-center min-h-full py-10 w-full lg:w-1/2 bg-neutral-900/50 lg:bg-neutral-900/90">
        <div className="prose-lg flex flex-col justify-center items-center md:items-start gap-4 my-8 mb-16 px-0 lg:pl-8 lg:pr-12 px-4 w-full">
          <Image
            src={`${process.env.BASE_PATH || ""}/imgs/emblema.svg`}
            alt="logo"
            width={92}
            height={182}
          />
          <div className="flex flex-col gap-0">
            <h1 className="text-primary font-bold pb-6 m-0 text-center md:text-left text-4xl md:text-5xl">
              Dr. Francisco Camacho
            </h1>
            <h2 className="m-0 text-center md:text-left text-xl md:text-2xl text-white">
              Neurocirujano especialista en
              <br />
              padecimientos del cerebro y columna
            </h2>
            <p className="m-0 italic text-center md:text-left text-sm md:text-md text-white border-t-2 mt-2 pt-2">
              <b>CÉDULA</b> XXXX <b>ESP.</b> 12225523
            </p>
          </div>
          <p className="leading-tight text-center md:text-left text-white">
            Abordamos problemas complejos neurológicos y de columna con
            tratamientos de vanguardia, procedimientos de mínima invasión y un
            equipo especializado para ayudar a recuperar la calidad de vida.
          </p>
          <div class="join">
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
