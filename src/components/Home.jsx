import AboutMe from '@/components/home/AboutMe';
import ContactMe from '@/components/home/ContactMe';
import Experience from '@/components/home/Experience';
import Hero from '@/components/home/Hero';
import HomeFooter from '@/components/home/HomeFooter';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';

export default function Home ({ standBy, loadingHero = false }) {
  return (
    <div className={`Home ${standBy ? '' : 'Home--standby' } ${loadingHero ? 'Home--loading' : ''}`}>
      <Hero />

      {standBy && (
        <>
          <AboutMe />

          <Experience />

          <Skills />

          <Projects />

          <ContactMe />   

          <HomeFooter />
        </>
      )}
    </div>
  );
}