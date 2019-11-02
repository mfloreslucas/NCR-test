window.onload = function(){

  //Clavando Tablones
  function solutionA(intA, intB, intC){
    let clavados = 0;
    let letC= [... new Set(intC)];

    for (var i = 0; i < letC.length; i++) {
      for (var j = 0; j < intA.length; j++) {
        if (intA[j] <= letC[i] && letC[i] <= intB[j]) {
          clavados++;
          delete intA[j];
          delete intB[j];
        }
      }
    }
    if (clavados == 0 ) {
      console.log("-1");
    } else{
      console.log("//Ejercicio 2.1 'Clavanto Tablones':");
      console.log("La cantidad minima de clavos necesarios son " + clavados);
    }
  }
  solutionA([1,4,5,8], [4,5,9,10], [1,1,1,1,1]);
  
  //Buscando Anagramas
  function solutionB(string, subString){
    let contador =0;
    let stringT = string.toLowerCase().replace(/ /g, "");
    let subStringT = subString.toLowerCase().replace(/ /g, "");

    let stringA = [...new Set(stringT.split(''))];
    let stringB = [...new Set(subStringT.split(''))];

    for (var j = 0; j < stringB.length; j++) {
      for (var i = 0; i < stringA.length; i++) {
        if (stringB[j] == stringA[i]) {
          contador ++;
          }
        }
      }
      console.log("//Ejercicio 2.2 'Buscando Anagramas':");
      console.log("Las veces que se realiza el anagrama es " + contador);
    }
    solutionB("hola, que buena ola Laomir", "OAL");
  }
