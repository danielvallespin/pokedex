import './NavItem.css'

function NavItem(props){

    const nombre = props.nombre;

    return (
        <li className="nav-item" id={props.activo === nombre ? 'selecionado':''} onClick={() => props.setActivo(nombre)}>
            <a className="nav-link" href="#">{nombre}</a>
        </li>
    );
}

export default NavItem;