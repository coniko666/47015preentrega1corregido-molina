function saludo() {
    let nombre = prompt("Hola, como te llamas?")
    alert("Mucho gusto " + nombre)
  
  }
  
  saludo()
  
  function otrosDatos(){
    let anioActual = 2023
    let anioNacimiento = Number(prompt("En que año naciste?"))
    let edad = anioActual - anioNacimiento
    let tuEdad = alert("tienes " + edad)
    if (edad > 18){
      alert("Puedes ver la cartelera completa del cine");
    }else{
      alert("Vuelve cuando seas mayor");
    }
     }
    
  
  otrosDatos()
  
  function elegirPelicula(){
    let numeroElegido;
  
  do {
    numeroElegido = Number(prompt("Elige una película del 1 al 5:"));
  
    if (numeroElegido < 1 || numeroElegido > 5) {
      alert("Número inválido. Debes elegir una película de la lista del 1 al 5.");
    }
  } while (numeroElegido < 1 || numeroElegido > 5);
  
  alert("Has elegido la película " + numeroElegido + ".");
  }
  
  elegirPelicula()
  
  function calificacionPelicula(){
    let acumulador = 0
    for(let contador = 0; contador < 3 ; contador ++){
      let calificacionUsuario = Number(prompt("Califica del 1 al 10 la película por actuación, guión y dirección de arte respectivamente"))
      acumulador = acumulador + calificacionUsuario
    }
    let promedio = acumulador / 3
    alert("La película fue calificada con un " + promedio)
  }
  
  calificacionPelicula()