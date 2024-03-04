import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex min-h-[90svh] h-full w-full bg-center md:bg-center"
      style={{
        backgroundImage: `url(${process.env.BASE_PATH || ""}/images/hero.webp)`,
        overlay: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="section-container flex flex-row items-center min-h-full">
        <div className="prose-lg flex flex-col justify-center items-center md:items-start w-full gap-4 my-8 mb-16">
          <Image
            src={`${process.env.BASE_PATH || ""}/images/emblema.svg`}
            alt="logo"
            width={92}
            height={182}
          />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold border-b-2 border-b-neutral-800 pb-6 m-0 text-center md:text-left text-4xl md:text-5xl">
              Dr. Jaime Zermeño
            </h1>
            <h3 className="m-0 italic text-center md:text-left text-lg md:text-xl">
              Cirujano Plástico Certificado en Zapopan
            </h3>
            <p className="m-0 italic text-center md:text-left text-sm md:text-md">
              <b>DGP.</b> 2574745 <b>ESP.</b> 4896968 <b>CERT.</b> 1356
            </p>
          </div>
          <p className="leading-tight text-center md:text-left">
            +18 años recreando la belleza y reconstruyendo
            <br className="hidden md:block" />
            la calidad de vida de mis pacientes.
          </p>
          <button className="btn btn-primary btn-lg">Cita por Whatsapp</button>
        </div>
        {/* <div className="flex justify-start items-center w-full h-full">B</div> */}
      </div>
      <a
        className="whats"
        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
        target="_blank"
      >
        <Image
          src={`${process.env.BASE_PATH || ""}/images/walogo.svg`}
          className="waicon"
          width={25}
          height={25}
          alt="WhatsApp Icon"
        />
      </a>
    </section>
  );
}
