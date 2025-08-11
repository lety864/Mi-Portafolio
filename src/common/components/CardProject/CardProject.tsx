import type { FC } from "react";

import style from './CardProject.module.scss'

type CardProps = {
    title: string;
    descripcion: string;
    repolink: string;
    demolink: string;
}

const CardProject: FC<CardProps> = ({
    title,
    descripcion,
    repolink,
    demolink
}) => {
    return (
        <div className={style.card}>
            <h3>Proyecto : {title}</h3>
            <h4>Descripcion</h4>
            <p>{descripcion}</p>
            <div className={style.botonBox}>
                <button 
                className={style.boton}
                onClick={() => window.open(repolink)}
                >ver codigo</button>
                {demolink && (
                    <button
                    className={style.boton} 
                    onClick={() => window.open(demolink)}
                    disabled={!demolink}
                    >ver pagina</button>
                )}
            </div>
        </div>
    );

};

export default CardProject;