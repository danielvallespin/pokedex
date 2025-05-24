import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Cabecera.css'
import { useState } from 'react';
import NavItem from '../navItem/NavItem';

function Cabecera() {

    const POKEMONS = 'Pokémons';
    const GITHUB = 'Github';

    const [activo, setActivo] = useState(POKEMONS);

    const cambioActivo = function(navItem){
        console.log(navItem)
    }

    return (
        <nav className="navbar navbar-expand-lg ps-5 py-3" id='cabecera'>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-auto'>
                        <button
                            id='btn-hamburguesa'
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span id='rayas-hamburguesa' className="navbar-toggler-icon text-white"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav d-flex gap-4 pt-4 pt-lg-0">
                                <NavItem nombre={POKEMONS} activo={activo} setActivo={setActivo}/>
                                <NavItem nombre={GITHUB} activo={activo} setActivo={setActivo}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Cabecera;