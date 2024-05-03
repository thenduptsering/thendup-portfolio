import { useEffect, useState } from 'react';

import useScroll from '@/hooks/useScroll';

import BackToTopButton from '@/components/BackToTopButton';
import Blob from '@/components/Blob';
import Home from '@/components/Home';
import Logo from '@/components/Logo';
import HamburgerNav from '@/components/home/HamburgerNav';
import Navbar from '@/components/home/Navbar';

function App() {
  const { scrollY, scrollDir } = useScroll();

  const [showingAppLoader, setShowingAppLoader] = useState(true);
  const [loadingNavBar, setLoadingNavBar] = useState(false);
  const [loadedNavBar, setLoadedNavBar] = useState(false);
  const [loadingHero, setLoadingHero] = useState(false);
  const [loadedHero, setLoadedHero] = useState(false);
  const [stickNavbar, setStickNavbar] = useState(false);

  useEffect(() => {
    if (scrollDir === 'up' && scrollY > 200) {
      setStickNavbar(true);
    } else if (scrollDir === 'down' || scrollY <= 10) {
      setStickNavbar(false);
    }
  }, [scrollDir, scrollY]);

  const initialLoad = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setShowingAppLoader(false);
        resolve();
      }, 4000);
      // Animation = 3s + Delay on logo = 1s
    })
  }

  const loadNavBar = () => {
    setLoadingNavBar(true);
    setTimeout(() => {
      setLoadingNavBar(false);
      setLoadedNavBar(true);
    }, 2200); 
    // Last elem => Resume button
    // Animtation = 1s + delay = 1200ms
  }

  const loadHero = () => {
    setLoadingHero(true);
    setTimeout(() => {
      setLoadingHero(false);
      setLoadedHero(true);
    }, 1600);
    // Last elem => Download button
    // Animtation = 1s + delay = 600ms
  }

  const loadHome = () => {
    loadHero();

    setTimeout(() => {
      // Start Navbar animation while hero is animating
      loadNavBar();
    }, 1000);
  }

  const loadPage = () => {
    if (loadingNavBar || loadingHero) return;

    setLoadingHero(false);
    setLoadedHero(false);
    setLoadingNavBar(false);
    setLoadedNavBar(false);
    setShowingAppLoader(true);

    initialLoad()
      .then(() => {
        loadHome();
      })
  }

  useEffect(() => {
    loadPage();
  }, [])

  return (
    <div className="App-Container">
      <div className={`App-Loader ${showingAppLoader ? 'App-Loader--loading' : ''}`}>
        <Logo animationClassName="Logo--animate" />
      </div>

      {!showingAppLoader && (
        <Blob />
      )}

      <div className={`App ${showingAppLoader ? 'App--hide' : ''}`}>
        <div className={`App__navbar ${stickNavbar ? 'App__navbar--sticky' : ''}`}>
          <Navbar
            loadingNavBar={loadingNavBar}
            loadedNavBar={loadedNavBar}
            loadPage={loadPage}
          />

          <HamburgerNav />
        </div>

        <div className="App__body">
          <Home standBy={loadedHero} loadingHero={loadingHero} />
        </div>

        <div className="App__footer">
          <p>Built by Thendup Tsering</p>
        </div>

        {!showingAppLoader && (
          <BackToTopButton />
        )}
      </div>
    </div>
  )
}

export default App
