import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Mi-cuenta.css";

function Login(){
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !contraseña.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Guardamos datos en localStorage
    localStorage.setItem("usuario", JSON.stringify({ nombre, correo }));

    alert("Datos guardados correctamente ✅");
    navigate("/productos"); // Redirige a la página de libros
    };

    return(
        <div className="mi-cuenta">
            <div className="titulo-micuenta">
                <div className="titulo-cuenta">
                    Mi cuenta
                </div>
            </div>
            <div className="login-side">
                <form action="" className="login" onSubmit={handleSubmit}>
                    <h2>Iniciar Sesión</h2>
                    <div className="email-items">
                        <label htmlFor="email" name="email" className="email-label">Correo electrónico:</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="correo" 
                        className="email-input" 
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required />
                    </div>
                    
                    <div className="email-items">
                        <label htmlFor="email" name="email" className="email-label">Correo electrónico:</label>
                        <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        className="email-input" 
                        placeholder="nombre" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required />
                    </div>

                    <div className="password-items">
                        <label htmlFor="password" name="password" className="password-label">Contraseña:</label>
                        <input 
                        type="password" 
                        id="password" 
                        placeholder="contraseña" 
                        name="password" 
                        className="password-input" 
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        
                        required />
                    </div>
                    
                    <div className="btn-submit">
                        <button 
                        className="submit" 
                        type="submit"
                        >Iniciar sesión</button>
                    </div>
                </form>
            </div>
            <div className="sign-side">
                <form action="" className="sign-up">
                    <h2>Registrarse</h2>
                    <div className="email-items">
                        <label htmlFor="email" name="email" className="email-label">Correo electrónico:</label>
                        <input type="email" id="email" name="email" className="email-input" required />
                    </div>
                    
                    <div className="password-items">
                        <label htmlFor="password" name="password" className="password-label">Contraseña:</label>
                        <input type="password" id="password" name="password" className="password-input" required />
                    </div>
                    <div className="btn-submit">
                        <button className="submit" type="submit">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;