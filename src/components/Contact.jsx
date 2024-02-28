export default function Contact() {
  return (
    <section className="flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8 pb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.033338968939!2d-103.41318009999999!3d20.668222600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae845955b4a9%3A0xba380e3bffae403c!2sSta.%20Teresa%20de%20Jes%C3%BAs%20527%2C%20Camino%20Real%2C%2045040%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1698690044121!5m2!1ses-419!2smx"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-start gap-6">
        <div className="flex flex-col gap-0 prose">
          <h6 className="text-2xl font-bold m-0 md:max-w-md">
            Visítanos para tu cita de valoración
          </h6>
        </div>
        <p className="w-full md:max-w-lg">
          <b>Dirección del consultorio:</b> Av. Naciones Unidas 7972, Fracc.
          Villa Verona, 45019 Zapopan, Jal.
          <br />
          <br />
          <b>Horario:</b>
          <br />
          Lunes a Viernes: 9:00 - 18:00
          <br />
          Sábado: 9:00 - 14:00
          <br />
          <br />
          <b>Envía mensaje a:</b>{" "}
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
            rel="noopener noreferrer"
            className="text-secondary"
          >
            33 1313 2535
          </a>
        </p>
      </div>
    </section>
  );
}
