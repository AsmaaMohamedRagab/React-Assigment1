import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg position-fixed w-100">
                <div className="container">
                    <a className="navbar-brand text-white fs-3 " href="#">START FRAMEWORK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <NavLink to="/About" className="nav-link  text-white" aria-current="page" href="#">About</NavLink>
                            <NavLink to="/Portofolio" className="nav-link text-white " href="#">Portofolio</NavLink>
                            <NavLink to="/Contact" className="nav-link text-white " href="#">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}