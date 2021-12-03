import React, { useState } from 'react'
import './Register.css'

export const Register = () => {
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        rol:'',
    })
    const handdleChange = (target) =>{
        setUsuario(
            {...usuario,[target.name]:target.value
            }
        )
    }

    const registrar = () =>{

    }

    return (


        <div className="regForm">
            <input required type="text" placeholder="Nombre" name="nombre" onChange={(e) => handdleChange(e.target)} />
            <input required type="email" placeholder="Email" name="email"  onChange={(e) => handdleChange(e.target)} />
            <input required type="password" placeholder="Contraseña" name="password"  onChange={(e) => handdleChange(e.target)} />
            <select name="rol" required onChange={(e) => handdleChange(e.target)}>
                <option disabled selected>Seleccione una opcion</option>
                <option value="admin"> Administrador </option >
                <option value="user"> Usuario </option>
            </select>
            <button onClick="" >Registrar</button>
        </div>
    )
}
