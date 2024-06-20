import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import About from "@/components/About";
import Hospitals from "@/components/CTASplit";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4">
      <Hero />
      <Services />
      <CTABanner
        content={
          <>
            <p className="font-extralight text-xl md:text-2xl text-center md:text-left">
              Tu transformación comienza con una valoración,{" "}
              <span className="text-primary">siéntete increíble cada día</span>
            </p>
          </>
        }
      />
      <About />
      <Hospitals />
      <CTABanner
        content={
          <>
            <p className="font-extralight text-xl md:text-2xl text-center md:text-left">
              ¿Estás lista para ser tu versión más segura y atractiva? {" "}
              <span className="text-primary">¡Agenda hoy!</span>
            </p>
          </>
        }
      />
      <FAQs />
      <Contact />
    </main>
  );
}
