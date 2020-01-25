let a = "admin";
let b = a;
a = "user"

console.log(a);
console.log(b);

let person = {
    name: "Hesen",
    surname: "Hesenov",
    age: 25
}

let = person2 = person
person.name = "Rasim";

console.log(person);
console.log(person2);

let num = 25;
let flat_num = 5.5;
let bignum = 999999999999999;
let objnumber = new Number (25);
console.log(objnumber == num);


let arr = [4,2,7,3,1]
function findMin(arr){
    let min = arr[0];
    let min2 = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(arr[i]<min)
            min = arr[i]
        if(arr[i]<min2 && min2<min)
            min2 = arr[i]
    }
    console.log(min);
    console.log(min2);
}
findMin(arr)


let array = [2,3,5,6,8,6,4,9]
let arrayOdd = [];
function chooseOdd(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0 && array.indexOf(array[i] == -1)){
        arrayOdd.push(array[i])
     }
    }
console.log(arrayOdd);

}
chooseOdd(array)