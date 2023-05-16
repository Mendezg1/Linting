import React from "react"
import "./Search.css"

const Search = () => {
    return(
        <div>
            <form className="inputsearchForm">
                <input className="input" placeholder="Busca en la red sin que te rastreen" type="text" tabIndex={1}>
                </input>

                <input className="button" type="submit" tabIndex={2} value=" "></input>
            </form>
        </div>
    )
}

export {Search}

