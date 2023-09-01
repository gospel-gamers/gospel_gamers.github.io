import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Card  from './components/card'
import Footer from './components/footer'

export default function HomePage() {
  // state variables
  const [checkSysCount, setCheckSysCount] = useState(0);
  const [checkTimeCount, setCheckTimeCount] = useState(0);
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))


  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  // Function to check if user system preferences are set to dark mode
  const checkSystemPreferences = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(prefersDarkMode.matches);
  };

  // function to check if it is nighttime on the client browser
  const isNighttime = () => {
    const now = new Date();
    // console.log(`Date: ${now}`)
    const hour = now.getHours();
    // console.log(`Hour: ${hour}`)
    return hour >= 19 || hour < 7; // 7 PM to 7 AM
  };

  // Check the time and set darkMode on first load
  useEffect(() => {
    if (!darkMode) {
      const nighttime = isNighttime();
      setDarkMode(nighttime);
    }
  }, []); // [] --> Only run the effect on first load


  // Check system preferences when the component mounts and the checkCount is 0
  useEffect(() => {
    if (checkSysCount === 0) {
      checkSystemPreferences();
      setCheckSysCount(1); // Increment the counter after checking
    }
  }, [checkSysCount]);

  // Check system preferences when the component mounts (only once)
  // useEffect(() => {
  //   checkSystemPreferences();
  // }, []);

  // Check to see if user system color prefers dark mode, only on very first time
  // useEffect(() => {
  //   // Check system preferences only on the first visit to the homepage
  //   if (!hasCheckedSystemPreferences) {
  //     const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  //     setDarkMode(prefersDarkMode.matches);
  //     setHasCheckedSystemPreferences(true); // Mark that we've checked system preferences
  //   }
  // }, [hasCheckedSystemPreferences]);


  return (
    <div className={!darkMode ? 'App' : 'App--dark'}>

        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        <h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Welcome to a place where logic and creativity unite!</h1>

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