import Hero from '@/components/Hero';
import Surgeries from '@/components/Surgeries';
import CTABanner from '@/components/CTABanner';
import About from '@/components/About';
// import Reviews from '@/components/Reviews';
// import CTASplit from '@/components/CTASplit';
import CTALong from '@/components/CTALong';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4">
      <Hero />
      <Surgeries />
      <CTABanner />
      <About />
      <CTALong />
      {/* <Reviews /> */}
      {/* <CTASplit /> */}
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}
