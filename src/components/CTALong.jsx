export default function CTALong() {
  return (
    <section className="section-container">
      <div className="container mx-auto py-6 pb-12">
        <div className="w-full flex flex-col justify-center items-center gap-6 text-center">
          <div className="flex flex-col gap-0 prose">
            <h6 className="text-2xl font-bold border-b-2 border-b-neutral-800 pb-4 m-0 italic">
              La belleza roba miradas, te ayúdo a robar más
            </h6>
            <p className="text-lg text-primary">
            Cirugía Plástica Estetica con resultados increíbles.
            </p>
          </div>
          <a
            className="btn btn-primary btn-lg"
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
