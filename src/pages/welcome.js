import { useEffect, useState } from "react"

export function Welcome() {

    // const [pokemons, setPokemons] = useState([])
    const [name, setName] = useState('')
    const [pokemon, setPokemon] = useState({})

    const handlerFind = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + name)
            .then(reponse => reponse.json())
            .then(data => {
                setPokemon(data)
            })

    }

    // array => []
    // objeto => {}

    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(reponse => reponse.json())
    //         .then(data => {
    //             setPokemons(data.results)
    //         })
    // }, []);


    return (
        <div>
            <input
                type="type"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />

            <input type="button" onClick={handlerFind} value="Buscar" />

            {
                pokemon.sprites ? <img src={pokemon?.sprites?.front_default} /> : <span>No hay imagen</span>
            }

        </div>
    )
}