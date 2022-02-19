
let somme = 0;
for (let index = 2; index < process.argv.length; index++) {
   somme += parseInt(process.argv[index]);
};
console.log(somme);

