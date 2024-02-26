import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex min-h-[90svh] h-full w-full"
      style={{
        backgroundImage: "url(/images/hero.png)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "transparent",
      }}
    >
      <div className="section-container flex flex-row items-center min-h-full">
        <div className="prose-lg flex flex-col justify-center items-center md:items-start w-full gap-4">
          <Image src="/images/emblema.svg" alt="logo" width={92} height={182} />
          <div className="flex flex-col gap-0">
            <h1 className="font-bold border-b-2 border-b-neutral-800 pb-6 m-0">
              Dr. Jaime Zermeño
            </h1>
            <h3 className="m-0 italic">
              Cirujano Plástico Certificado en Zapopan
            </h3>
          </div>
          <p className="leading-tight">
            +18 años recreando la belleza y reconstruyendo
            <br />
            la calidad de vida de mis pacientes.
          </p>
          <button className="btn btn-primary btn-lg">Cita por Whatsapp</button>
        </div>
        {/* <div className="flex justify-start items-center w-full h-full">B</div> */}
      </div>
    </section>
  );
}
