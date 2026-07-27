const botones = document.querySelectorAll(".btn-ver");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const card = boton.parentElement;

        card.classList.toggle("activa");

        if(card.classList.contains("activa")){
            boton.textContent = "Ver menos";
        }else{
            boton.textContent = "Ver más";
        }

    });

});

document.getElementById("lana").addEventListener("click", function(){

    document.getElementById("titulo").textContent = "Lana Del Rey";

    document.getElementById("texto").textContent =
    "Lana Del Rey es una cantante y compositora estadounidense conocida por su estilo melancólico y canciones como Summertime Sadness y Video Games.";

});

document.getElementById("oasis").addEventListener("click", function(){

    document.getElementById("titulo").textContent = "Oasis";

    document.getElementById("texto").textContent =
    "Oasis es una banda británica de rock famosa por éxitos como Wonderwall y Don't Look Back in Anger.";

});

document.getElementById("alvaro").addEventListener("click", function(){

    document.getElementById("titulo").textContent = "Álvaro Soler";

    document.getElementById("texto").textContent =
    "Álvaro Soler es un cantante y compositor español conocido por canciones como Sofía, La Cintura y El Mismo Sol.";

});


document.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();


    let materia = document.getElementById("materia").value;

    let curso = document.getElementById("curso").value;

    let estado = document.getElementById("estado").value;



    let fila = document.createElement("tr");


    let dato1 = document.createElement("td");
    dato1.textContent = materia;


    let dato2 = document.createElement("td");
    dato2.textContent = curso;


    let dato3 = document.createElement("td");
    dato3.textContent = estado;



    fila.appendChild(dato1);
    fila.appendChild(dato2);
    fila.appendChild(dato3);




    document.getElementById("tablaS-cursos")
    .appendChild(fila);



    document.getElementById("formulario").reset();


});
