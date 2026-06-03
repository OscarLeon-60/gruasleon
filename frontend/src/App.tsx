import React, { useState, useEffect } from 'react'
import SplashScreen from './components/SplashScreen'
import './styles.css' 

import mapaColombia from './assets/img/page/mapa-colombia.png';

// 👇 AÑADE ESTAS IMPORTACIONES AQUÍ ARRIBA 👇
import imgGrua from './assets/img/page/img_grua.webp'
import imgRemolque from './assets/img/page/img_remolque.webp'
import imgMontacargas from './assets/img/page/img_montacarga.webp'
import icoWhatsapp from './assets/img/page/ico/Whatsapp_ico.ico'

// 👇 IMPORTA AQUÍ TUS LOGOS DE ALIADOS 👇
import logoCliente1 from './assets/img/page/aliados/sunshine.png'
import logoCliente2 from './assets/img/page/aliados/coomotor.png'
import logoCliente3 from './assets/img/page/aliados/cootranshuila.png'
import logoCliente4 from './assets/img/page/aliados/maxitorres.jpg'
import logoCliente5 from './assets/img/page/aliados/santamaria.png'
import logoCliente6 from './assets/img/page/aliados/servitorres.jpg'
import logoCliente7 from './assets/img/page/aliados/sura.png'
import logoCliente8 from './assets/img/page/aliados/surenvios.png'
import logoCliente9 from './assets/img/page/aliados/toyota.png'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showContent, setShowContent] = useState(false)

  // =====================================================
  // ESTADOS PARA LA LÓGICA DEL FORMULARIO DE COTIZACIÓN
  // =====================================================
  const [formData, setFormData] = useState({
    tipoCarga: '',
    vehiculo: '',
    blindado: '',
    falla: '',
    rueda: '',
    llantas: '',
    ubicacionTipo: '',
    origen: '',
    destino: ''
  })

  useEffect(() => {
    // 🛞 AL ENTRAR: Congela el scroll en PC mientras se ejecuta la grúa
    document.body.style.overflow = 'hidden'

    const splashTimeout = setTimeout(() => {
      setShowSplash(false)
    }, 7500)

    const contentTimeout = setTimeout(() => {
      setShowContent(true)
      // 💥 AL TERMINAR: Tu línea exacta de app.js que le devuelve el scroll a la PC
      document.body.style.overflow = 'auto'
    }, 7600)

    return () => {
      clearTimeout(splashTimeout)
      clearTimeout(contentTimeout)
    }
  }, [])

  // Manejador genérico para actualizar los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    
    setFormData(prevState => {
      const updatedState = { ...prevState, [id]: value }
      
      // Si cambia "¿Rueda libremente?" y elige "Sí", limpiamos el campo de las llantas
      if (id === 'rueda' && value === 'Sí') {
        updatedState.llantas = ''
      }
      
      return updatedState
    })
  }

  // Manejador del envío a WhatsApp (Tu lógica exacta de app.js)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensaje = `📄 *SOLICITUD DE COTIZACIÓN*

To Tipo de carga:
${formData.tipoCarga}

🛻 Tipo de vehículo:
${formData.vehiculo}

🛡️ Blindado:
${formData.blindado || 'No especificado'}

🛠️ Falla o situación:
${formData.falla || 'No especificada'}

🛞 ¿Rueda libremente?:
${formData.rueda}

🔐 Llantas bloqueadas:
${formData.rueda === 'No' ? formData.llantas : 'No aplica'}

📍 Lugar donde se encuentra:
${formData.ubicacionTipo}

🚩 Ubicación actual:
${formData.origen}

🏁 Destino:
${formData.destino}`

    const url = `https://wa.me/573102876334?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')

    // 👇 AGREGA ESTE BLOQUE PARA LIMPIAR EL FORMULARIO 👇
    setFormData({
      tipoCarga: '',
      vehiculo: '',
      blindado: '',
      falla: '',
      rueda: '',
      llantas: '',
      ubicacionTipo: '',
      origen: '',
      destino: ''
    })
  }

  return (
    <>
      {/* 1. Pantalla de carga */}
      {showSplash && <SplashScreen />}

      {/* 2. Contenido principal con la clase dinámica para la transición */}
      <div id="main-content" className={showContent ? 'show' : ''}>
        
        {/* BARRA DE NAVEGACIÓN */}
        <header className="navbar">
          <div className="logo-nav">
            <span>GRÚAS LEÓN</span>
          </div>
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#cotizacion">Cotización</a>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section className="hero" id="inicio">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>SERVICIO DE GRÚA Y REMOLQUE</h1>
            <p>Transporte profesional de vehículos, maquinaria y montacargas.</p>
            <div className="hero-buttons">
              <a 
                href="https://wa.me/573102876334?text=Hola%20Gr%C3%BAas%20Le%C3%B3n,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20de%20gr%C3%BAa%20o%20remolque."
                target="_blank" 
                rel="noreferrer"
                className="btn-primary"
              >
                 Solicitar Servicio
              </a>
              <a href="tel:+573102876334" className="btn-secondary">
                 Llamar Ahora
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="services" id="servicios">
          <h2>NUESTROS SERVICIOS</h2>
            <div className="services-grid">

            {/* Tarjeta 1: Transporte en Grúa */}
            <div 
              className="service-card"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${imgGrua})` 
              }}
            >
              <h3>Transporte en Grúa</h3>
              <p>Traslado seguro y profesional de vehículos Pesados y livianos.</p>
            </div>

            {/* Tarjeta 2: Remolque */}
            <div 
              className="service-card"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${imgRemolque})` 
              }}
            >
              <h3>Remolque</h3>
              <p>Servicio de remolque urbano y en carretera.</p>
            </div>

            {/* Tarjeta 3: Montacargas */}
            <div 
              className="service-card"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${imgMontacargas})` 
              }}
            >
              <h3>Montacargas</h3>
              <p>Transporte y movilización de maquinaria y carga pesada.</p>
            </div>

          </div>
        </section>

        {/* NOSOTROS */}
        <section className="about" id="nosotros">
          <div className="about-content">
            <h2>EXPERIENCIA Y SEGURIDAD</h2>
            <p>
              En Grúas León ofrecemos servicio profesional de transporte,
              remolque, movilización de vehículos, maquinaria pesada y custodia.
            </p>
            <p>Atención rápida, segura y disponible cuando mas lo necesites.</p>
          </div>
        </section>

        {/* COBERTURA */}
        <section className="coverage">
          <h2>COBERTURA NACIONAL</h2>
          <p>Operamos desde Neiva - Huila con cobertura en todo el territorio colombiano.</p>
          <div className="coverage-map">
            <img src={mapaColombia} alt="Mapa de Cobertura Grúas León" />
          </div>
        </section>

        {/* GALERÍA */}
        <section className="gallery">
          <h2>NUESTRA OPERACIÓN</h2>
          <div className="gallery-grid">
            <div className="gallery-item1"></div>
            <div className="gallery-item2"></div>
            <div className="gallery-item3"></div>
          </div>
        </section>

        {/* SECCIÓN: CLIENTES / ALIADOS */}
        <section className="allies">
          <h2>CLIENTES QUE CONFÍAN EN NOSOTROS</h2>
          <div className="allies-slider">
            <div className="allies-track">
              
              {/* BLOQUE 1: Tus logos originales */}
              <div className="allies-item">
                <img src={logoCliente1} alt="Sunshein" />
              </div>
              <div className="allies-item">
                <img src={logoCliente2} alt="Coomotor" />
              </div>
              <div className="allies-item">
                <img src={logoCliente3} alt="Cootranshuila" />
              </div>
              <div className="allies-item">
                <img src={logoCliente4} alt="MaxiTorres" />
              </div>
              <div className="allies-item">
                <img src={logoCliente5} alt="SantaMaria Trasteos" />
              </div>
              <div className="allies-item">
                <img src={logoCliente6} alt="ServiTorres" />
              </div>
              <div className="allies-item">
                <img src={logoCliente7} alt="Sura" />
              </div>
              <div className="allies-item">
                <img src={logoCliente8} alt="Sur Envios" />
              </div>
              <div className="allies-item">
                <img src={logoCliente9} alt="Toyota" />
              </div>

              {/* BLOQUE 2: Duplicado exacto (Obligatorio para el efecto infinito) */}
              <div className="allies-item">
                <img src={logoCliente1} alt="Sunshein" />
              </div>
              <div className="allies-item">
                <img src={logoCliente2} alt="Coomotor" />
              </div>
              <div className="allies-item">
                <img src={logoCliente3} alt="Cootranshuila" />
              </div>
              <div className="allies-item">
                <img src={logoCliente4} alt="MaxiTorres" />
              </div>
              <div className="allies-item">
                <img src={logoCliente5} alt="SantaMaria Trasteos" />
              </div>
              <div className="allies-item">
                <img src={logoCliente6} alt="ServiTorres" />
              </div>
              <div className="allies-item">
                <img src={logoCliente7} alt="Sura" />
              </div>
              <div className="allies-item">
                <img src={logoCliente8} alt="Sur Envios" />
              </div>
              <div className="allies-item">
                <img src={logoCliente9} alt="Toyota" />
              </div>

            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section className="location" id="ubicacion">
          <h2>📍 UBICACIÓN</h2>
          <p>Estamos ubicados en Neiva, Huila - Colombia.</p>
          <p>Prestamos servicios de grúa, remolque, transporte y custodia.</p>
          <div className="contact-buttons">
            <a href="https://maps.app.goo.gl/RMFCSBCznpeNBJhN8" target="_blank" rel="noreferrer" className="btn-primary">
              📍 Ver Ubicación
            </a>
          </div>
        </section>
        
        {/* COTIZAR */}
        <section className="quote" id="cotizacion">
          <h2>💰 SOLICITAR COTIZACIÓN</h2>
          <form id="quoteForm" onSubmit={handleSubmit}>
            <select id="tipoCarga" value={formData.tipoCarga} onChange={handleChange} required>
              <option value="">¿Qué necesita transportar?</option>
              <option>Carro</option>
              <option>Moto</option>
              <option>Camioneta</option>
              <option>Turbo</option>
              <option>Bus</option>
              <option>Maquinaria</option>
              <option>Montacargas</option>
              <option>Enseres de oficina</option>
              <option>Otro</option>
            </select>

            <input 
              type="text" 
              id="vehiculo" 
              placeholder="Ej: Mazda 3, Hilux, Turbo NPR" 
              value={formData.vehiculo} 
              onChange={handleChange} 
            />

            <select id="blindado" value={formData.blindado} onChange={handleChange}>
              <option value="">¿Es blindado?</option>
              <option>Sí</option>
              <option>No</option>
            </select>

            <textarea 
              id="falla" 
              placeholder="Describa la falla o situación" 
              value={formData.falla} 
              onChange={handleChange} 
            />

            <select id="rueda" value={formData.rueda} onChange={handleChange} required>
              <option value="">¿Rueda libremente?</option>
              <option>Sí</option>
              <option>No</option>
            </select>

            <select 
              id="llantas" 
              disabled={formData.rueda !== 'No'} 
              value={formData.llantas} 
              onChange={handleChange}
              required={formData.rueda === 'No'}
            >
              <option value="">¿Qué llantas están bloqueadas?</option>
              <option>Delantera izquierda</option>
              <option>Delantera derecha</option>
              <option>Trasera izquierda</option>
              <option>Trasera derecha</option>
              <option>Dos llantas</option>
              <option>Tres llantas</option>
              <option>Las cuatro llantas</option>
            </select>
            
            <select id="ubicacionTipo" value={formData.ubicacionTipo} onChange={handleChange}>
              <option value="">¿Dónde se encuentra?</option>
              <option>Vía pública</option>
              <option>Parqueadero</option>
              <option>Sótano</option>
              <option>Conjunto residencial</option>
              <option>Taller</option>
              <option>Carretera</option>
              <option>Otro</option>
            </select>

            <input 
              type="text" 
              id="origen" 
              placeholder="Ubicación actual" 
              value={formData.origen} 
              onChange={handleChange} 
            />
            
            <input 
              type="text" 
              id="destino" 
              placeholder="Destino" 
              value={formData.destino} 
              onChange={handleChange} 
            />

            <button type="submit" className="btn-primary">
              Solicitar Cotización
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2026 GRÚAS LEÓN - Todos los derechos reservados</p>
        </footer>

        {/* WHATSAPP FLOAT */}
        <a 
          href="https://wa.me/573102876334?text=Hola%20Sr.%20Le%C3%B3n,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20de%20gr%C3%BAa%20o%20remolque."
          target="_blank" 
          rel="noreferrer"
          className="whatsapp-float"
        >
          <img src={icoWhatsapp} alt="Chat de WhatsApp Grúas León" />
        </a>

      </div>
    </>
  )
}

export default App