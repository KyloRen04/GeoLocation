import { useEffect, useState } from 'react'
import './App.css'

function App() {
     
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    useEffect(() => {
      navigator.geolocation.watchPosition((pos) => {
        setLatitude(pos.coords.latitude)
        setLongitude(pos.coords.longitude)
      })
    })  

  return (
    <>
   <h1>Current Location</h1>
   <h3>{latitude} {longitude}</h3>
    </>
  )
}

export default App
