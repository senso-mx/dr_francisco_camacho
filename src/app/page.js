import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PaymentMethods from "@/components/PaymentMethods";
import CTABanner from "@/components/CTABanner";
import About from "@/components/About";
import Hospitals from "@/components/Hospitals";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4">
      <Hero />
      <Services />
      <CTABanner
        bgImage={ `${process.env.BASE_PATH || ""}/imgs/ctabg.webp`}
        content={
          <>
            <p className="text-xl md:text-2xl text-center md:text-left text-white">
              Retoma tus actividades y calidad de vida, comienza con una cita especializada.
            </p>
          </>
        }
      />
      <Reviews />
      <FAQs />
      <PaymentMethods />
      <About />
      <Hospitals />
      <CTABanner
        bgImage={ `${process.env.BASE_PATH || ""}/imgs/cta2bg.webp`}
        content={
          <>
            <p className="text-xl md:text-2xl text-center md:text-left text-white">
            El primer paso para recuperar el<br/> control, es una cita especializada
            </p>
          </>
        }
      />
      <Contact />
    </main>
  );
}
