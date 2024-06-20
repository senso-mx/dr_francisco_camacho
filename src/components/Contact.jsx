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
    <section className="pt-12">
      <h6 className="text-primary font-normal md:font-extralight text-xl md:text-3xl w-full text-center mb-8">
        UBICANOS, SIEMPRE CERCA, ¡TE ESPERAMOS!
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
        {/* <div className="flex flex-col  w-full">
          <div className="w-full p-4 flex flex-col justify-center items-start gap-6 m-4 md:m-0">
            <p className="w-full md:max-w-lg text-extralight text-neutral-600">
              <span className="font-medium">
                Dirección Guadalajara, Jalisco:
              </span>{" "}
              <br />
              <a
                href="https://maps.app.goo.gl/V7ixv9rQ5MVrn3Kv9"
                rel="noopener noreferrer"
              >
                Por revelar...
              </a>
              <br />
              <br />
              <span className="font-medium">Horario:</span>
              <br />
              Lunes a viernes de 11 am a 7 pm | Sábado de 10 am a 2pm
              <br />
              <br />
              <span className="font-medium">Mensajes o llamadas a:</span> <br />
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                rel="noopener noreferrer"
              >
                {formatPhoneNumber(process.env.NEXT_PUBLIC_PHONE)}
              </a>
            </p>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.3707356873842!2d-104.05361021793928!3d20.20190966733347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425c6f75a481d3b%3A0x3e2349d8fdd64b69!2sConstituci%C3%B3n%2043%2C%20Centro%2C%2048540%20Tecolotl%C3%A1n%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2ses!4v1718881134983!5m2!1ses-419!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}
        <div className="flex flex-col w-full">
          <div className="w-full p-4 flex flex-col justify-center items-center text-center gap-6 m-4 md:m-0">
            <p className="w-full md:max-w-lg text-neutral-600">
              <span className="font-medium">
                Dirección Tecolotlán, Jalisco:
              </span>{" "}
              <br />
              <a
                href="https://maps.app.goo.gl/V7ixv9rQ5MVrn3Kv9"
                rel="noopener noreferrer"
              >
                Constitución #43 C.P. 48540 (frente tienda La Estación)
              </a>
              <br />
              <br />
              <span className="font-medium">Horario:</span>
              <br />
              Lunes a viernes de 11 am a 7 pm | Sábado de 10 am a 2pm
              <br />
              <br />
              <span className="font-medium">Mensajes o llamadas a:</span> <br />
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                rel="noopener noreferrer"
              >
                {formatPhoneNumber(process.env.NEXT_PUBLIC_PHONE)}
              </a>
            </p>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.3707356873842!2d-104.05361021793928!3d20.20190966733347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425c6f75a481d3b%3A0x3e2349d8fdd64b69!2sConstituci%C3%B3n%2043%2C%20Centro%2C%2048540%20Tecolotl%C3%A1n%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2ses!4v1718881134983!5m2!1ses-419!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
