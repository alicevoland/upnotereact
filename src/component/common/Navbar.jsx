import {NavLink} from 'react-router-dom';



function Navbar(props) {
    let links = [
        <NavLink key="home" className="nav-item nav-link" to="/"> Accueil </NavLink>,
        <NavLink key="locality" className="nav-item nav-link" to="/locality"> Départements </NavLink>,
        <NavLink key="icadminreg" className="nav-item nav-link" to="/regionalIntensiveCareAdmissions"> Admissions Réa par
            région </NavLink>,
    ]
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
