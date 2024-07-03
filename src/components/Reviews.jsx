"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  [
    {
      author: "Gustavo Rodriguez",
      message:
        "Buen dia, el doctor Luis Francisco Camacho creo q es de los mas profesionales q me he topado en la vida, muy serio y claro en la opciones y como hace los procedimientos y eso da mucha confianza, a mi me opero hernia cervical con protesis y sali super bien al siguiente me senti muy bien y sali a casa y la recuperacion mucho mejor de lo esperado, muchas gracias por todo doc",
    },
    {
      author: "Gustavo Oliva",
      message:
        "Excelente atención del Dr Camacho, revision fisica, se tomo el tiempo suficiente para explicar mi problema, atendiendo cada una de mis dudas dandome las alernativas de solución al mismo, quede muy conforme con su trato y atención.",
    },
    {
      author: "Martha Alicia Gonzalez Gonzalez",
      message:
        "La atención que me proporcionó el Dr. Francisco Camacho es de primera calidad, la cirugía que me realizó junto con su equipo fue un éxito, mil gracias a usted y a todo su equipo quirúrgico. El mejor neurocirujano que dios me puso en mi camino.",
    },
    {
      author: "yesenia dominguez vazquez",
      message:
        "El Dr. tomo el caso de mi papá, lo programo para cirugía. Nos brindó toda la información necesaria, estuvo al pendiente todo el tiempo. Antes y después. Afortunadamente todo salió bien, mi papá se encuentra perfectamente en recuperación y estamos próximos a cita para retirar puntos. En general, estamos agradecidos y satisfechos con el trabajo que realizó el Dr y su equipo.",
    },
    {
      author: "ana Pérez",
      message:
        "El Dr. Muy profesional, te explica muy bien todo. Siempre al pendiente incluso despues de la cirugia, Lo recomiendo muchisimo.",
    },
    {
      author: "maria concepcion aldana delgado",
      message:
        "Estoy muy agradecida con el Dr. Luis Francisco Camacho Herrera, un excelente Neurocirujano y también como ser humano. Desde la primera consulta me inspiró confianza y seguridad. Me operó de columna cervical y columna dorsal exitosamente, ahorita estoy convaleciente y recuperándome. Lo recomiendo ampliamente.",
    },
  ],
  [
    {
      author: "Gloria Garcia",
      message:
        "Recomiendo ampliamente ,al Dr. Francisco Camacho, porque después de consultar varios neurocirujanos me decidí a que me operará el, de un tumor intracraneal, al consultarlo me pareció muy onesto y me explico muy bien todo y también muy considerando en lo económico, tengo 70 años y salí muy bien de la operación gracias Dios y el que realizo muy bien su trabajo.",
    },
    {
      author: "Victor alfonso Santiago barboza",
      message:
        "Un gran doctor y gran persona desde la primer cita deposite en el mi confianza ya que es muy profesional, serio y está muy actualizado y con alegría me doy cuenta que su diagnóstico fue muy acertado y siguiendo sus indicaciones y poniéndome en sus manos para mí cirugía he logrado sanar. ¡Muchísimas gracias doctor Luis Francisco!",
    },
    {
      author: "Marisela María del Rosario Valle Vega",
      message:
        "El Dr Luis Francisco Camacho Persona de trato muy agradable y un exelente neurocirujano, me realizó una cirugía de remplazo de tres discos cervicales la cual resultó todo un éxito, sin complicación alguna y con una muy buena recuperación. Gracias Doctor por todos sus cuidados y empeño. 100 % recomendable.",
    },
    {
      author: "Lulita Aceves",
      message:
        "Estamos muy contentas! con el neurocirujano Doctor Luis Francisco Camacho Herrera es un Doctor muy acertado en su diagnóstico muy profesional amable! operó a mi hermana de un cavernoma medular ella tiene 65 años hace 6 semanas y mi hermana quedó muy satisfecha con su cirugía lo recomiendo ampliamente es muy buen cirujano, honesto y acertado!!",
    },
    {
      author: "Raquel Lozano",
      message:
        "El Dr. Luis Francisco Camacho es una persona muy profesional. Lo sé porque el me operó un tumor en la cabeza, y desde la primer consulta me inspiró confianza, me explicó todo el procedimiento a realizar y ha resuelto todas mis dudas. A mí me no recomendaron y yo también lo recomiendo",
    },
    {
      author: "Norma Lopez",
      message:
        "Después de varias opinione sobre una cirugía de cervicales tuve la fortuna que me recomendaran a el Dr Luis Camacho inmediatamente me inspiró la confianza que requería para someterme a la intervención, me puse en sus manos y todo un exito muy agradecida doctor por sus atenciones. Como lo describiría? Calidez, calidad , servicio y alto profesionalismo.",
    },
  ],
];

export default function Reviews() {
  return (
    <section>
      <div className="mx-auto">
        <div className="pb-8">
          <div>
            <div className="w-full mx-auto text-center">
              <p className="font-heading mb-12 text-2xl lg:text-3xl font-bold">
                Recuperemos tu vida y contemos tu historia de éxito
              </p>
            </div>
            <div className="flex flex-wrap">
              <Swiper
                navigation={false}
                pagination={{
                  enabled: true,
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={40}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2
                  }
                }}
              >
                {[...new Array(testimonials[0].length)].map((_, i) => (
                  <SwiperSlide key={i}>
                    {testimonials[0][i] && (
                      <ReviewCard review={testimonials[0][i]} />
                    )}
                    {testimonials[1][i] && (
                      <ReviewCard review={testimonials[1][i]} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-8 justify-center items-center w-full md:max-w-4xl mx-auto mb-8 shadow-lg h-auto md:h-48">
      <div className="w-full">
        <div className="flex flex-col justify-between h-full text-left rounded-xl bg-white">
          <div className="flex-initial mb-8 px-8 pt-8">
            <p className="leading-tight text-sm">{review.message}</p>
            <p className="text-primary text-semibold mt-4 capitalize">
              {review.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
