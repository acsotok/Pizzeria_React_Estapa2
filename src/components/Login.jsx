import { useState } from "react"


const Login = () => {

    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)

    
    
    const validarLogin = (e) => {
        e.preventDefault();

        if(email !== "desafio@latam.cl"){
            setError3(true);
            return
        }
        
        if (!email.trim() || !contraseña.trim()){
            setError(true);
            return
        } 
        if (validarLength(`password`, contraseña, 6)) 
            return

        if(contraseña !== "123456"){
            setError2(true);
            return;
        }

        setError(false);
        setError2(false)
        setEmail("")
        setContraseña("")
        alert("Login exitoso")
    }

    const validarLength = (contraseña, value, long) => {
        if (value.length < long){
            alert(`El ${contraseña} debe tener al menos ${long} caracteres`)
            return true;
        }
        return false;
    }

    return(
        <>
            <h3>Login</h3>
            <form className="formularioLogin" onSubmit={validarLogin}>
            {error ? <p>Todos los campos son obligatorios</p> : null}
            {error2 ? <p>Contraseña incorrecta, inténtalo de nuevo</p> : null}
            {error3 ? <p>Email incorrecto, inténtalo de nuevo</p> : null}

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="text"
                        name = "email"
                        className="form-control"
                        placeholder="Ingresa tu email"
                        onChange={(e) => (setEmail(e.target.value))}
                        value={email}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password"
                        name = "contraseña"
                        className="form-control"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => (setContraseña(e.target.value))}
                        value={contraseña}
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </>
    )
}

export default Login