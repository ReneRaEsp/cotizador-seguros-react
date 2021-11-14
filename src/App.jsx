import { useState } from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import Resumen from "./components/Resumen.jsx";
import Resultado from "./components/Resultado.jsx";

import styled from "@emotion/styled";

const ContenedorFormulario = styled.div`
  background: #fff;
  padding: 3rem;
`;

const Contenedor = styled.div`
  width: 50%;
  align-self: center;
  margin: auto;
  margin-top: 2rem;
`;

function App() {
  const [resumen, guardarResumen] = useState(
    {
      resultado: 0,
      datos: {
        marca: '',
        year: '',
        plan: ''
      }
    }
  );

  const { datos, resultado } = resumen;
  
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
        <Resultado resultado={resultado} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
