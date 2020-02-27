input = prompt("Saisir une phrase:");

switch(true) {
 case input.slice(-1) === "?":
  console.log("Ouais Ouais...");
  break;
  case input === input.toUpperCase() && input != "":
   console.log("Pwa, calme-toi...");
   break;
  case input.includes("Fornite"):
    console.log("on s' fait une partie soum-soum ?");
    break;
  case input === "":
    console.log("t'es en PLS ?");
    break

  default:
    console.log("balek");
    break;
    }