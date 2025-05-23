import './CardPokemon.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CardPokemon(props){

    const id = props.id;
    const nombre = props.nombre;
    const img = props.img;

    return (
        <div className="poke-container col-6 col-sm-4 col-md-3 col-lg-2 px-2">
            <div className="img-container">
                <img src={img} alt={nombre} />
            </div>
            <div className="buttons">
                <div className="bola red"></div>
                <div className="bola yellow"></div>
                <div className="bola green"></div>
            </div>
        </div>
    );

}

export default CardPokemon;