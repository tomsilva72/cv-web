import React from 'react';
import { Link } from 'react-scroll';
import '../estilos/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="acerca" smooth={true} duration={600} offset={-70}>
                        Sobre mí
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={600} offset={-70}>
                        Habilidades
                    </Link>
                </li>
                <li>
                    <Link to="experiencia" smooth={true} duration={600} offset={-70}>
                        Experiencia
                    </Link>
                </li>
                <li>
                    <Link to="proyectos" smooth={true} duration={600} offset={-70}>
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link to="contacto" smooth={true} duration={600} offset={-70}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;