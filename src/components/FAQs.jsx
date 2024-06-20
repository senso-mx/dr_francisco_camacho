const faqs = [
  {
    question: "¿En dónde están ubicados?",
    answer:
      "Contamos con 2 sucursales:<br/><br/>-  Av. Miguel Hidalgo y Costilla 1980a, Ladron De Guevara, 44600 Guadalajara, Jal.<br/>-  Constitución 43, Centro, 48540 Tecolotlán, Jal.",
  },
  {
    question: "¿Cuál es el precio de la valoración? ",
    answer: "La valoración tiene el precio de $600.",
  },
  {
    question: "¿Necesito consulta de valoración?",
    answer: "RESPUESTA",
  },
  {
    question: "¿Cuál es el precio de la lipoescultura?",
    answer: "RESPUESTA.",
  },
  {
    question: "¿Cuál es el precio de los implantes de mama?",
    answer: "RESPUESTA",
  },
  {
    question:
      "¿Cuánto tiempo necesito de recuperación para regresar a mi trabajo?",
    answer: "RESPUESTA",
  },
];

export default function FAQs() {
  return (
    <section
      className="flex items-center justify-center overflow-hidden h-full"
      style={{
        backgroundImage: `url(${process.env.BASE_PATH || ""}/imgs/faqsbg.webp)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-start h-full pl-4 ls:pl-8 lg:pl-12">
              <div className="flex-initial mb-10">
                <div className="lg:max-w-lg">
                  <h5 className="text-center lg:text-left font-normal lg:font-extralight uppercase text-primary text-xl lg:text-3xl tracking-tight w-full mb-2 pb-2">
                    Preguntas Frecuentes
                  </h5>
                </div>
              </div>
              <div className="flex-initial">
                <div className="flex flex-wrap w-full">
                  {faqs.map((faq, i) => (
                    <div
                      className="collapse collapse-arrow rounded-none bg-white border-2 border-primary"
                      key={faq.question}
                    >
                      <input
                        type="radio"
                        name="my-accordion-2"
                        defaultChecked={i === 0}
                      />
                      <div className="collapse-title text-md font-normal">
                        {faq.question}
                      </div>
                      <div className="collapse-content">
                        <p className="font-light" dangerouslySetInnerHTML={{__html: faq.answer}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4"></div>
        </div>
      </div>
    </section>
  );
}
