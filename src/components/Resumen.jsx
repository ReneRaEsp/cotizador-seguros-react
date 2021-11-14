import { Fragment } from "react";

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;

  return (
    <Fragment>
      <h2> Resumen de Cotización </h2>
      <p>Marca: {marca} </p>
      <p>Year: {year} </p>
      <p>Plan: {plan} </p>
    </Fragment>
  );
};

export default Resumen;
