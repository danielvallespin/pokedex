import './CargaPokeball.css'

function CargaPokeball(props){

    return (
        <>
            {props.cargando && (
                <div className="loader">
                    <div className="pokeball"></div>
                    <div id='cargando-pokeball'>
                        <span id='cargando'>Cargando<span id="puntos"></span></span>
                        <span id='cargando-info'>Esto puede tardar un poco</span>
                        <span id='primeravez-aviso'>(Sobretodo la primera vez)</span>
                    </div>
                </div>
            )}
        </>
    )

}

export default CargaPokeball;