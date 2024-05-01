import AboutMe from './home/AboutMe';
import Experience from './home/Experience';
import Hero from './home/Hero';
import Skills from './home/Skills';
// import Projects from './home/Projects';
import ContactMe from './home/ContactMe';
import HomeFooter from './home/HomeFooter';

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