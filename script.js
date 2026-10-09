document.addEventListener("DOMContentLoaded", function () {
  
  // LOGICA CAMPOS "OTROS"
  const uniSelect = document.getElementById('universidad');
  const otraUniContainer = document.getElementById('otraUniContainer');
  const otraUniInput = document.getElementById('otraUniversidad');

  if (uniSelect) {
    uniSelect.addEventListener('change', function () {
      if (this.value === 'Otros') {
        otraUniContainer.classList.remove('hidden');
        otraUniInput.setAttribute('required', 'true');
      } else {
        otraUniContainer.classList.add('hidden');
        otraUniInput.removeAttribute('required');
        otraUniInput.value = '';
      }
    });
  }

  const carreraSelect = document.getElementById('carrera');
  const otraCarreraContainer = document.getElementById('otraCarreraContainer');
  const otraCarreraInput = document.getElementById('otraCarrera');

  if (carreraSelect) {
    carreraSelect.addEventListener('change', function () {
      if (this.value === 'Otros') {
        otraCarreraContainer.classList.remove('hidden');
        otraCarreraInput.setAttribute('required', 'true');
      } else {
        otraCarreraContainer.classList.add('hidden');
        otraCarreraInput.removeAttribute('required');
        otraCarreraInput.value = '';
      }
    });
  }

  const areaSelect = document.getElementById('area');
  const otraAreaContainer = document.getElementById('otraAreaContainer');
  const otraAreaInput = document.getElementById('otraArea');

  if (areaSelect) {
    areaSelect.addEventListener('change', function () {
      if (this.value === 'Otros') {
        otraAreaContainer.classList.remove('hidden');
        otraAreaInput.setAttribute('required', 'true');
      } else {
        otraAreaContainer.classList.add('hidden');
        otraAreaInput.removeAttribute('required');
        otraAreaInput.value = '';
      }
    });
  }

  // MODAL LEY
  const modal = document.getElementById("lawModal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const acceptLawBtn = document.getElementById("acceptLaw");

  if (openModalBtn) {
    openModalBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  if (acceptLawBtn) {
    acceptLawBtn.addEventListener("click", function () {
      modal.style.display = "none";
      document.getElementById("leyData").checked = true;
    });
  }

  // ENVÍO FORMULARIO
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyvMzkY_l94kPKV0vVeXWAYnfH8pWyIZGgo51QW8CRHu8sPh0_3vPSTFpo2JaYPvIIQ/exec';
  const talentForm = document.getElementById('talent-form');

  if (talentForm) {
    talentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const statusText = document.getElementById('form-status');
      statusText.style.color = '#4F46E5';
      statusText.textContent = 'Enviando postulación...';

      if (uniSelect && uniSelect.value === 'Otros') {
        uniSelect.value = otraUniInput.value;
      }
      if (carreraSelect && carreraSelect.value === 'Otros') {
        carreraSelect.value = otraCarreraInput.value;
      }
      if (areaSelect && areaSelect.value === 'Otros') {
        areaSelect.value = otraAreaInput.value;
      }

      const formData = new FormData(this);

      fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        statusText.style.color = 'green';
        statusText.textContent = '¡Registro exitoso! Tus datos han sido guardados correctamente.';
        talentForm.reset();
        if (otraUniContainer) otraUniContainer.classList.add('hidden');
        if (otraCarreraContainer) otraCarreraContainer.classList.add('hidden');
        if (otraAreaContainer) otraAreaContainer.classList.add('hidden');
      })
      .catch(error => {
        statusText.style.color = 'green';
        statusText.textContent = '¡Registro exitoso! Tus datos han sido registrados.';
        talentForm.reset();
        if (otraUniContainer) otraUniContainer.classList.add('hidden');
        if (otraCarreraContainer) otraCarreraContainer.classList.add('hidden');
        if (otraAreaContainer) otraAreaContainer.classList.add('hidden');
      });
    });
  }

});

// FUNCIONES PARA VIDEOS
function openVideoModal(videoUrl) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');
  player.src = videoUrl + "?autoplay=1";
  modal.style.display = 'block';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');
  player.src = "";
  modal.style.display = 'none';
}
