import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <section
        className="flex h-full w-full bg-[right_-360px_top] md:bg-center relative bg-blend-multiply bg-gray-300 md:bg-white"
        style={{
          backgroundImage: `url(${
            process.env.BASE_PATH || ""
          }/imgs/herobg.webp)`,
          overlay: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="section-container flex flex-row items-center min-h-full py-10">
          <div className="prose-lg flex flex-col justify-center items-center md:items-start w-full gap-4 my-8 mb-16">
            <Image
              src={`${process.env.BASE_PATH || ""}/imgs/emblema.svg`}
              alt="logo"
              width={92}
              height={182}
            />
            <div className="flex flex-col gap-0">
              <h1 className="text-primary font-normal md:font-light border-b-2 border-b-neutral-800 pb-6 m-0 text-center md:text-left text-4xl md:text-5xl">
                DRA. CITLALLI ZEPEDA
              </h1>
              <h2 className="m-0 text-center md:text-left text-lg md:text-xl">
                Cirugía y medicina estética
              </h2>
              {/* <p className="m-0 italic text-center md:text-left text-sm md:text-md">
                <b>DGP.</b> 2574745 <b>ESP.</b> 4896968 <b>CERT.</b> 1356
              </p> */}
            </div>
            <p className="leading-tight text-center md:text-left">
              Elevemos tu confianza, autoestima y belleza.
              <br className="hidden md:block" />
              <span className="text-primary">
                Conmigo, tu bienestar y seguridad es prioridad.
              </span>
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
          {/* <div className="flex justify-start items-center w-full h-full">B</div> */}
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

      <div className="w-full text-center">
        <h3 className="mb-8 text-xl bg-gray-50 text-neutral py-4 font-light">
          Conoce nuestros procedimientos...
        </h3>
      </div>
    </div>
  );
}
