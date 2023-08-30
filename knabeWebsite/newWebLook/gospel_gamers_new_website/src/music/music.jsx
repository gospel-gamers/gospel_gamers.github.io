import { useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import spotifyAlbum from '../components/spotifyAlbum'

export default function Music() {
  // setState variables
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(location.search.includes('darkMode=true'))

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={!darkMode ? 'music--page' : 'music--page--dark'}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        <h1 className={!darkMode ? 'welcome--title' : 'welcome--title--dark'}>Welcome to my Music!</h1>

        <div className={!darkMode ? 'music--content' : 'music--content--dark'}>
            <p>I am a musician, songwriter and producer. My main instruments are voice, guitar, piano and bass. <br></br>(I dabble in several others as well)</p>

            <p>Have a listen:</p>

            <spotifyAlbum />

            <p>Visit my audio page for production pricing, <br></br>or visit my contact page!</p>
        </div>


        <Footer darkMode={darkMode}/>
    </div>
  )
}
