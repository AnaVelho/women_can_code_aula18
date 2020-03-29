import React from "react";
import "./style.css";

import Perfil from './componentes/perfil';
import Profissional from './componentes/profissional';
import Contatos from './componentes/contatos';
import Experiencia from './componentes/experiencia';


function App() {
  return (
    <main>
      <Perfil />
      <Profissional/>
      <Contatos/>
      <Experiencia/>
     
      
      </main>
  );
}

export default App;
