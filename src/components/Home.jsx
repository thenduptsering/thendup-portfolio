import AboutMe from '@/components/home/AboutMe';
import Experience from '@/components/home/Experience';
import Hero from '@/components/home/Hero';
import Skills from '@/components/home/Skills';
// import Projects from '@/components/home/Projects';
import ContactMe from '@/components/home/ContactMe';
import HomeFooter from '@/components/home/HomeFooter';

export default function Home ({ allLoaded, loadingHero = false }) {
  return (
    <div className={`Home ${allLoaded ? '' : 'Home--standby' } ${loadingHero ? 'Home--loading' : ''}`}>
      <Hero />

      {allLoaded && (
        <>
          <AboutMe />

          <Experience />

          <Skills />

          {/* <Projects /> */}

          <ContactMe />   

          <HomeFooter />
        </>
      )}
    </div>
  );
}