let nombre = "";
nombre = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu?");
console.log(nombre)
console.log("Voici la pyramide :");
var i = 1;
var dieze = "#";
var empty = " ";
while (i <= nombre) { 
    var result = (empty.repeat(nombre-i) + dieze.repeat(i));
console.log(result);
i++
}


// let floor = prompt("Combien d'étages veux-tu pour ta pyramide ?");
// ​
// for(let i = 0; i <= floor; i++){
//     console.log(" ".repeat(floor - i) + "#".repeat(i))
//   }








