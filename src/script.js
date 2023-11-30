function select(tag){
  const val = document.querySelector(tag)
  return val
}

function updateTag(tag, contenido){
  const mi_tag = select(tag)
  mi_tag.innerHTML = contenido
}
function updateHour(){
// const fecha = new Date()
// const horas = fecha.getHours()
// const minutos = fecha.getMinutes()
// const segundos = fecha.getSeconds()
  
const now = new Date();

const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
const [hora, minuto, segundo] = horaEnFormato24Horas.split(":")

updateTag("#horas", hora)
updateTag("#minutos", minuto)
updateTag("#segundos", segundo)
}

function copiarAlPortapapeles(texto) {
  const elementoTemporal = document.createElement('textarea');
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  document.execCommand('copy');
  document.body.removeChild(elementoTemporal);
}

const reloj = select("#reloj");
reloj.addEventListener('click', function () {
  const textoReloj = reloj.textContent;
  copiarAlPortapapeles(textoReloj);
  alert('Texto del reloj copiado al portapapeles');
});

setInterval(updateHour,500)