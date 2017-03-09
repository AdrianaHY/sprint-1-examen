var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
  //Agrega un objeto con las propiedades de cada estudiante
    var estudiante = {
        nombre :"",
        puntajeTecnico: "",
        puntajeHse: "",
    }
    //Agrega al arreglo de estudiantes los datos de cada estudiante.
    estudiantes.push (estudiante);

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

  //Arroja una ventana con cada pregunta para agregar a la estudiante.
    var preguntaUno = prompt ("Nombre de la estudiante: " );
    var preguntaDos = prompt ("Porcentaje técnico: " );
    var preguntaTres = prompt ("Porcentaje Habilidades Socio-Emocionales: " );
    var estudiante = {};
    //Asigna a cada propiedad del objeto el valor dado a cada pregunta.
    estudiante.nombre = preguntaUno;
    estudiante.puntajeTecnico = preguntaDos;
    estudiante.puntajeHse = preguntaTres;

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

  //ciclo para buscar los datos de los estudiantes
  for ( var i = 0 ; i <= estudiantes ; i++) {
    estudiantes = estudiantes [i] + estudiantes [i + 1];


  }
  //se invoca la función que contiene los datos del estudiante
  return mostrar(resultado);

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    for ( var i = 0; nombre == estudiante.nombre ; i++){
    //
    }


}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

    //para la longitud del arreglo
    var numeroDeElementos = estudiantes.length;
    var temporal;
    //ciclo para comparar los números y ver cual es mayor.
      for ( var comparacion = 0; comparacion < numeroDeElementos; comparacion++){
        for (var indice= 0; indice < numeroDeElementos; indice ++){
          if (estudiantes [indice] < estudiantes [indice + 1]){
            temporal = estudiantes [indice];
            estudiantes [indice] = estudiantes [indice+1];
            estudiantes [indice + 1] = temporal;
          }
        }
      }

      return estudiantes;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
