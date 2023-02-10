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
c++
console.log(c);
console.log(d += 2);



let e = "Bonjour", f = "Monde";
console.log(e + " " + f);
e = Number("5")
console.log(e)