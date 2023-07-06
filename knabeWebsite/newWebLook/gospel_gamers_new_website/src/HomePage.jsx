import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Card  from './components/card'
import Footer from './components/footer'

export default function HomePage() {
  // setState variables
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

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