import "./Cards.css"
import PropTypes from 'prop-types'

const Card = ({path, title, text}) =>{
    return(
        <div className="card">
            <img src={path} className="icard"></img>
            <div className="c_title">{title}</div>
            <div className="c_text">{text}</div>
        </div>
    )
}

Card.propTypes = {
    path : PropTypes.string,
    title : PropTypes.string,
    text : PropTypes.string
}

const Cards = () =>{
    return(
        <div className="cards">
            <Card
                path="https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg"
                title="Extensión de Navegador Privada"
                text="Navega como siempre y nosotros nos encargamos del resto. 
                Te ofrecemos buscador, bloqueador de rastreadores y mejora de 
                encriptación todo en una descarga, para los principales navegadores."
            />
            <Card
                path="/searchi.svg"
                title="Motor de Búsqueda Privada"
                text="Busca de forma privada con nuestra app o extensión, 
                añade búsqueda web privada a tu navegador preferido o busca 
                en duckduckgo.com."
            />
            <Card
                path="/mobile.svg"
                title="Navegador Privado"
                text="Nuestro navegador privado para móviles viene equipado 
                con nuestro motor de búsqueda, bloqueador de rastreadores, mejora 
                de encriptación y más. Disponible para iOS y Android."
            />
        </div>
    )
}

export {Cards}