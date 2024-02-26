export default function CTABanner() {
  return (
    <section className="section-container">
      <div
        className="flex flex-col md:flex-row items-center justify-start min-h-80 rounded-lg p-8 gap-8 md:gap-0"
        style={{
          background: `url(/images/ctabanner.png)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "cover",
          backgroundColor: "transparent",
        }}
      >
        <article className="flex flex-col gap-4  w-full leading-tight pl-0 md:pl-16">
          <h4 className="font-bold text-3xl max-w-96 text-white">
            ¿Hacemos un cambio radical de imagen?
          </h4>
          <h6 className="max-w-lg text-lg leading-tight text-white">
            Recreemos tu belleza con un Mommy Makeover, LipoAbdominoplastía o
            algo especial sólo para tí.
          </h6>
        </article>
        <div className="flex flex-col w-full items-center md:items-end">
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
