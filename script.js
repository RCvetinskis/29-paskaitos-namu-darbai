"use strict"

// 1salis = Lithuania , plotias = 65,300km2 , populiacija = 2.8mil
// 2salis = Poland , plotias = 312,696km2 , populiacija = 38mil
// 3salis = Sweden , plotias = 450,295km2 , populiacija = 10.4mil
// 4salis = Spain , plotias = 505,900km2 , populiacija = 47.4mil
// 5salis = Italy , plotias = 301,230km2 , populiacija = 60mil

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius
var salis = [
    {salis:"Lietuva", plotas: 65300, populiacija: 2800000 },
    {salis:"Lenkija", plotas: 312696, populiacija: 38000000 },
    {salis:"Svedija", plotas: 450295, populiacija: 10400000 },
    {salis:"Ispanija", plotas: 505900, populiacija: 47400000 },
    {salis:"Italija", plotas: 301230, populiacija: 60000000 },
]

//  Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

var m2Person = function(salis, plotas, populiacija){
   var kvMetras = plotas * 1000000;
   var mtoPerson = kvMetras / populiacija;
   console.log(`Salis: ${salis}, joje gyvena ${populiacija} gyventoju.`)
   console.log(`Valstybes plotas:${plotas}km2, plotas tenkantis vienam gyventui: ${mtoPerson.toFixed(2)} m2.`)
   console.log("<(^_^)>")
}

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:


for (var x of salis){
    m2Person(x.salis, x.plotas, x.populiacija)
 
}