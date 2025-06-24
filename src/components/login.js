import { useState } from "react"

export const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const verifyUser = () =>{
        if (!user && !password || user != 'admin' && password != '123456' ) {
            alert('informacion incorrecta')
        }
        alert('Bienvenido')
        return
    }

    return (
        <div className="">
            <label className="form-label" for="user">Usuario</label>
            <input 
                className="form-control" 
                type="text" 
                id="user" 
                name="user" 
                value={user}
                onChange={(e)=>{setUser(e.target.value)}} />

            <label className="form-label" for="pass">Password</label>
            <input 
                className="form-control" 
                type="password" 
                id="pass" 
                name="pass" 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}} />

            <input 
            className="btn btn-primary" 
            type="button" 
            value="Iniciar Session" 
            onClick={verifyUser} 
            />
        </div>
    )
}