import './Pokedex.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from '../../clases/Pokemon';
import CardPokemon from '../cardPokemon/CardPokemon';

function Pokedex(props) {

    const [pokeLista, setPokeLista] = useState([]);

    const MAX_POKEMONS = 1025;
    const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

    useEffect(() => {
        //Obtener todos los pokemons y meterlos en una lista
        const getPokemons = async function () {
            let listaPokemons = [];
            for (let pokeId = 1; pokeId <= MAX_POKEMONS; pokeId++) {
                const pokeRespuesta = await fetch(URL_BASE + pokeId);
                if (!pokeRespuesta.ok) {
                    continue;
                } else {
                    const pokemon = await pokeRespuesta.json();
                    const imgPrincipal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`;
                    const spriteFrontal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
                    const spriteReverso = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`;

                    listaPokemons.push(new Pokemon(pokeId,
                        pokemon.name,
                        pokemon.types[0].type.name,
                        imgPrincipal,
                        spriteFrontal,
                        spriteReverso,
                        []
                    ));
                }
            }

            setPokeLista(listaPokemons);
            props.setCargando(false);
            console.log(pokeLista);
        }

        getPokemons();
    }, [])

    return (
        <>
            {!props.cargando && (
                <div className="container-fluid">
                    <div id='pokedex-container'>
                        <div className='row' id="pokedex-header">
                            <div id='iconos-pokedex' className="col-12 col-md-8">
                                <div id="circulo"></div>
                                <div id="luces">
                                    <span className='luz' id="azul"></span>
                                    <span className='luz' id="amarillo"></span>
                                    <span className='luz' id="verde"></span>
                                </div>
                            </div>
                            <div id='titulo-container' className='col-12 col-md-4'>
                                <h1>Pokédex de Dani</h1>
                            </div>
                        </div>

                        <div id='pokedex-overlay'>
                            <div id='marco'>
                                <div className='row gap-4 pt-3 justify-content-center px-4' id="pokedex-pantalla">
                                    {pokeLista.map((pokemon, index) => (
                                        <CardPokemon
                                            key={index}
                                            id={pokemon.getId()}
                                            nombre={pokemon.nombre}
                                            img={pokemon.imgPrincipal}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}

export default Pokedex;