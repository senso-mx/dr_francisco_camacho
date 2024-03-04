import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex min-h-[90svh] h-full w-full"
      style={{
        backgroundImage: `url(${process.env.BASE_PATH || ''}/images/herobg.webp)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "transparent",
      }}
    >
      <div className="section-container flex flex-row flex-wrap md:flex-nowrap items-center min-h-full">
        <div className="prose-lg flex flex-col justify-center items-center md:items-start w-full gap-4 h-fit my-8 md:h-full">
          <Image src={`${process.env.BASE_PATH || ''}/images/logo.webp`} alt="logo" width={140} height={140} />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold border-b-2 border-b-white pb-6 m-0 text-white">
              Dr. Jaime Zermeño
            </h1>
            <h3 className="m-0 italic text-white">
              Cirujano Plástico Certificado en Zapopan
            </h3>
          </div>
          <p className="leading-tight text-white">
            Reconstruimos la calidad de vida con Microcirugía
            <br /> y atención a nervio periférico.
          </p>
          <button className="btn btn-primary btn-lg">Cita por Whatsapp</button>
        </div>
        <div className="flex justify-start items-center w-full h-fit my-8 md:h-full">
          <Image
            className="mx-auto md:ml-0 rounded-lg aspect-auto[190/221]"
            src={`${process.env.BASE_PATH || ''}/images/hero.webp`}
            alt="Doctor"
            width={516}
            height={600}
          />
        </div>
      </div>
      <div
        className="whats"
        component="a"
        href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
        target="_blank"
      >
        <Image src={`${process.env.BASE_PATH || ''}/images/walogo.svg`} className="waicon" width={25} height={25} alt="WhatsApp Icon" />
      </div>
    </section>
  );
}
