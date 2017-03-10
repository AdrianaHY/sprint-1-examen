var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;//Devuelve el arreglo que por ahora está vacío.

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var preguntaUno = prompt ("Nombre de la estudiante: " );//Arroja una ventana para que el usuario ingrese los datos.
    var preguntaDos = prompt ("Porcentaje técnico: " );
    var preguntaTres = prompt ("Porcentaje Habilidades Socio-Emocionales: " );
    var estudiante = {//Objeto literal en donde se colocan las propiedades de cada estudiante
      nombre : preguntaUno,
      puntajeTecnico: preguntaDos,
      puntajeHse: preguntaTres
    };
    estudiantes.push(estudiante);//Agrega al arreglo vacío cada estudiante
    return estudiante;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var resultado = "";//declaramos una variable en donde guardaremos el resultado de for each
    estudiantes.forEach (function (estudiante){
      resultado += mostrar (estudiante);
    });
    return resultado;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var buscarEstudiante = estudiantes.filter (function (estudiante) {//Se utiliza el método filter para comparar el nombre ingresado y la propiedad del objeto
      return estudiante.nombre.toLowerCase() === nombre.toLocaleLowerCase();//para que arroje el que es igual al que el usuario busca
    });
    return buscarEstudiante;//devuelve el objeto que busca el estudiante


}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

    var estudiantesTopTecnico = estudiantes.sort (function (a,b){//Se ocupa em método sort para ordenar los objetos dentro del arreglo
      return b.puntajeTecnico > a.puntajeTecnico //Sort ordena de menor a mayor, en este caso se invierte porque es de mayor a menor.
    });
    return estudiantesTopTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var estudiantesTopHse = estudiantes.sort (function (a,b){//Se ocupa el método sort para ordenar los objetos dentro del arreglo
      return b.puntajeHse > a.puntajeHse//Sort ordena de menor a mayor, en este caso se invierte porque es de mayor a menor.
    });
    return estudiantesTopHse;
}
