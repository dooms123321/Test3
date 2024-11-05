function calcularPrecio() {
  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const tipo = document.getElementById('tipo').value;
  const tamano = document.querySelector('input[name="tamano"]:checked').value;
  const extras = {
    salami: document.getElementById('salami').checked,
    tocino: document.getElementById('tocino').checked,
    queso: document.getElementById('queso').checked,
    cebolla: document.getElementById('cebolla').checked,
  };

  // Variables para el cálculo
  let precioBase = 0;
  let precioTamaño = 0;
  let precioExtras = 0;

  // Calcular el precio base según el tipo de pizza
  switch (tipo) {
    case 'queso':
      precioBase = 30;
      break;
    case 'carne':
      precioBase = 50;
      break;
    case 'jamon':
      precioBase = 40;
      break;
    case 'peperoni':
      precioBase = 45;
      break;
    case 'hawaina':
      precioBase = 35;
      break;
    default:
      precioBase = 30;
      break;
  }

  // Calcular el precio según el tamaño de la pizza
  switch (tamano) {
    case 'Pequeña':
      precioTamaño = 0;
      break;
    case 'Mediana':
      precioTamaño = 5;
      break;
    case 'Grande':
      precioTamaño = 10;
      break;
    default:
      precioTamaño = 0;
      break;
  }

  // Calcular el precio de los extras
  if (extras.salami) precioExtras += 5;
  if (extras.tocino) precioExtras += 5;
  if (extras.queso) precioExtras += 5;
  if (extras.cebolla) precioExtras += 5;

  // Calcular el precio total
  const total = precioBase + precioTamaño + precioExtras;

  // Mostrar la factura
  const factura = document.getElementById('factura');
  factura.innerHTML = `
        <p>Cliente: ${nombre}</p>
        <p>Tipo de Pizza: ${tipo}</p>
        <p>Tamaño: ${tamano}</p>
        <p>Extras: ${extras.salami ? 'Salami' : ''} ${extras.tocino ? 'Tocino' : ''} ${
    extras.queso ? 'Queso Extra' : ''
  } ${extras.cebolla ? 'Cebolla' : ''}</p>
        <p><strong>Total: $${total.toFixed(2)}</strong></p>
    `;
}
