import { useState } from "react";
import styled from "@emotion/styled";
import { calcularDiferenciaYear, calcularCostoPorMarca, calcularDescuentoPorPlan } from './../helpers/seguro.js';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const Select = styled.select`
  width: 60%;
  height: 2rem;
  border: none;
  background: rgba(72, 190, 200, 0.47);
  border-radius: 3px;
`;

const Boton = styled.button`
  width: 100%;
  background: rgba(12, 200, 163, 0.9);
  height: 2rem;
  border: none;
  cursor: pointer;
  margin: auto;
  color: white;
  font-weight: bold;
  transition: 1s;
  &:hover {
    background: rgb(40, 160, 140);
    border-radius: 10px;
  }
`;

const Error = styled.p`
    color: red;
`;

const Total = styled.p`
    display: flex;
    justify-content: center;
    align-self: center;
    font-weight: bold;
    padding-top: 1rem;
    height: 2rem;
    width: 100%;
    border: 2px solid rgb(40, 160, 140);
    color: rgb(40, 160, 140);
`;

const Formulario = ( { guardarResumen } ) => {
  // States
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [ error, guardarError ] = useState(false);
  const [ presupuestoCalculado, guardarPresupuestoCalculado ] = useState(false);
  const [ total, guardarTotal ] = useState(0);

  // Extraer los valores del state
  const { marca, year, plan } = datos;

  // Leer los datos del formulario y colocarlos en el state
  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  // Funcion de cotizar seguro llamada al hacer submit
  const cotizarSeguro = e => {
    e.preventDefault();

    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '' ){
      guardarError(true);
      return;
    }
    guardarError(false);
    let costo = 2000;

    // obtener la diferencia de años
    const diferenciaAnual = calcularDiferenciaYear(datos.year);
    let porcentajePorDiferenciaAnual = diferenciaAnual * 3;

    // por cada año hay que sumar 3%
    costo = costo + (costo * porcentajePorDiferenciaAnual / 100);
    console.log(costo);

    // USA 15%
    // Asiatico 5%
    // Europeo 30%
    let porcentajePorMarca = calcularCostoPorMarca(datos.marca);
    costo = costo + ( costo * porcentajePorMarca / 100 ); 
console.log(costo);

    // Basico aumenta 20%
    // Completo 50%
    let porcentajePorPlan = calcularDescuentoPorPlan(datos.plan);
    costo = costo + ( costo * porcentajePorPlan / 100 );
    // Total

    guardarTotal(costo);
    guardarResumen({
      resultado: costo,
      datos
    });
    guardarPresupuestoCalculado(true);
  }

  return (
    <form onSubmit={ cotizarSeguro } >
      <Campo>
        <label> Marca: </label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="usa"> USA </option>
          <option value="europeo"> Europeo </option>
          <option value="asiatico"> Asiatico </option>
        </Select>
      </Campo>
      <Campo>
        <label> Año: </label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021"> 2021 </option>
          <option value="2020"> 2020 </option>
          <option value="2019"> 2019 </option>
          <option value="2018"> 2018 </option>
          <option value="2017"> 2017 </option>
          <option value="2016"> 2016 </option>
          <option value="2015"> 2015 </option>
          <option value="2014"> 2014 </option>
          <option value="2013"> 2013 </option>
          <option value="2012"> 2012 </option>
          <option value="2011"> 2011 </option>
          <option value="2010"> 2010 </option>
        </Select>
      </Campo>

      <Campo>
        <label> Plan: </label> <br />
        <input
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Basico
        <input
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />
        Completo
      </Campo>
      { error ? <Error> Debe llenar todos los campos </Error> : null }
      <Boton type="submit"> Cotizar </Boton>

      { presupuestoCalculado ?<Total> Su presupuesto es de { total } </Total> : null }

    </form>
  );
};

export default Formulario;
