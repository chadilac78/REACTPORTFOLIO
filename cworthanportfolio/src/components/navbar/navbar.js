import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <Link className="navbar-brand" to="/">
                <h1>Chadrick Worthan</h1>
            </Link>
            <div>
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item justify-content-end">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            <h1>About</h1>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            <h1>Portfolio</h1>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                            <h1>Contact Info</h1>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;