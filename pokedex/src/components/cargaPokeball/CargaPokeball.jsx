import './CargaPokeball.css'

function CargaPokeball(props){

    return (
        <>
            {props.cargando && (
                <div className="loader">
                    <div className="pokeball"></div>
                    <div id='cargando-pokeball'>
                        <span>Cargando<span id="puntos"></span></span>
                    </div>
                </div>
            )}
        </>
    )

}

export default CargaPokeball;