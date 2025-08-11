import type { FC } from "react";

import { projects } from "../../models/proyectos";
import CardProject from "../../components/CardProject";

import style from './Proyectos.module.scss';

const Proyectos: FC = () => {
    return(
        <>
        <div className={style.box}>
            <h1>
                <p>Mis Proyectos</p>
            </h1>
            <p>Aqui podras ver los proyectos que he realizado</p>
            <div className={style.box1}>
                {projects.map((p) =>(
                    <CardProject key={p.title}
                    title={p.title}
                    descripcion={p.Descripcion}
                    repolink={p.repoLink}
                    demolink={p.demolink}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default Proyectos;