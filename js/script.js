// const cajas = document.querySelectorAll(".caja");

// function mostrarCaja() {
//     cajas.forEach(caja => {
//         caja.style.display = "block";
//         setTimeout(() => caja.classList.add("visible"), 100);
//     })
// }

// function ocultarCaja() {
//     cajas.forEach(caja => {
//         caja.classList.remove("visible");
//         setTimeout(() => caja.style.display = "none", 500);
//     })
// }

function mostrarCajas(grupo) {
  const cajas = document.querySelectorAll(`.grupo-${grupo} .caja`);
  cajas.forEach(caja => {
    caja.style.display = 'block';
    setTimeout(() => caja.classList.add('visible'), 100);
  });
}

function ocultarCajas(grupo) {
  const cajas = document.querySelectorAll(`.grupo-${grupo} .caja`);
  cajas.forEach(caja => {
    caja.classList.remove('visible');
    setTimeout(() => caja.style.display = 'none', 500);
  });
}
