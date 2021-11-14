import { Fragment } from "react";


const Resultado = ({ resultado }) => {
  
  if ( resultado === 0 ) return null;

  return(
    <Fragment>
      <h3>Presupuesto: { resultado } </h3>
    </Fragment>
  );
}

export default Resultado; 
