import './Socials.css'
import PropTypes from 'prop-types'

const Social = ({link, name, url}) =>{
    return(
        <a className='social' href={link}>
            <img src={url} className='simg'/>
            <p className='name'>{name}</p>
        </a>
    )
}

Social.propTypes = {
    link: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string
}

const Socials = () =>{
    return(
        <div className='socials-display' id="menu">
            <Social
                link="https://twitter.com/duckduckgo"
                name="Twitter"
                url="/twitter.svg"
            />
            <Social
                link="https://reddit.com/r/duckduckgo"
                name="Reddit"
                url="/reddit.svg"
            />
            <Social
                link="https://spreadprivacy.com/"
                name="Blog"
                url="/blog.svg"
            />
            <Social
                link="https://duckduckgo.com/newsletter"
                name="Newsletter"
                url="/newsletter.svg"
            />
        </div>
    )
}

export {Socials}