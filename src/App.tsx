import type { FC } from "react"
import { Route, Routes } from "react-router-dom";

import Main from "./common/pages/Main";
import Proyectos from "./common/pages/Proyectos";
import Certificados from "./common/pages/Certificados";
import { certificados } from "./common/models/certificados";
import { datos } from "./common/models/cardMain";

const App: FC = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main datos={datos}/>}/>
      <Route path="/projects" element={<Proyectos />}/>
      <Route path="/certificates" element={<Certificados certificates={certificados}/>}/>
    </Routes>
    </>
  );
};

export default App
