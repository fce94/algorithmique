/*-------------- les commentaires --------------*/


//un commentaire en javascript

/*
un commentaire en multiligne
en javascript
*/

/*-------------- les Affichages --------------*/

// Afficher des informations dans ka console de debbugage du navigateur
console.log('Hello, world!');

/*-------------- les variables --------------*/
// Decclaration d'une variable
let uneVariable

// Affectation d'une variable
uneVariable = 'je suis une variable'

// Les deux se fint geeralement en meme temps
// Les variables sont sensibles a la casse
let helloworld = 'Hello, world'

uneVariable = 'je suis une nouvelle variable'
console.log(uneVariable)

/*-------------- la concatenation --------------*/

let firstname = 'fitia'
let lastname = 'charles emile'
console.log("je m'appelle " + firstname + ' ' + lastname)

// Les differents type de variable
let message = 'un message'
let number = 20
let decimal = 20.5
let boolean = true
let boolean2 = false

// Les operations arithmetiques (+, -, *, /)
// Declarer 3 variables sum, number1, number 2
// Affecter le nombre 10 a number1
//Affecter le nombre 20 a number2
// Afefecter à sum l'operation de multiplication des 2 variables pécédentes

let number1 = 10
let number2 = 20
let sum = number1 * number2
console.log(sum)

/*-------------- la concatenation --------------*/

// Declarer une varible city, afficher le message j'adore vivre a city

let city = 'cachan'
city = "cachan"
city = `cachan`

console.log("j'adore vivre à " + city)

// Modifier le message pour afficher j'adore vivre <city> et je m'appelle <firstname> + <lastname>

console.log(`j'adore vivre à ${city} et je m'appelle ${firstname} ${lastname}`)

