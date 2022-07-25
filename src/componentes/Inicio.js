import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"


const Inicio = () => {
    return (
        <>
        <h1>Inicio</h1>
        <div>
            <Link to="/Perfil">Ir a Perfil</Link>
        </div>
        </>
    )
}

export default Inicio;