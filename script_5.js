const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
  books.forEach (x=> { 
     if (x.rented > 1) { 
     console.log("true");
     } else {
     console.log("false");
     }});

    
     console.log("Quel est livre le plus emprunté ?");

    var Array = [];
    books.forEach (y=> { 
    console.log(Array.push(y.rented))
    });
    // yArray.sort(function(a,b)) {return a -b});
    

    // console.log("Ordre alphabétique du nom de famille.");
    // var nameArray = [];
    // entrepreneurs.forEach(name => {
    //  nameArray.push(name.last)})
    //  console.log(nameArray.sort());
    //  console.log(nameArray.length);





//   consol.log("Quel est le livre le moins emprunté ?");

//   consol.log("Trouve le livre avec l'ID: 873495");

//   consol.log("Supprime le livre avec l'ID: 133712");
  
//   consol.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)";
