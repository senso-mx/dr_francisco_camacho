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
      author: "Lyzeth Ortega",
      message:
        "Excelente cirujano con conocimientos y habilidades admirables !!",
    },
    {
      author: "Sandra Ivette Mosqueda",
      message: "El mejor cirujano del mundo mundial... 👍😁",
    },
  ],
  [
    {
      author: "Celina Flores",
      message:
        "El mejor de lo mejor",
    },
    {
      author: "Sandra Ivette Mosqueda",
      message: "El mejor cirujano.",
    },
  ],
  [
    {
      author: "Karla Gonzalez",
      message:
        "Súper recomendado ☺️",
    },
    {
      author: "Rebeca Reyes",
      message: "Recomendado 💯",
    },
  ],
];

export default function Reviews() {
  return (
    <section className="section-container">
      <div className="mx-auto">
        <div className="py-16 px-8 rounded-xl bg-jaime">
          <div className="max-w-7xl mx-auto">
            <div className="w-full mx-auto text-center">
              <p className="font-heading mb-12 text-3xl md:text-4xl font-bold tracking-tight italic">
                Historias que roban miradas
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <Swiper
                centeredSlides={false}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                modules={[Navigation, Pagination]}
              >
                {testimonials.map((reviews, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-row flex-wrap md:flex-nowrap gap-8 justify-center w-full md:max-w-4xl mx-auto mb-16">
                      <div className="w-full">
                        <div className="flex flex-col justify-between h-full text-center rounded-xl bg-white">
                          <div className="flex-initial mb-8 px-8 pt-8">
                            <p className="text-base italic">{reviews[0].message}</p>
                          </div>
                          <div className="flex-initial bg-secondary rounded-b-xl p-2">
                            <p className="text-white">{reviews[0].author}</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex flex-col justify-between h-full text-center rounded-xl bg-white">
                          <div className="flex-initial mb-8 px-8 pt-12 pb-8">
                            <p className="text-base italic">{reviews[1].message}</p>
                          </div>
                          <div className="flex-initial bg-secondary rounded-b-xl p-2">
                            <p className="text-white">{reviews[1].author}</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
