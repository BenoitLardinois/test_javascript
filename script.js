//Les variables
let a = 5;
let b = "lo";
console.log(a);
console.log(typeof a);


let data1 = "une variable en let définie dans le bloc principale";
{ // début du sous-bloc
	data1 = "variable (data1) en let modifée dans le sous-block";
	var data2 = "variable (data2) en var définie dans le soubloc";
	// let data3 = "variable (data3) en let définie dans le sous-block";
} //dun du sous-bloc

console.log(data1); //variable let modifée dans le sous-bloc
console.log(data2); //variable var définie dans le sous-bloc
// console.log(data3); //on aura une erreur: data3 n'est pas visible dans le bloc principale


let c = 3;
let d = 2;
c++ // 3 + 1
console.log(c);
console.log(d += 2); // 2 + 2


let e = "Bonjour", f = "Monde";
console.log(e + " " + f);
e = Number("5");
console.log(e);



//Les arrays
let statusDeThp = ["Bleusaille", "Rebel", "Renégat", "Capitaine", "Matelot", "Prisonnier", "Canonnier"];
console.log(statusDeThp[0]);
console.log(statusDeThp.length);
console.log(statusDeThp);
statusDeThp[0] = "La bleusaille";
console.log(statusDeThp[0]);
statusDeThp.push("Flibustier"); //fin du array
console.log(statusDeThp); 
statusDeThp.unshift("Pirate"); //début du array
console.log(statusDeThp[0]); 
console.log(statusDeThp); 

console.log(statusDeThp.pop()); //supprimer fin du array
console.log(statusDeThp.shift()); //supprimer début du array
console.log(statusDeThp.splice(0,2)); 
console.log(statusDeThp.slice(1,3));



//Les string
let g = 3;
console.log("Bonjour à tous les "+ g);
console.log(g + "3");

let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
console.log(statement);

console.log(statement.length);
console.log(statement[0]);
console.log(statement.indexOf("mon")); //"mon" commence à l'index 5
console.log(statement.toUpperCase());
console.log(statement.toUpperCase());

//split permet de découper un string avec un séparateur pour retourner un array de strings
const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson);
console.log(lesson[0]);
console.log(lesson[5]);

//la fonction join("_") fait linverse
console.log(lesson.join("_"));



//Les objets littéraux
let THPSessionNum2 = {
	numOfMouss: 80,
	cities: ["Paris", "Lyon", "Lille"],
	successRate: 0.80,
	sessionMoto: "Keep pushing to the top"
};
console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);
THPSessionNum2.numOfMouss = 79; //modification
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Apprendtissage de JS" //rajouter
console.log(THPSessionNum2);

let attributName = "successRate";
console.log(THPSessionNum2[attributName]);



//Les conditions
// != (compare uniquement le contenu)
// !== (compare le contenu et le type)
// == (compare uniquement le contenu)
// === (compare le contenu et le type)
console.log("36" == 36); //return true
console.log("36" === 36); //return false

let number = 2;
if(number > 0){
	console.log("number est positif")
}

let number1 = -6;
if(number1 > 0){
	console.log("number est positif");
}else if(number1 === 0){
	console.log("number est nul");
}else{
	console.log("number est négatif");
}

if (true && true){
	console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
}
if (true || false){
	console.log("ce message s'affiche car avec un OU, si l'une des conditions sont à TRUE, le résultat est TRUE");
}
if (!false){
	console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
}

//Quand il y a plusieurs scénarios possibles, on peut utiliser switch...case
weekNum = 9;
switch(weekNum){
	case 1:
	console.log("semaine 1");
	break;
	case 2:
	console.log("semaine 2");
	break;
	case 3:
	console.log("semaine 3");
	break;
	case 4:
	console.log("semaine 4");
	break;
	case 5:
	console.log("semaine 5");
	break;
	case 6:
	console.log("semaine 6");
	break;
	case 7:
	console.log("semaine 7");
	break;
	default: 
	console.log("cette entrée n'est pas reconnue");
	break;
}

//certaines valeurs évaluées à FALSE;
let number2 = 0;
if(number2){
	console.log("ce message ne s'affiche que si number2 est non nul");
}
let string = "";
if(string){
	console.log("ce message ne s'affiche que si string est non vide");
}
let myVariable
if(myVariable){
	console.log("ce message ne s'affiche que si myVariable contien une valeur");
}



//Les boucles;

//for([initialisation]; [condition]; [incrémentation]) { };
for(let count = 0; count <=5; count++){
	console.log(`On va compter jusqu'à 5 : ${count}`);
}
//console.log(count); 
// Va créer une erreur car count est en let et donc son scope est limité au bloc for.
//passe count en var pour tester ce que ça donne

//while([condition]) { };
let answer = "";
while(answer !== "oui"){
	console.log("alors ?");
	answer = prompt("Tu kiffe cette exo ?");
}
console.log('haaaa, tu nous fais plaisir!')

//On peut sortir d'une boucle while grâce au break
let word = "";
let letter;
while(true){
	letter = prompt('Tape UNE lettre stp :');
	if(letter){
		word += letter; //on rajoute la lettre saisie à la suite du mot
		console.log(word);
	}else { //on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
		break; //on quitte la boucle
	}
}
console.log(`Voilà ce que tu as tapé: ${word}`);

//For ... in permet de parcourir les arrays et objets
//on déclare d'abord un array
let weeksOfArray = ["Semaine 1 - Intro", "Semaine 2 - Découverte", "Semaine 3 - Exercices", "Semaine 4 - Jury"];
//on déclare ensuite un objet
let weeksOfObject = {Semaine5: "texte", Semaine6: "du texte", Semaine7: "du texte ici", Semaine8: "Encore du texte ici"};
//
console.log("**************** Parcourons le array ****************")
for(let index in weeksOfArray){
	console.log(index); //index va aller de 0 à 3
	console.log(weeksOfArray[index]);
}
console.log("**************** Parcourons l'objet ****************")
for(let weekAttribut in weeksOfObject){
	console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaines5" à 'Semaine8"
	console.log(weeksOfObject[weekAttribut]);
}
// .forEach() ne marche que sue les arrays et permet d'avoir la valeur stockée a chaque index du array
console.log("**************** Parcourons le array en forEach ****************")
weeksOfArray.forEach(weekContent => {
	console.log(weekContent)
});



//Les fonctions

//function nomDeMaFonction(){ //le code };
//Ici une fonction basique
function sayHello(){
	console.log("Bonjour toi!");
}
sayHello();

//Fonction avec des données et un return
function mutliply(inputNumber1, inputNumber2){
	let outputNumber = inputNumber1 * inputNumber2;
	return outputNumber;
}
console.log(mutliply(2, 3));
console.log(mutliply(2, mutliply(2, 3)));
//console.log(mutliply(outputNumber); //va créer une erreur car la variable en let n'existe pas en dehors de la fonction

//Déclarer d'autres façons nos fonctions, notament via fonctions anonymes(sans nom) qu'on peut affecté à une variable myVariable = function(entrée1, ...){ }
const multiply = function(inputNumber3, inputNumber4){
	let outputNumber1 = inputNumber3 * inputNumber4;
	return outputNumber1
}
console.log(mutliply(4, 4));
const otherMultiply = multiply; //on peut ainsi affecter la fonction à une autre variable
console.log(otherMultiply(4, 4));

//Posibilité de déclarer des fontctions plus épurée
const addition = (inputNumber5, inputNumber6) => {
	let outputNumber2 = inputNumber5 - inputNumber6;
	return outputNumber2
}
console.log(addition(10, 5));