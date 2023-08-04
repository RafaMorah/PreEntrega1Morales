function calcularSeguro() {
  let edad = parseInt(document.getElementById('edad').value);
  let plan = document.getElementById('plan').value;
  let diasViaje = parseInt(document.getElementById('dias').value);

  if (diasViaje < 1 || diasViaje > 365) {
    alert('Por favor, ingresa una cantidad de días válida (entre 1 y 365).');
    return;
  }

  let costoSeguro = obtenerCostoSeguro(edad, plan, diasViaje);

  if (costoSeguro === null) {
    alert('Lo sentimos, no podemos proporcionar cobertura para viajeros mayores de 85 años.');
    return;
  }

  mostrarResultado(costoSeguro);
}

function obtenerCostoSeguro(edad, plan, diasViaje) {
  var costoBase;
  if (edad >= 0 && edad <= 11) {
    costoBase = plan === 'basico' ? 50 : plan === 'estandar' ? 75 : 100;
  } else if (edad >= 12 && edad <= 65) {
    costoBase = plan === 'basico' ? 100 : plan === 'estandar' ? 150 : 200;
  } else if (edad >= 66 && edad <= 75) {
    costoBase = plan === 'basico' ? 200 : plan === 'estandar' ? 300 : 400;
  } else if (edad >= 76 && edad <= 85) {
    costoBase = plan === 'basico' ? 400 : plan === 'estandar' ? 600 : 800;
  } else {
    return null;
  }

  // Aumentar el costo del seguro en 2 dólares por día después de los primeros 3 días.
  let diasAdicionales = Math.max(diasViaje - 3, 0);
  let costoSeguro = costoBase + diasAdicionales * 2;

  return costoSeguro;
}

function mostrarResultado(costoSeguro) {
  document.getElementById('resultado').innerHTML = 'El costo del seguro de viaje es: $' + costoSeguro;
}