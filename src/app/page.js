import Hero from '../components/Hero';
import Surgeries from '../components/Surgeries';
import CTABanner from '../components/CTABanner';
import About from '../components/About';

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4">
      <Hero />
      <Surgeries />
      <CTABanner />
      <About />
      HELLOW
    </main>
  );
}
