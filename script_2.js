var nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log("Nombre choisi:" + " " + nombre);

function factorial(nombre) 

{ 

  if (nombre === 0)
 {
    return 1;
 }
  return nombre * factorial(nombre-1);
         
}
console.log("Le résultat est:" + " " + factorial(nombre));


// if(nombre == 0 || nombre == 1) {
// console.log("Le résultat est : 1");
// } else {
// let result = factorial(nombre-1) * nombre 
// console.log(result);
// }


