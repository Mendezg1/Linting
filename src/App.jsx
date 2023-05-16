import './App.css'
import {Search} from "./Search.jsx"
import {ButtonAdd} from "./ButtonAdd.jsx"
import {Cards} from "./Cards.jsx"
import {ButtonInstall} from "./ButtonInstall.jsx"
import {Menu} from "./Menu.jsx"

function App() {

  return (
    <div className="App">

      <div className="sidebar"></div>

      <div className='arriba'>
        <Menu/>
        <div>
          <a>
            <img src="/duckduckgologo.svg" className="logo" alt="Vite logo" />
          </a>
        </div>
        
        <h2 className='title'>DuckDuckGo</h2>

        <Search/>

        <p className='text2'>¿Cansado de que te rastreen? Podemos ayudarte.</p>

        <p className='text3'>No almacenamos información personal. No te perseguimos con</p>
        <p className='text4'>anuncios. No te rastreamos. Nunca.</p>

        <ButtonAdd/>

        <p className='text5'>¡Con la confianza de decenas de millones de personas en todo el mundo!</p>

        <p className='text6'>Protección de la Privacidad para Cualquier Dispositivo</p>
      </div>

      <div className='abajo'>
        <div className='curva'></div>
        <Cards/>

        <p className='text7'>No guardamos tu información <br></br> personal. Y nunca lo haremos.</p>
        <p className='text8'>Nuestra política de privacidad es simple: No colectamos <br></br> o compartimos ninguna información personal tuya.</p>
        <ButtonInstall/>
        <img src="/bottom.svg" className='bottom'></img>
      </div>

    </div>
  )
}

export default App
