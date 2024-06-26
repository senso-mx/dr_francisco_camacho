import Image from "next/image";

const faqs = [
  {
    question: "¿La cirugía es peligrosa?",
    answer:
      "En la actualidad los riesgos de la cirugía son bajos ya que se cuenta de muchas herramientas tecnológicas que nos permiten disminuir los riesgos logrando obtener con esto cirugías seguras con excelentes resultados.",
  },
  {
    question: "¿Qué tecnica utiliza? ",
    answer: "Siempre que sea posible y la patología del paciente lo permita se realizan técnicas de mínima invasión que lastiman menos el organismo y permiten una rápida recuperación.",
  },
  {
    question: "¿Qué costo tiene la cirugía?",
    answer: "Una cirugía de columna inicia desde $95,000<br/><br/>Una cirugía de cerebro inicia desde $120,000.",
  },
  {
    question: "¿Cómo puedo pagar?",
    answer:
      "Aceptamos pago en efectivo, tarjeta de débito y tarjeta de crédito así como meses sin intereses pagando con BBVA. (Al día de hoy, dentro de poco algunas otras con santander)",
  },
  {
    question: "¿Cuánto tiempo tarda la recuperación?",
    answer:
      "En general despuéss de una cirugía de columna se mantiene hospitalizado 2 días y se retiran puntos a las 2 semana.<br/><br/>En una cirugía de craneo la hospitalización dura de 3 a 5 días y los puntos se retiran a las 2 semanas.",
  },
];

export default function FAQs() {
  return (
    <section className="flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 p-4">
            <Image
              className="mx-auto"
              src={`${process.env.BASE_PATH || ""}/imgs/faqsbg.webp`}
              alt="Dr. Francisco Camacho"
              width={592}
              height={653}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-start h-full pl-4 ls:pl-8 lg:pl-12">
              <div className="flex-initial mb-10">
                <div className="lg:max-w-lg">
                  <h5 className="text-center lg:text-left font-bold text-primary text-xl lg:text-3xl w-full mb-2 pb-2 mt-0 md:mt-8">
                    Preguntas Frecuentes
                  </h5>
                </div>
              </div>
              <div className="flex-initial">
                <div className="flex flex-wrap w-full">
                  {faqs.map((faq, i) => (
                    <div
                      className="collapse collapse-arrow rounded-none bg-white border border-neutral-800"
                      key={faq.question}
                    >
                      <input
                        type="radio"
                        name="my-accordion-2"
                        defaultChecked={i === 0}
                      />
                      <div className="collapse-title text-md font-semibold text-primary">
                        {faq.question}
                      </div>
                      <div className="collapse-content">
                        <p
                          className="text-md leading-tight"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
