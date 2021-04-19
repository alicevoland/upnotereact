import {NavLink} from 'react-router-dom';
import {getToken} from "../../service/token";


function Navbar(props) {
    let links = [
        <NavLink key="home" className="nav-item nav-link" to="/"> Accueil </NavLink>,
    ]

    if (getToken()) {
        links.push(<NavLink key="dashboard" className="nav-item nav-link" to="/dashboard"> Mes notes </NavLink>)
        links.push(<NavLink key="logout" className="nav-item nav-link" to="/logout"> Déconnexion </NavLink>)
    } else {
        links.push(<NavLink key="login" className="nav-item nav-link" to="/login"> Connexion/Inscription </NavLink>)
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"> Covid 19 React UI </a>
                {links}
            </div>
        </nav>
    )
}

export default Navbar;
