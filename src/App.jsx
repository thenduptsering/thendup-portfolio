import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useScroll from '@/hooks/useScroll';

import Blob from '@/components/Blob';
import Home from '@/components/Home';
import Logo from '@/components/Logo';
import HamburgerNav from '@/components/home/HamburgerNav';
import Navbar from '@/components/home/Navbar';

function App() {
  const location = useLocation();
  const { scrollY, scrollDir } = useScroll();

  const [showingAppLoader, setShowingAppLoader] = useState(true);
  const [loadingNavBar, setLoadingNavBar] = useState(false);
  const [loadedNavBar, setLoadedNavBar] = useState(false);
  const [loadingHero, setLoadingHero] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [stickNavbar, setStickNavbar] = useState(false);
  
  const isHome = location.pathname === '/';

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
      }, 3600);
    })
  }

  const loadNavBar = () => {
    setLoadingNavBar(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoadingNavBar(false);
        setLoadedNavBar(true);
        resolve();
      }, 2200);
    })
  }

  const loadHero = () => {
    setLoadingHero(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoadingHero(false);
        resolve();
      }, 2000);
    })
  }

  const loadPage = () => {
    if (loadingNavBar || loadingHero) return;

    setLoadingNavBar(false);
    setLoadedNavBar(false);
    setLoadingHero(false);
    setAllLoaded(false);
    setShowingAppLoader(true);

    initialLoad()
      .then(() => {
        return loadNavBar();
      })
      .then(() => {
        return loadHero();
      })
      .then(() => {
        setAllLoaded(true);
      })
  }

  useEffect(() => {
    loadPage();
  }, [])

  return (
    <div className="App-Container">
      {isHome ? (
        <>
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
              <Home allLoaded={allLoaded} loadingHero={loadingHero} />
            </div>

            <div className="App__footer">
              <p>Built by Thendup Tsering</p>
            </div>
          </div>
        </>
      ) : (
        <div className="App">
          <div className="App__body">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
