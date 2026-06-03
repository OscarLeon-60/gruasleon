import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    // Esto replica los 7.6 segundos que tenías en tu app.js original
    const timer = setTimeout(() => {
      setHide(true)
    }, 7600)

    return () => clearTimeout(timer)
  }, [])

  if (hide) return null

  return (
    <div id="splash-screen">
      <div className="splash">
        <div className="crane-rail"></div>
        <div className="crane-center"></div>
        <div className="hook-system">
          <div className="cable"></div>
          <div className="hook"></div>
          <div className="logo">
            GRÚAS <span>LEÓN</span>
          </div>
        </div>
        <div className="smoke-floor"></div>
      </div>
    </div>
  )
}