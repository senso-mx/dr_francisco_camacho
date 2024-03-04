export default function CTALong() {
  return (
    <section className="section-container">
      <div
        className="container mx-auto py-6 pb-12 rounded-lg aspect-auto[380/79] h-80"
        style={{
          backgroundImage: "url(/images/herobg.webp)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "transparent",
        }}
      >
        <div className="w-full flex flex-col justify-center items-center gap-6 text-center h-full">
          <div className="flex flex-col gap-0 prose">
            <h6 className="text-2xl font-bold border-b border-b-white pb-4 m-0 italic text-white mx-4">
              No dejes pasar más tiempo, recuperemos el control
            </h6>
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
