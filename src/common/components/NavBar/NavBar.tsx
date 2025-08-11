import type { FC } from "react";

import style from './NavBar.module.scss';
import { Link } from "react-router-dom";

const NavBar: FC = () => {
    return(
        <nav className={style.NavBar}>
            <Link className={style.box1} to="/">Inicio</Link>
            <Link className={style.box1} to="/projects">Proyectos</Link>
            <Link className={style.box1} to="/certificates">Certificados</Link>
        </nav>
    );
};

export default NavBar;