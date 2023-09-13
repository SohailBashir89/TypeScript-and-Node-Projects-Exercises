//Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase.

var personName:string=("Sohail Bashir");

var lowercase:string=personName.toLowerCase();
console.log(lowercase);

var uppercase:string=personName.toUpperCase();
console.log(uppercase);

let words: string[] = personName.split(" ");
let titlecaseName: string = ""
for (let i = 0 ; i < words.length; i++) {
 titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};
console.log(titlecaseName)

