import { useState, useEffect } from 'react'
import '../static/app.css'
import Scene from './Scene'
import Map from './Map'

function App() {
  const [message, setMessage] = useState(null)

  const getMessage = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/message');
      const text = await response.text();
      setMessage(text);
    } catch (err) {
      console.error("Error fetching message:", err);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <>
      <h1>Scene Locator</h1>
      <div className = 'main-page-outer'>
        <div className = 'main-page-inner'>
          <p>SpringBoot says: {message ? message : "no message to display"}</p>
          <Scene/>
        </div>
        <div className = 'main-page-inner'>
          <Map/>
        </div>
      </div>
    </>
  )
}

export default App
