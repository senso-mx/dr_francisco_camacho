import Footer from "@/components/Footer";

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
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1771007688562!2d-103.36778192459903!3d20.703031798886148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae2ecffc6b61%3A0xb2246d19ede77705!2sAv.%20Cvln.%20Jorge%20%C3%81lvarez%20del%20Castillo%201504%2C%20Chapultepec%20Country%2C%2044620%20Guadalajara%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2ses!4v1719409125006!5m2!1ses-419!2ses"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full p-0 md:p-8 lg:pl-16 py-0 flex flex-col justify-center items-start gap-6 m-4 md:m-0">
          <h6 className="text-black font-semibold text-xl md:text-2xl w-full text-left mb-8">
            Te espero en tu cita para{" "}
            <br className="block md:hidden lg:block"/>
            atender tus preocupaciones
          </h6>
          <p className="w-full md:max-w-lg text-extralight text-neutral-600">
            <span className="font-semibold text-primary">
              Dirección del consultorio:
            </span>{" "}
            <br />
            <a
              href="https://maps.app.goo.gl/iMjhDf3ome8Ej8zd9"
              rel="noopener noreferrer"
            >
              Av. Jorge Álvarez del Castillo 1504,
              <br />
              Lomas del Country, 44610 Guadalajara, Jal.
            </a>
            <br />
            <br />
            <span className="font-semibold text-primary">Horario:</span>
            <br />
            Lunes a viernes de 9:00 am - 8:00 pm
            <br />
            Sábados de 10:00 am - 2:00 pm
            <br />
            <br />
            <span className="font-semibold text-primary">
              Contáctanos al:
            </span>{" "}
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              rel="noopener noreferrer"
            >
              {formatPhoneNumber(process.env.NEXT_PUBLIC_PHONE)}
            </a>
            <br />
            <span className="font-semibold text-primary">
              Llamadas para emergencias:
            </span>{" "}
            <br />
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE_EMERGENCY}`}
              rel="noopener noreferrer"
            >
              {formatPhoneNumber(process.env.NEXT_PUBLIC_PHONE_EMERGENCY)}
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
