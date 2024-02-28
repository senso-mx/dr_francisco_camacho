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
    <section class="py-6 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -m-4">
          <div class="w-full md:w-1/2 p-4">
            <Image
              className="mx-auto md:mr-0rounded-lg"
              src="images/about.png"
              alt="Preguntas Frecuentes"
              height={760}
              width={760}
            />
          </div>
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col justify-start h-full pl-4 md:pl-8 lg:pl-12">
              <div class="flex-initial mb-10">
                <div class="md:max-w-lg">
                  <h2 class="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight border-b-2 border-b-neutral-800 w-fit mb-2 pb-2">
                    Preguntas Frecuentes
                  </h2>
                </div>
              </div>
              <div class="flex-initial">
                <div class="flex flex-wrap -m-4 gap-2">
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
