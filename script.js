// ========================================
// INFINITY PENSUM
// Sistema de progreso + prerrequisitos + candados + Gojo Chibis
// ========================================

// Tarjetas de semestres
const semestres = document.querySelectorAll(".semestre");

// Panel de progreso
const materiasAprobadasTexto = document.getElementById("materiasAprobadas");
const creditosAprobadosTexto = document.getElementById("creditosAprobados");
const porcentajeTexto = document.getElementById("porcentaje");
const barra = document.getElementById("barraProgreso");

// Pantalla de graduación
const pantallaGraduacion = document.getElementById("pantallaGraduacion");

// ========================================
// CARGAR PROGRESO GUARDADO
// ========================================

const progresoGuardado = JSON.parse(
    localStorage.getItem("infinityPensum")
);

if(progresoGuardado){
    materias.forEach(materia => {
        const guardada = progresoGuardado.find(
            m => m.nombre === materia.nombre
        );

        if(guardada){
            materia.estado = guardada.estado;
        }
    });
}

// ========================================
// TOTALES
// ========================================

const totalMaterias = materias.length;

const totalCreditos = materias.reduce(
    (total, materia) => total + materia.creditos,
    0
);

// ========================================
// CREAR TARJETAS
// ========================================

materias.forEach(materia => {

    const semestre = semestres[materia.semestre - 1];

    const tarjeta = document.createElement("div");

    tarjeta.className = "materia";

    tarjeta.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h4 class="titulo-materia" style="margin: 0;"></h4>
            <img class="gojo-icono" src="" alt="Gojo" style="width: 32px; height: 32px; object-fit: contain;">
        </div>
        <p><strong>Créditos:</strong> ${materia.creditos}</p>
        <p class="estado"></p>
        <p class="bloqueo" style="font-size: 12px; opacity: 0.8; margin-top: 4px;"></p>
    `;

    actualizarTarjeta(tarjeta, materia);

    tarjeta.addEventListener("click", () => {

        if(estaBloqueada(materia)){
            const faltantes = requisitosFaltantes(materia);

            // Efecto de vibración ligera en la tarjeta
            tarjeta.style.animation = "shake 0.3s ease";
            setTimeout(() => tarjeta.style.animation = "", 300);

            alert(
                "🔒 Materia bloqueada.\n\nFalta aprobar:\n• " +
                faltantes.join("\n• ")
            );

            return;
        }

        cambiarEstado(materia);

        actualizarTodasLasTarjetas();

        actualizarProgreso();

        guardarProgreso();

    });

    if (semestre) {
        semestre.appendChild(tarjeta);
    }

});

// ========================================
// COMPROBAR PRERREQUISITOS
// ========================================

function estaBloqueada(materia){

    if(!materia.requisitos || materia.requisitos.length === 0){
        return false;
    }

    return materia.requisitos.some(requisito => {

        const encontrada = materias.find(
            m => m.nombre === requisito
        );

        return !encontrada || encontrada.estado !== "aprobada";

    });

}

function requisitosFaltantes(materia){

    if(!materia.requisitos) return [];

    return materia.requisitos.filter(requisito => {

        const encontrada = materias.find(
            m => m.nombre === requisito
        );

        return !encontrada || encontrada.estado !== "aprobada";

    });

}

// ========================================
// CAMBIAR ESTADO
// ========================================

function cambiarEstado(materia){

    if(materia.estado === "pendiente" || !materia.estado){
        materia.estado = "cursando";
    }
    else if(materia.estado === "cursando"){
        materia.estado = "aprobada";
    }
    else{
        materia.estado = "pendiente";
    }

}

// ========================================
// ACTUALIZAR TODAS LAS TARJETAS
// ========================================

function actualizarTodasLasTarjetas(){

    const tarjetas = document.querySelectorAll(".materia");

    materias.forEach((materia, index) => {
        if(tarjetas[index]) {
            actualizarTarjeta(tarjetas[index], materia);
        }
    });

}

// ========================================
// ACTUALIZAR TARJETA (CON CHIBIS DE GOJO)
// ========================================

function actualizarTarjeta(tarjeta, materia){

    const titulo = tarjeta.querySelector(".titulo-materia");
    const estado = tarjeta.querySelector(".estado");
    const bloqueo = tarjeta.querySelector(".bloqueo");
    const iconoGojo = tarjeta.querySelector(".gojo-icono");

    tarjeta.classList.remove(
        "pendiente",
        "cursando",
        "aprobada",
        "bloqueada"
    );

    if(estaBloqueada(materia)){

        tarjeta.classList.add("bloqueada");

        titulo.textContent = "🔒 " + materia.nombre;

        estado.textContent = "BLOQUEADA";

        bloqueo.textContent = "Falta: " + requisitosFaltantes(materia).join(", ");

        // Gojo Manita Abajo para bloqueadas
        if(iconoGojo) iconoGojo.src = "img/manitaabajo.png";

    } else {

        const estadoMateria = materia.estado || "pendiente";
        tarjeta.classList.add(estadoMateria);

        titulo.textContent = materia.nombre;

        estado.textContent = estadoMateria.toUpperCase();

        bloqueo.textContent = "";

        // Chibis según el estado
        if(iconoGojo) {
            if(estadoMateria === "aprobada" || estadoMateria === "cursando") {
                iconoGojo.src = "img/gojomanitas.png";
            } else {
                iconoGojo.src = "img/gojoojoscerrados.png";
            }
        }

    }

}

// ========================================
// ACTUALIZAR PROGRESO
// ========================================

function actualizarProgreso(){

    const aprobadas = materias.filter(
        materia => materia.estado === "aprobada"
    );

    const cantidad = aprobadas.length;

    const creditos = aprobadas.reduce(
        (total, materia) => total + materia.creditos,
        0
    );

    const porcentaje = totalCreditos > 0 ? (creditos / totalCreditos) * 100 : 0;

    if(materiasAprobadasTexto) materiasAprobadasTexto.textContent = `${cantidad} / ${totalMaterias}`;

    if(creditosAprobadosTexto) creditosAprobadosTexto.textContent = `${creditos} / ${totalCreditos}`;

    if(porcentajeTexto) porcentajeTexto.textContent = porcentaje.toFixed(1) + "%";

    if(barra) barra.style.width = porcentaje + "%";

    // 🎓 Mostrar felicitación solamente al 100%
    if(pantallaGraduacion) {
        if(porcentaje >= 100 && totalMaterias > 0){
            pantallaGraduacion.classList.remove("oculto");
        }else{
            pantallaGraduacion.classList.add("oculto");
        }
    }

}

// ========================================
// GUARDAR PROGRESO
// ========================================

function guardarProgreso(){

    localStorage.setItem(
        "infinityPensum",
        JSON.stringify(materias)
    );

}

// ========================================
// INICIAR
// ========================================

actualizarTodasLasTarjetas();
actualizarProgreso();

// ========================================
// MODO OSCURO
// ========================================

const botonTema = document.getElementById("botonTema");

if(botonTema) {
    // Cargar tema guardado
    const temaGuardado = localStorage.getItem("temaInfinity");

    if(temaGuardado === "oscuro"){
        document.body.classList.add("oscuro");
        botonTema.textContent = "☀️";
    }

    // Cambiar tema
    botonTema.addEventListener("click", () => {

        document.body.classList.toggle("oscuro");

        if(document.body.classList.contains("oscuro")){
            botonTema.textContent = "☀️";
            localStorage.setItem("temaInfinity", "oscuro");
        }else{
            botonTema.textContent = "🌙";
            localStorage.setItem("temaInfinity", "claro");
        }

    });
}