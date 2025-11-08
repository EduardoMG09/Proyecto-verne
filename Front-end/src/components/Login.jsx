import React, { useEffect, useState } from "react";
import "../styles/Mi-cuenta.css";
import img from "../assets/user.webp";

// Vista única con 3 estados: registro (default), login y perfil
function Login() {
    const [mode, setMode] = useState("register"); // register | login | profile

    // Campos compartidos
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    // Datos del usuario activo (para la vista de perfil)
    const [usuario, setUsuario] = useState(null);

    // Inicialización según lo que haya en localStorage
    useEffect(() => {
        try {
            const activo = localStorage.getItem("usuarioActivo");
            if (activo) {
                const user = JSON.parse(activo);
                setUsuario(user);
                setMode("profile");
                return;
            }
            const credStr = localStorage.getItem("credencialesUsuario");
            if (credStr) {
                const cred = JSON.parse(credStr);
                // Prefill correo para login si existe
                if (cred?.correo) setCorreo(cred.correo);
                setMode("login");
            } else {
                setMode("register");
            }
        } catch (e) {
            // Si algo falla, forzamos a registro
            setMode("register");
        }
    }, []);

    // Registro: guarda credenciales y pasa a login
    const handleRegister = (e) => {
        e.preventDefault();
        if (!nombre.trim() || !correo.trim() || !password.trim()) {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Guardamos las credenciales en localStorage (solo demo/front)
        const credenciales = { nombre: nombre.trim(), correo: correo.trim(), password };
        localStorage.setItem("credencialesUsuario", JSON.stringify(credenciales));

        alert("Registro exitoso. Ahora inicia sesión ✅");
        // Limpiamos contraseña y pasamos a login
        setPassword("");
        setMode("login");
    };

    // Login: valida contra las credenciales guardadas
    const handleLogin = (e) => {
        e.preventDefault();
        if (!correo.trim() || !password.trim()) {
            alert("Ingresa tu correo y contraseña.");
            return;
        }
        const credStr = localStorage.getItem("credencialesUsuario");
        if (!credStr) {
            alert("Aún no hay un registro. Por favor regístrate primero.");
            setMode("register");
            return;
        }
        const cred = JSON.parse(credStr);
        const correoOK = cred.correo === correo.trim();
        const passOK = cred.password === password;
        if (!correoOK || !passOK) {
            alert("Correo o contraseña incorrectos.");
            return;
        }

        const activo = { nombre: cred.nombre, correo: cred.correo };
        localStorage.setItem("usuarioActivo", JSON.stringify(activo));
        setUsuario(activo);
        setMode("profile");
        // Limpiamos campos sensibles
        setPassword("");
    };

    const handleLogout = () => {
        localStorage.removeItem("usuarioActivo");
        setUsuario(null);
        // Si existen credenciales, volvemos a login; si no, a registro
        const hasCreds = !!localStorage.getItem("credencialesUsuario");
        setMode(hasCreds ? "login" : "register");
    };

    return (
        <div className="mi-cuenta">
            
            {mode === "profile" && usuario && (
                <div className="perfil-card" style={{ margin: "0 auto" }}>
                    <h2>Bienvenido</h2>
                    <div className="perfil-contenido">
                    <div className="perfil-datos">
                        <p><strong>Nombre:</strong> {usuario.nombre}</p>
                        <p><strong>Correo:</strong> {usuario.correo}</p>
                    </div>
                    <div className="perfil-foto">
                        <img src={img} alt="Foto de perfil" />
                    </div>
                    </div>
                    <div className="btn-submit" style={{ marginTop: 16 }}>
                        <button className="submit" type="button" onClick={handleLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            )}

            {mode !== "profile" && (
                <div className={mode === "register" ? "sign-side" : "login-side"}>
                    {mode === "register" ? (
                        <form className="sign-up" onSubmit={handleRegister}>
                            <h2>Registrarse</h2>

                            <div className="email-items">
                                <label htmlFor="reg-nombre" className="email-label">
                                    Nombre:
                                </label>
                                <input
                                    type="text"
                                    id="reg-nombre"
                                    name="nombre"
                                    className="email-input"
                                    placeholder="Tu nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="email-items">
                                <label htmlFor="reg-email" className="email-label">
                                    Correo electrónico:
                                </label>
                                <input
                                    type="email"
                                    id="reg-email"
                                    name="email"
                                    className="email-input"
                                    placeholder="tu@correo.com"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="password-items">
                                <label htmlFor="reg-password" className="password-label">
                                    Contraseña:
                                </label>
                                <input
                                    type="password"
                                    id="reg-password"
                                    name="password"
                                    className="password-input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="btn-submit">
                                <button className="submit" type="submit">
                                    Registrarse
                                </button>
                            </div>

                            <div className="switch-auth" style={{ marginTop: 12, textAlign: "center" }}>
                                <small>
                                    ¿Ya tienes cuenta? {" "}
                                    <button
                                        type="button"
                                        onClick={() => setMode("login")}
                                        style={{ background: "transparent", border: "none", color: "#0070f3", cursor: "pointer", padding: 0 }}
                                    >
                                        Inicia sesión
                                    </button>
                                </small>
                            </div>
                        </form>
                    ) : (
                        <form className="login" onSubmit={handleLogin}>
                            <h2>Iniciar Sesión</h2>

                            <div className="email-items">
                                <label htmlFor="log-email" className="email-label">
                                    Correo electrónico:
                                </label>
                                <input
                                    type="email"
                                    id="log-email"
                                    name="email"
                                    className="email-input"
                                    placeholder="tu@correo.com"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="password-items">
                                <label htmlFor="log-password" className="password-label">
                                    Contraseña:
                                </label>
                                <input
                                    type="password"
                                    id="log-password"
                                    name="password"
                                    className="password-input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="btn-submit">
                                <button className="submit" type="submit">
                                    Iniciar sesión
                                </button>
                            </div>

                            <div className="switch-auth" style={{ marginTop: 12, textAlign: "center" }}>
                                <small>
                                    ¿No tienes cuenta? {" "}
                                    <button
                                        type="button"
                                        onClick={() => setMode("register")}
                                        style={{ background: "transparent", border: "none", color: "#0070f3", cursor: "pointer", padding: 0 }}
                                    >
                                        Regístrate
                                    </button>
                                </small>
                            </div>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
}

export default Login;