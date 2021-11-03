import Header from './components/Header.jsx';
import styled from '@emotion/styled';


const ContenedorFormulario = styled.div`
  background: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <div className="App">
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>

      </ContenedorFormulario>
    </div>
  );
}

export default App;
