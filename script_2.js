let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");
if (nbr == 0 || nbr == 1){
  console.log ("Le résultat est : 1")
}
else{
  let i = nbr;
    while(nbr > 1){
      nbr--
      i = nbr * i
    }
  let answer = `Le résultat est : ${i}`
  console.log(answer)







// var nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
// console.log("Nombre choisi:" + " " + nombre);

// function factorial(nombre) 

// { 

//   if (nombre === 0)
//  {
//     return 1;
//  }
//   return nombre * factorial(nombre-1);
         
// }
// console.log("Le résultat est:" + " " + factorial(nombre));





