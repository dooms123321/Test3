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
  let imagenPizza = '';  // Variable para la imagen

  // Calcular el precio base según el tipo de pizza y asignar la imagen
  switch (tipo) {
    case 'queso':
      precioBase = 30;
      imagenPizza = 'imagen/queso.jpg'; // Ruta de la imagen
      break;
    case 'carne':
      precioBase = 50;
      imagenPizza = 'imagen/cinco.jpg'; // Ruta de la imagen
      break;
    case 'jamon':
      precioBase = 40;
      imagenPizza = 'imagen/jamon.jpg'; // Ruta de la imagen
      break;
    case 'peperoni':
      precioBase = 45;
      imagenPizza = 'imagen/peperoni.jpg'; // Ruta de la imagen
      break;
    case 'hawaina':
      precioBase = 35;
      imagenPizza = 'imagen/piña.jpg'; // Ruta de la imagen
      break;
    default:
      precioBase = 30;
      imagenPizza = 'imagen/queso.jpg'; // Ruta de la imagen por defecto
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

  // Mostrar la factura con la imagen de la pizza
  const factura = document.getElementById('factura');
  factura.innerHTML = `
    <p><strong>Cliente:</strong> ${nombre}</p>
    <p><strong>Tipo de Pizza:</strong> ${tipo}</p>
    <p><img src="${imagenPizza}" alt="Pizza de ${tipo}" style="width: 200px; height: auto; border-radius: 8px;"></p>  <!-- Imagen de la pizza -->
    <p><strong>Tamaño:</strong> ${tamano}</p>
    <p><strong>Extras:</strong> ${extras.salami ? 'Salami' : ''} ${extras.tocino ? 'Tocino' : ''} ${extras.queso ? 'Queso Extra' : ''} ${extras.cebolla ? 'Cebolla' : ''}</p>
    <p><strong>Total: $${total.toFixed(2)}</strong></p>
  `;
}
