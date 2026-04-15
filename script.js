document.getElementById('formClinica').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const medico = document.getElementById('medico').value;

    const contenedor = document.getElementById('contenedorCitas');
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-paciente-premium';

    tarjeta.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h5 class="fw-bold text-primary mb-0">${nombre}</h5>
                <small class="text-muted">Médico Asignado: ${medico}</small>
            </div>
            <button class="btn btn-outline-success btn-sm fw-bold" onclick="atender(this)">
                INGRESAR RECOMENDACIONES
            </button>
        </div>
        
        <div class="zona-recomendacion" style="display:none;">
            <hr>
            <label class="small fw-bold mb-1">Recomendaciones Finales:</label>
            <textarea class="form-control mb-2" rows="2" placeholder="Escriba las indicaciones..."></textarea>
            <button class="btn btn-dark btn-sm" onclick="finalizar(this)">Generar y Archivar</button>
        </div>
    `;

    contenedor.prepend(tarjeta);
    this.reset();
});

function atender(btn) {
    btn.closest('.tarjeta-paciente-premium').querySelector('.zona-recomendacion').style.display = 'block';
    btn.style.display = 'none';
}

function finalizar(btn) {
    const tarjeta = btn.closest('.tarjeta-paciente-premium');
    const texto = tarjeta.querySelector('textarea').value;
    if(!texto) return alert("Ingrese recomendaciones");

    tarjeta.style.borderLeftColor = "#198754";
    tarjeta.innerHTML = `<h6 class="text-success fw-bold">✓ CITA FINALIZADA</h6>
                         <p class="small mb-0"><strong>Recomendaciones:</strong> ${texto}</p>`;
}