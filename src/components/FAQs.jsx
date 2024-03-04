import Image from "next/image";

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
    <section className="py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/2 p-4">
            <Image
              className="mx-auto md:mr-0rounded-lg aspect-auto[87/91]"
              src="images/implantes.webp"
              alt="Preguntas Frecuentes"
              height={608}
              width={635}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="flex flex-col justify-start h-full pl-4 md:pl-8 lg:pl-12">
              <div className="flex-initial mb-10">
                <div className="md:max-w-lg">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight border-b-2 border-b-neutral-800 w-fit mb-2 pb-2">
                    Preguntas Frecuentes
                  </h2>
                </div>
              </div>
              <div className="flex-initial">
                <div className="flex flex-wrap -m-4 gap-2 w-full">
                  {faqs.map((faq, i) => (
                    <div
                      className="collapse collapse-arrow bg-base-300 text-white"
                      key={faq.question}
                    >
                      <input
                        type="radio"
                        name="my-accordion-2"
                        defaultChecked={i === 0}
                      />
                      <div className="collapse-title text-lg font-medium">
                        {faq.question}
                      </div>
                      <div className="collapse-content">
                        <p className="text-white font-light">{faq.answer}</p>
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
