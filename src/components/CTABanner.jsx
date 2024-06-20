export default function CTABanner({ content }) {
  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-start min-h-40 rounded-lg p-8 gap-8 md:gap-0 aspect-auto[380/79]">
        <article className="flex flex-col gap-4  w-full leading-tight pl-0 md:pl-16">
          {content}
        </article>
        <div className="flex flex-col w-full items-center md:items-end">
          <div class="join">
            <a
              role="button"
              className="btn btn-primary btn-lg px-12 join-item rounded-none"
              href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
            <a
              role="button"
              className="btn btn-secondary btn-lg px-12 join-item border-2 border-primary rounded-none"
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
