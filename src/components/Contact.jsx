export default function Contact() {
  const formatPhoneNumber = (phone) => {
    // Strip the country code (+52) and any other non-digit character
    const strippedNumber = phone.replace(/[^\d]/g, "").slice(2);

    // Extract parts of the number
    const areaCode = strippedNumber.substring(0, 2);
    const firstPart = strippedNumber.substring(2, 6);
    const secondPart = strippedNumber.substring(6);

    // Format and return the phone number
    return `(${areaCode}) ${firstPart} ${secondPart}`;
  };

  return (
    <section className="flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8 pb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14928.778139220956!2d-103.4465328!3d20.7023236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af94ed94441d%3A0xb037d76359530c63!2sRenova%20Care!5e0!3m2!1ses-419!2smx!4v1709579576436!5m2!1ses-419!2smx"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-start gap-6 m-4 md:m-0">
        <div className="flex flex-col gap-0 prose">
          <h6 className="text-2xl font-bold m-0 md:max-w-md">
            Visítanos para tu cita de valoración
          </h6>
        </div>
        <p className="w-full md:max-w-lg">
          <b>Dirección del consultorio:</b> Av. Naciones Unidas 7972 Int 8
          <br />
          Col. Lomas del Valle, 45019 Zapopan, Jal.
          <br />
          <br />
          <b>Horario:</b>
          <br />
          Lunes a Viernes: 10:00 - 14:00 y 18:00 - 20:00
          <br />
          <br />
          <b>Envía mensaje a:</b>{" "}
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
            rel="noopener noreferrer"
            className="text-secondary"
          >
            {formatPhoneNumber(process.env.NEXT_PUBLIC_WAPHONE)}
          </a>
          <br />
          <br />
          <b>Llamadas:</b>{" "}
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            rel="noopener noreferrer"
            className="text-secondary"
          >
            {formatPhoneNumber(process.env.NEXT_PUBLIC_PHONE)}
          </a>
        </p>
      </div>
    </section>
  );
}
