export default function CTABanner({ content, bgImage }) {
  return (
    <section
      className="section-container my-8 lg:my-16 px-4 lg:px-0 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        overlay: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start min-h-96 lg:min-h-52 gap-8 md:gap-0 pl-0 lg:pl-16 pr-0 lg:pr-16">
        <article className="flex flex-col gap-4 w-full leading-tight ">
          {content}
        </article>
        <div className="flex flex-col w-full items-center md:items-end">
          <div class="join">
            <a
              role="button"
              className="btn btn-primary btn-md lg:btn-lg px-12 join-item rounded-none"
              href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
            <a
              role="button"
              className="btn btn-secondary btn-md lg:btn-lg px-12 join-item border-2 border-primary rounded-none"
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Llamada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
