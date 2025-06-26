import { Link, useNavigate } from "react-router-dom"

export function Home(){
    const navigate = useNavigate()
    const handlerRedirectLogin = () => {
        // haces todas las validaciones de app antes de redirigir
        navigate('/login')
    }

    return (
        <div>
            Bienvenido al Home...!
            <button 
                className="btn btn-primary" 
                onClick={handlerRedirectLogin}> 
            Login
            </button>

            <Link to="/login" className="btn btn-success">Ir al Login</Link>
        </div>
    )
}