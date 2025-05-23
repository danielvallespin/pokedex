import './Pokedex.css';
import { useState, useEffect } from 'react';
import Pokemon from '../../clases/Pokemon';
import CardPokemon from '../cardPokemon/CardPokemon';
import Cabecera from '../cabecera/Cabecera';

function Pokedex(props){

    const [pokeLista, setPokeLista] = useState([]);

    const MAX_POKEMONS = 1025;
    const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

    useEffect(()=>{
        //Obtener todos los pokemons y meterlos en una lista
        const getPokemons = async function() {
            let listaPokemons = [];
            for (let pokeId=1; pokeId<=MAX_POKEMONS; pokeId++){
                const pokeRespuesta = await fetch(URL_BASE + pokeId);
                if (!pokeRespuesta.ok){
                    continue;
                } else{
                    const pokemon = await pokeRespuesta.json();
                    const imgPrincipal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`;
                    const spriteFrontal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
                    const spriteReverso = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`;

                    listaPokemons.push(new Pokemon( pokeId, 
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
                    <div className="row">
                        <div className="col-12">
                            <Cabecera />
                        </div>
                    </div>
                    <div className="row" id='pokedex-container'>
                        <div className="col-12" id="pokedex-overlay">
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
            )}
        </>
    );

}

export default Pokedex;