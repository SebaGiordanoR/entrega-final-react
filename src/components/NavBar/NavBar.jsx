import style from "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom"


const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white col-md-2 text-center">WICCAT STORE</Link>
                <div className="col-md-9 d-flex align-items-center">
                    <input className="form-control rounded-0" type="search" placeholder="Search" aria-label="Search"></input>
                </div>
                <CartWidget />
            </div>
        </nav>
        <div className="categorias container-fluid d-flex justify-content-center align-items-center">
            <h2 className="border-end text-light fs-4">Categorias</h2>
            <ul className="list-group list-group-horizontal m-1">
                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/velas" className="link-underline link-underline-opacity-0 text-light">Velas</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/piedras" className="link-underline link-underline-opacity-0 text-light">Piedras</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/sahumerios" className="link-underline link-underline-opacity-0 text-light">Sahumerios</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/cartas" className="link-underline link-underline-opacity-0 text-light">cartas</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/pendulos" className="link-underline link-underline-opacity-0 text-light">Pendulos</NavLink></li>

            </ul>
        </div>
        </>
    )   
}

export default NavBar;