import React, {useEffect, useState} from "react"



const Perfil = () => {

    const [cuentaLikes, setCuentaLikes] = useState(0)

    const handleCuenta = () => {
        setCuentaLikes(cuentaLikes + 1)
    }

    return (
        <>
            <h1>Perfil</h1>
            <button type="type" onClick={handleCuenta}>Dar Like</button>
            <p> Conteo de Likes : {cuentaLikes}</p>
        </>
    )
}

export default Perfil;