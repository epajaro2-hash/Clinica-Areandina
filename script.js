const medicos = {
    "MED-001": { nombre: "Dr. Pérez", esp: "Medicina General", rec: "Ayuno de 8 horas." },
    "ODO-002": { nombre: "Dra. Ruiz", esp: "Odontología", rec: "Higiene bucal previa." },
    "INT-003": { nombre: "Dr. Torres", esp: "Internista", rec: "Traer historia clínica." },
    "GIN-004": { nombre: "Dra. Gómez", esp: "Ginecología", rec: "Ropa cómoda." }
};

function registrar() {
    let nombreP = document.getElementById('nombre').value;
    let edadP = document.getElementById('edad').value;
    let idMed = document.getElementById('medicoSelect').value;

    if (!nombreP || !edadP || !idMed) {
        alert("Completa todos los campos.");
        return;
    }

    if (isNaN(edadP)) {
        alert("La edad debe ser un número.");
        return;
    }

    let ahora = new Date();
    let fechaTxt = ahora.toLocaleDateString() + " " + ahora.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    let medicoInfo = medicos[idMed];

    let tabla = document.getElementById('cuerpoTabla');
    let fila = tabla.insertRow();

    // Aquí usamos clases de Bootstrap como 'badge' y 'text-muted'
    fila.innerHTML = `
        <td><span class="badge bg-secondary id-badge">${idMed}</span></td>
        <td><strong>${medicoInfo.nombre}</strong><br><small class="text-muted">${medicoInfo.esp}</small></td>
        <td>${nombreP}</td>
        <td>${edadP} años</td>
        <td><small>${fechaTxt}</small></td>
        <td><span class="text-success small"><em>${medicoInfo.rec}</em></span></td>
    `;

    // Limpiar formulario
    document.getElementById('nombre').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('medicoSelect').value = "";
}