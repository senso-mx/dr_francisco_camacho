export default function CTABanner() {
  return (
    <section className="section-container">
      <div
        className="flex flex-col md:flex-row items-center justify-start min-h-80 rounded-lg p-8 gap-8 md:gap-0 aspect-auto[380/79]"
        style={{
          background: `url(/images/ctabanner.webp)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "cover",
          backgroundColor: "transparent",
          position: "relative"
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full gradiente-h rounded-lg"></div>
        <article className="flex flex-col gap-4  w-full leading-tight pl-0 md:pl-16 z-10">
          <h4 className="font-bold text-3xl text-white">
            Atención especializada a tiempo, significa movilidad
          </h4>
        </article>
        <div className="flex flex-col w-full items-center md:items-end z-10">
          <a
            className="btn btn-primary btn-wide md:btn-lg"
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            Cita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
