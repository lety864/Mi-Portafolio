import type { FC } from "react";

import style from './Certificados.module.scss'

type Certificate = {
  image: string;
  link: string; 
  titulo: string; 
}

type Props = {
  certificates: Certificate[];
}

const Certificados: FC<Props> = ({certificates}) => {

    return(
    <>
        <div className={style.container}>
            <h1>
                <p>Mis Certificados</p>
            </h1>
            <div className={style.carousel}>
                {certificates.map((cert, index) => (
                    <div
                    key={index}
                    className={style.item}
                    onClick={() => window.open(cert.link, "_blank")}
                    >
                    <img src={cert.image} alt={`Certificado ${index + 1}`} />
                    <div>
                        <p>{cert.titulo}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default Certificados;