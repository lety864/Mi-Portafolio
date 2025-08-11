import type { FC } from "react";

import style from './Main.module.scss'
import img from '/proyectos/Portafolio/src/assets/yo2.png';

type Datos = {
    nombre: string;
    roll: string;
    descripcion: string;
}

type MainProps = {
    datos: Datos[];
}

const Main: FC<MainProps> = ({datos}) => {
    return (
        <header className={style.Main}>
            <div className={style.box1}>
                <div className={style.content}>
                    {datos.map((dato) =>(
                        <>
                        <h1 className={style.text}>
                            <p>
                               {dato.nombre}
                            </p>
                        </h1>
                        <h2 className={style.text}>{dato.roll}</h2>
                        <p className={style.text}>{dato.descripcion}</p>
                        </>
                    ))}
                </div>
                <div className={style.foto}>
                    <img src={img} alt="mi foto" />
                </div>
            </div>
        </header>
    );
};

export default Main;