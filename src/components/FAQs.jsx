const faqs = [
  {
    question: "¿Debo prepararme para una Cirugía?",
    answer:
      "Necesitamos hacerte tus exámenes preoperatorios para evitar riesgos.",
  },
  {
    question: "¿Puedo fumar?",
    answer:
      "Hay que suspender el cigarro o las drogas 1 mes antes de tu cirugía porque pueden abrirse las heridas.",
  },
  {
    question: "¿Qué medicamentos o alimentos debo suspender antes de operarme?",
    answer:
      "3 semanas antes de operarte hay que SUSPENDER lo siguiente: Aspirina. Arnica. Homeopatía. Jugos verdes. Todo tipo de tes incluyendo la canela. Curcuma. Jengibre. Suplementos para el gym. Vitamina E. Ginkgo Biloba. Ginseng.",
  },
  {
    question:
      "¿Cuánto tiempo tarda en regresar a trabajar después de un aumento de senos?",
    answer: "3 semanas.",
  },
  {
    question: "¿Cuánto tiempo es de reposo después de una lipoescultura?",
    answer: "2 semanas.",
  },
];

export default function FAQs() {
  return (
    <section
      className="flex items-center justify-center overflow-hidden h-full"
      style={{
        backgroundImage: `url(${
          process.env.BASE_PATH || ""
        }/imgs/faqsbg.webp)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="flex flex-col justify-start h-full pl-4 md:pl-8 lg:pl-12">
              <div className="flex-initial mb-10">
                <div className="md:max-w-lg">
                  <h2 className="text-xl font-extralight uppercase text-primary md:text-xl lg:text-3xl tracking-tight w-fit mb-2 pb-2">
                    Preguntas Frecuentes
                  </h2>
                </div>
              </div>
              <div className="flex-initial">
                <div className="flex flex-wrap -m-4 w-full">
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
                        <p className="font-light">{faq.answer}</p>
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
