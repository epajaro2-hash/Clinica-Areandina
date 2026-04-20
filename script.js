function registrar() {
    const paciente = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const seleccion = document.getElementById('medicoSelect').value;

    const datos = seleccion.split('|');
    const id = datos[0];
    const nombreMedico = datos[1];
    const especialidad = datos[2];
    const recomendacion = datos[3];

    const fechaActual = new Date().toLocaleString();

    const tabla = document.getElementById('cuerpoTabla');
    const fila = tabla.insertRow();

    fila.innerHTML = `
        <td><span class="badge bg-secondary">${id}</span></td>
        <td><strong>${nombreMedico}</strong><br><small class="text-muted">${especialidad}</small></td>
        <td>${paciente}</td>
        <td>${edad} años</td>
        <td><small>${fechaActual}</small></td>
        <td class="text-success small"><em>${recomendacion}</em></td>
    `;

    // 5. Limpiar campos de texto después de guardar
    document.getElementById('nombre').value = "";
    document.getElementById('edad').value = "";
}