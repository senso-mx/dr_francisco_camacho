import Image from "next/image";

export default function CTASplit() {
  return (
    <section className="section-container">
      <div className="container mx-auto py-6">
        <div className="flex flex-wrap-reverse -m-8">
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-start gap-6">
            <div className="flex flex-col gap-0 prose">
              <h6 className="text-2xl font-bold border-b-2 border-b-neutral-800 pb-4 m-0 md:max-w-md text-center md:text-left">
                ¡El verano está cerca! <br />
                Sorprende a todos con tu belleza.
              </h6>
            </div>
            <a
              className="btn btn-primary btn-lg mx-auto md:mx-0"
              href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              Cita por WhatsApp
            </a>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <Image
              className="mx-auto md:ml-0 rounded-lg"
              src="images/about.png"
              alt="Doctor"
              width={332}
              height={760}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
