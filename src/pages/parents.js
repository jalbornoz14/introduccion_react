import { useState } from "react"
import { Notification } from "../components/notification"

export function Parents(){

    const [contador, setContador] = useState(0)

    const title = "Noticia del Perú"
    // consulta a base datos
    const description = "Información de la noticia que pasó en el Perú"

    const handlerContador = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <h1>Relación entre componentes</h1>
            <button onClick={handlerContador}>Contador</button>
            <Notification title={title} description={description} contador={contador}/>
        </div>
    )
}