/*
    Description: Algorithmique Practice
    Language: JavaScript
    Created: 2024-02-16
    By: @edjek
    Lisez les instructions ci-dessous et écrivez votre code dans le fichier practice.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Mais noubliez pas la balise <script src=""><script>
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

/*
        ._________________.
        | _______________ |
        | I             I |
        | I javascript  I |
        | I    Algo     I |
        | I             I |
        | I_____________I |
        |_________________|
            ._[_______]_.
        .___|___________|___.
        |::: ____           |
        |    ~~~~ [CD-ROM]  |
        |___________________|

 */

// ---------------------------------- Partie 1 ----------------------------------

// Afficher un message de bienvenue dans la console
// 'Bonjour, je suis un message affiché dans la console'

console.log('bonjour, je suis un message affiché dans la console')

// Creer une variable qui contient un message de bienvenue
// 'Bonjour, je suis une variable qui contient un message de bienvenue'
// Afficher la variable de bienvenue dans la console

let hello = 'bonjour je suis une variable qui contient un message de bienvenue'
console.log(hello)

// Quelle sera la valeur de i à la fin de cet algorithme ?
let g = 12;
let h = 2;
let i = g * h;

/*----- reponse -----*/
// La valeur de i sera 24 

// Creer une variable qui contient un message
// 'Je decouvre le javascript'
// Concatener la variable avec le message 'et je suis très heureux de tout ce que j'apprend
// Et afficher le resultat dans la console

let discover = 'je decouvre le javascript'
console.log(`${discover} et je suis très heureux de tout ce que j'apprend`)

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'

let name = 'fitia'

// Afficher le message avec les 3 facons de faire une concaténation ('', "", ``)

console.log("Bonjour je m'appelle" +' '+ name)
console.log('Bonjour je m\'appelle' +' ' + name)
console.log(`Bonjour je m'apelle ${name}`)

// Algorithme de calcul de moyenne
// Déclarer 3 variables qui contiennent les notes de l'utilisateur
// Calculer la moyenne de l'utilisateur

let math = 10
let francais = 15
let svt = 14
let moyenne = (math + francais + svt) / 3

console.log(moyenne)

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction

function welcome(){
    console.log('Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console')
}

welcome()

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre

function welcome(name){
    console.log(`Bonjour ${name}, je suis une fonction qui affiche un message de bienvenue dans la console`)
}

welcome('fitia')

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre

function welcome(name, age){
    console.log(`Bonjour ${name}, j'ai ${age} et je suis une fonction qui affiche un message de bienvenue dans la console`)
}

welcome('fitia', 22)
// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'

 let age = prompt('votre age')

 if(age >= 18){
     console.log('vous etes majeur')
 }else{
     console.log('vous etes mineur')
 }

// Déclarer une fonction qui prend en parametre un age
// Et qui affiche dans la console si l'utilisateur est majeur ou mineur

 prompt ('quel est votre age')

function ages(x){
     if(x >= 18){
         console.log('vous etes majeur')
     }else{
         console.log('vous etes mineur')
     }
 }

 ages()

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon

 prompt ('quel est votre age')

 function agesb(x){
     if(x >= 18){
         console.log(true)
     }else{
         console.log(false)
     }
 }

 agesb()


// Décider de l'animal préféré de l'utilisateur en fonction de son choix
// Demander à l'utilisateur de rentrer un animal
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal

 let animale = prompt('quelle est ton animal préféré ?')

 if (animale == "chien" || animale =="chat"){
     console.log('vous aimez les animaux domestique')
 }else if (animale == "lion" || animale =="tigre"){
     console.log('vous aimez les animaux sauvages')
 }else if (animale == "dauphin" || animale == "otarie"){
     console.log('vous aimez les animaux marins')
 }else {
     console.log('je ne connais pas cet animal')
 }



// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant

// ---------------------------------- Partie 4 ----------------------------------

// Faite une boucle qui affiche dans la console 5 fois le message suivant
// 'Je suis une boucle'
let d = 0

while(d <=  4){
    let resu = d++
    console.log('je suis une boucle')
}
// Faire une boucle qui affiche dans la console les nombres de 1 à 10

let k = 1

for(let k = 1; k < 11; k++){
    console.log(k)
}
// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre

let user = prompt('donne ton chiffre')

     for(let i = 0; i <=user; i++){
         console.log(i)
    }

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console la table de multiplication de ce nombre
// Exemple: Si l'utilisateur rentre 5, afficher dans la console
// '5 x 1 = 5'
// '5 x 2 = 10'
// '5 x 3 = 15'




// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre

// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 7 en parametre
// Appeler la fonction en lui passant le nombre 9 en parametre

// Demander à l'utilisateur de rentrer un nombre
// Creer une fonction qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre

// ---------------------------------- Partie 5 ----------------------------------

// Déclarer un tableau contenant le nom des mois de l'année
// Afficher dans la console le mois de janvier
// Afficher dans la console le mois de mars
// Afficher dans la console le mois de avril
// Afficher dans la console le mois de aout
// Afficher dans la console le mois de octobre

// Faire une boucle qui affiche dans la console les mois de l'année

// Creer une fonction qui affiche dans la console les mois de l'année
// Appeler la fonction 2 fois

// Creer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Afficher dans la console la note de l'utilisateur à l'indice 1
