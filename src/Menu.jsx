import './Menu.css'
import {Socials} from './Socials.jsx'



function toggleMenu(){
    let msocials = document.getElementById("menu")
    msocials.classList.toggle("toggle")
}

const Menu = () =>{
    return(
        <div className='menu'>
            <input className='socials'  type='submit' value=" " onClick={toggleMenu}/>
            <Socials/>
            <input className='side' type='submit' value=" "/>
        </div>
    )
}

export {Menu}