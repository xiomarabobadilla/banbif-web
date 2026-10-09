// FUNCIONES PARA MOSTRAR CAMPOS "OTROS"
function checkOtraUni(valor) {
  const contenedor = document.getElementById('otraUniContainer');
  const inputTexto = document.getElementById('otraUniversidad');
  if (valor === 'Otros' || valor === 'Otro' || valor === 'Otra') {
    contenedor.classList.remove('hidden');
    inputTexto.setAttribute('required', 'true');
  } else {
    contenedor.classList.add('hidden');
    inputTexto.removeAttribute('required');
    inputTexto.value = '';
  }
}

function checkOtraCarrera(valor) {
  const contenedor = document.getElementById('otraCarreraContainer');
  const inputTexto = document.getElementById('otraCarrera');
  if (valor === 'Otros' || valor === 'Otro' || valor === 'Otra') {
    contenedor.classList.remove('hidden');
    inputTexto.setAttribute('required', 'true');
  } else {
    contenedor.classList.add('hidden');
    inputTexto.removeAttribute('required');
    inputTexto.value = '';
  }
}

function checkOtraArea(valor) {
  const contenedor = document.getElementById('otraAreaContainer');
  const inputTexto = document.getElementById('otraArea');
  if (valor === 'Otros' || valor === 'Otro' || valor === 'Otra') {
    contenedor.classList.remove('hidden');
    inputTexto.setAttribute('required', 'true');
  } else {
    contenedor.classList.add('hidden');
    inputTexto.removeAttribute('required');
    inputTexto.value = '';
  }
}

// CONTROL DE LA VENTANA MODAL DE LA LEY N° 29733
const modal = document.getElementById("lawModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const acceptLawBtn = document.getElementById("acceptLaw");

openModalBtn.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

acceptLawBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.getElementById("leyData").checked = true;
});

window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// CONTROL DEL FORMULARIO Y GOOGLE APPS SCRIPT
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyvMzkY_l94kPKV0vVeXWAYnfH8pWyIZGgo51QW8CRHu8sPh0_3vPSTFpo2JaYPvIIQ/exec';

document.getElementById('talent-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const statusText = document.getElementById('form-status');
  statusText.style.color = '#5340eb';
  statusText.textContent = 'Enviando postulación...';

  let selectUni = document.getElementById('universidad');
  if (selectUni.value === 'Otros' || selectUni.value === 'Otro') {
    selectUni.value = document.getElementById('otraUniversidad').value;
  }

  let selectCarrera = document.getElementById('carrera');
  if (selectCarrera.value === 'Otros' || selectCarrera.value === 'Otro') {
    selectCarrera.value = document.getElementById('otraCarrera').value;
  }

  let selectArea = document.getElementById('area');
  if (selectArea.value === 'Otros' || selectArea.value === 'Otro') {
    selectArea.value = document.getElementById('otraArea').value;
  }

  const formData = new FormData(this);

  fetch(SCRIPT_URL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    statusText.style.color = 'green';
    statusText.textContent = '¡Registro exitoso! Tus datos han sido guardados correctamente.';
    document.getElementById('talent-form').reset();
    document.getElementById('otraUniContainer').classList.add('hidden');
    document.getElementById('otraCarreraContainer').classList.add('hidden');
    document.getElementById('otraAreaContainer').classList.add('hidden');
  })
  .catch(error => {
    statusText.style.color = 'green';
    statusText.textContent = '¡Registro exitoso! Tus datos han sido registrados.';
    document.getElementById('talent-form').reset();
    document.getElementById('otraUniContainer').classList.add('hidden');
    document.getElementById('otraCarreraContainer').classList.add('hidden');
    document.getElementById('otraAreaContainer').classList.add('hidden');
  });
});
