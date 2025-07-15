import React from "react";
import "../styles/Mi-cuenta.css";

function Login(){
    return(
        <div className="mi-cuenta">
            <div className="titulo-micuenta">
                <div className="titulo-cuenta">
                    Mi cuenta
                </div>
            </div>
            <div className="login-side">
                <form action="" className="login">
                    <h2>Iniciar Sesión</h2>
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