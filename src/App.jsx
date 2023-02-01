import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Header from './header/Header.jsx'
import './components/Style.css'
import  Sobremi from './components/Sobremi';
import Habilidad from './components/Habilidades.jsx';
import Proyecto1 from './components/Proyecto1.jsx';
import Proyecto2 from './components/Proyecto2.jsx';
import Proyecto3 from './components/Proyecto3.jsx';
import Footer from './components/Footer.jsx';
import Contacto from './components/Contacto.jsx';

function App() {

  return (
    
        <div className='content'>
            < Header />
            <main>
                < Sobremi />
                < Habilidad />
                < Proyecto1 />
                < Proyecto2 />
                < Proyecto3 />
                < Contacto />
            </main>
            <Footer />
        </div>
    
          ) 
}

export default App;
