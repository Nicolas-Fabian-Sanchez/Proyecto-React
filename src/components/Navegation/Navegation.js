import {Link} from "react-router-dom";
import './Navegation.css';
export default function Navegation() {
    return(
       <header>
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
                <div className="conteiner-fluid">
                    <a className="navbar-brand">Rick & Morty </a>
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item"> 
                            <Link to="/" className="nav-link boton" >Home</Link>  
                        </li>
                        <li className="nav-item">
                            <Link to="/characters" className="nav-link boton">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact"className="nav-link boton" >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
       </header>
    )
}
