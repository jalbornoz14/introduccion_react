export function Notification(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span>Contador: {props.contador}</span>
        </div>
    )
}