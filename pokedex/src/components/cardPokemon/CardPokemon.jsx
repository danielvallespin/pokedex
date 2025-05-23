import './CardPokemon.css'

function CardPokemon(props){

    const id = props.id;
    const nombre = props.nombre;
    const img = props.img;

    return (
        <div className="poke-container">
            <div className="img-container">
                <img src={img} alt={nombre} />
            </div>
            <div className="buttons">
                <div className="btn red"></div>
                <div className="btn yellow"></div>
                <div className="btn green"></div>
            </div>
        </div>
    );

}

export default CardPokemon;