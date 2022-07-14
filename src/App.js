import React, {useEffect, useState} from "react"
import { Routes, Route, Link} from "react-router-dom"
import Inicio from "./componentes/Inicio"
import Perfil from "./componentes/Perfil"


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
    )
}

export default App;
