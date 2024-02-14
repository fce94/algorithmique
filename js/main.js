/*-------------- Les Commentaires --------------*/

//un commentaire en javascript

/*
un commentaire en multiligne
en javascript
*/

/*-------------- Les Affichages --------------*/

// Afficher des informations dans ka console de debbugage du navigateur
console.log("Hello, world!");

// Afficher une boite de dialogue avec champs à remplir
//let response = prompt('Quel est votre age?')
//console.log(response)

/*-------------- Les Variables --------------*/
// Decclaration d'une variable
let uneVariable;

// Affectation d'une variable
uneVariable = "je suis une variable";

// Les deux se fint geeralement en meme temps
// Les variables sont sensibles a la casse
let helloworld = "Hello, world";

uneVariable = "je suis une nouvelle variable";
console.log(uneVariable);

/*-------------- la concatenation --------------*/

let firstname = "fitia";
let lastname = "charles emile";
console.log("je m'appelle " + firstname + " " + lastname);

// Les differents type de variable
let message = "un message";
let number = 20;
let decimal = 20.5;
let boolean = true;
let boolean2 = false;

// Les operations arithmetiques (+, -, *, /)
// Declarer 3 variables sum, number1, number 2
// Affecter le nombre 10 a number1
//Affecter le nombre 20 a number2
// Afefecter à sum l'operation de multiplication des 2 variables pécédentes

let number1 = 10;
let number2 = 20;
let sum = number1 * number2;
console.log(sum);

/*-------------- La Concatenation --------------*/

// Declarer une varible city, afficher le message j'adore vivre a city

let city = "cachan";
city = "cachan";
city = `cachan`;

console.log("j'adore vivre à " + city);

// Modifier le message pour afficher j'adore vivre <city> et je m'appelle <firstname> + <lastname>

console.log(`j'adore vivre à ${city} et je m'appelle ${firstname} ${lastname}`);

/*-------------- Instructions Conditionnelles --------------*/

// Demander à l'utilisateur s'il accepte les CGV

//let agree = prompt("accepter les cgv ?");
//if (agree == "ok") {
// console.log("vous avez accepter");
//} else {
// console.log("vueillez accpeter les conditions");
//}

// Si, si non si, sinon
// s'il repond yes
// vous etes redirigé vers le site en anglais
// sinon s'il repond oui
// vous etes redirigé vers le sit ene francais
// sinon si il repond da
// vous etes redirigé vers le site en russe
// sinon
// vous ne pouvez pas acceder au site

//if (agree == "yes") {
// console.log("vous etes redirigé vers le site en anglais");
//} else if (agree == "oui") {
// console.log("vous etes redirigé vers le site en francais");
//} else if (agree == "da") {
//  console.log("vous etes redirigé vers le site russe");
//} else {
//console.log("vous ne pouvez pas acededer au site");
//}

/*-------------- Les operateurs de comparaison --------------*/

// ==,>, >=, <=, !=, ===, &&, ||
// Déclarer une variable qui s'appelle variable, lui assigner la valeur 16
// Si la variable est égale à 16 afficher félicitation
// let variable
//variable = 16

//if(variable = 16){
// console.log('félicitation')
//}

// Demander à l'ulisateur son age
// Demander sa nationalité

// Si il est francais ET qu'il a plus de 18 ans OU s'il est etranger et qu'il a moins de 18 ans
// Assistance juridique gratuite

//  let age = prompt("quel age as-tu?")
//let nationalité = prompt('ton nationalité')

//if(age >= 18 && nationalité == 'francais' || age < 18 && nationalité != 'francais'){
//   console.log('Assistance juridique gratuite')
//}

// Demande sa nationalité
// Si il est francais
// Demander à l'utilisateur son age
// Si il a plus de 18 ans droit au apl

// Sinon
// Vous avez pas le droit

// let nationalité = prompt("ta nationalité");
// let age;

// if (nationalité == "francais") {
//   let age = prompt("ton age");
//   if (age >= 18) {
//     console.log("vous avez droit aux apl");
//   } else {
//     console.log("refusé");
//   }
// }

/*-------------- Les boucles --------------*/

// Les boucles sont des structures permettant d'executer plusieurs des instructions

// Boucle à itération non definies (while)

let i = 0

while (i < 10) {
    let res = i*7
    console.log(`${i} x 7 = ${res}`)
    i = i + 1

}
// Afficher la table de multiplication de 7
// Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu

let A = 12
let B = 14
console.log(A,B)
A = B
console.log(A,B)
let C = B - 2
C = A
console.log(A,C)