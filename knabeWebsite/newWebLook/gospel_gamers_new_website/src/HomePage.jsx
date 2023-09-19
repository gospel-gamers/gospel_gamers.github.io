import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import MenuBar from './components/toggleMenuBar'
import Card  from './components/card'
import Footer from './components/footer'

export default function HomePage() {

  // Extract the 'darkMode' query parameter and convert it to a boolean
  const searchParams = new URLSearchParams(location.search);
  const initialDarkModeQueryParam = searchParams.get('darkMode') === 'true';

  // Load or initialize checkSysCount from localStorage
  const [checkSysCount, setCheckSysCount] = useState(() => {
    const storedCount = localStorage.getItem('checkSysCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  // State variables
  const [darkMode, setDarkMode] = useState(initialDarkModeQueryParam);

  // hamburger menu toggle
  // menu bar for navbar

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      // console.log(isMenuOpen)
  };

  // Function to check if user system preferences are set to dark mode
  const checkSystemPreferences = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(prefersDarkMode.matches);
  };

  // Check system preferences when the component mounts and checkSysCount is 0
  useEffect(() => {
    if (checkSysCount === 0) {
      checkSystemPreferences();
      setCheckSysCount(1); // Increment the counter after checking
      localStorage.setItem('checkSysCount', '1'); // Save the counter to localStorage
    }
  }, [checkSysCount]);

  // Function to check if it is nighttime on the client browser
  const isNighttime = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 19 || hour < 7; // 7 PM to 7 AM
  };

  // UseEffect for Nighttime Check (only on the first page load)
  useEffect(() => {
    if (checkSysCount === 1) {
      const nighttime = isNighttime();
      setDarkMode(nighttime);
    }
  }, [checkSysCount]);

  // Toggle dark mode manually
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className={!darkMode ? 'App' : 'App--dark'}>

        {/* Have Menubar closed or open based on screen size also */}
        {!isMenuOpen && <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}

        {isMenuOpen && <MenuBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}

        <div className='homepage--title-flex'>
          <h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Welcome to a place where logic and creativity unite!</h1>
        </div>

        <div className='cards--section' >
        <Card id={!darkMode ? '1' : '11'} message='My story is quite unique, click above to find out more' darkMode={darkMode} />
        <Card id={!darkMode ? '2' : '12'} message='Listen to my self-published music on Spotify' darkMode={darkMode}/>
        <Card id={!darkMode ? '3' : '13'} message='With a degree in Audio, find out more about my services' darkMode={darkMode} />
        <Card id={!darkMode ? '4' : '14'} message='Need a wedding DJ, musician or maybe even both?' darkMode={darkMode}/>
        <Card id={!darkMode ? '5' : '15'} message='I created this website and code in several languages' darkMode={darkMode}/>
        <Card id={!darkMode ? '6' : '16'} message='Click above to contact me for any service' darkMode={darkMode}/>
        </div>


    <Footer darkMode={darkMode}/>

    {/* old count button click:

            <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
        {/*
        <p>
        Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    </div>
    */}


    </div>
  )
}