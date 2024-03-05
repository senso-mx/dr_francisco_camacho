import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex min-h-[90svh] h-full w-full"
      style={{
        backgroundImage: `url(${
          process.env.BASE_PATH || ""
        }/images/herobg.webp)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "transparent",
      }}
    >
      <div className="section-container flex flex-row flex-wrap md:flex-nowrap items-center min-h-full">
        <div className="prose-lg flex flex-col justify-center items-center md:items-start w-full gap-4 h-fit my-8 md:h-full">
          <Image
            src={`${process.env.BASE_PATH || ""}/images/logo.webp`}
            alt="logo"
            width={140}
            height={140}
          />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold border-b-2 border-b-white pb-6 m-0 text-white text-center md:text-left text-4xl md:text-5xl">
              Dr. Jaime Zermeño
            </h1>
            <h3 className="m-0 italic text-white text-center md:text-left text-lg md:text-xl">
              Cirujano Plástico Reconstructivo en Zapopan
            </h3>
            <p className="m-0 italic text-center md:text-left text-sm md:text-md text-neutral-content">
              <b>DGP.</b> 2574745 <b>ESP.</b> 4896968 <b>CERT.</b> 1356
            </p>
          </div>
          <p className="leading-tight text-white text-center md:text-left">
            Reconstruimos la calidad de vida con Microcirugía
            <br className="hidden md:block" /> y atención a nervio periférico.
          </p>
          <button className="btn btn-primary btn-lg">Cita por Whatsapp</button>
        </div>
        <div className="flex justify-start items-center w-full h-fit my-8 md:h-full">
          <Image
            className="mx-auto md:ml-0 rounded-lg aspect-auto[190/221]"
            src={`${process.env.BASE_PATH || ""}/images/hero.webp`}
            alt="Doctor"
            width={516}
            height={600}
          />
        </div>
      </div>
      <a
        className="whats"
        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
        target="_blank"
      >
        <Image
          src={`${process.env.BASE_PATH || ""}/images/walogo.svg`}
          className="waicon"
          width={30}
          height={30}
          alt="WhatsApp Icon"
        />
      </a>
    </section>
  );
}
