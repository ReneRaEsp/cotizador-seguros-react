export function calcularDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularCostoPorMarca(marca) {
  let porcentaje = 0;
  if ( marca === 'usa' ) {
    porcentaje = 15;
  } else if ( marca === 'asiatico' ) {
    porcentaje = 5;
  } else if ( marca === 'europeo' ) {
    porcentaje = 30;
  }
  return porcentaje;
}

export function calcularDescuentoPorPlan(plan) {
  let porcentaje = 0;
  if ( plan === 'basico' ) {
    porcentaje = 20;
  } else if ( plan === 'completo' ) {
    porcentaje = 50;
  }

  return porcentaje;
}
