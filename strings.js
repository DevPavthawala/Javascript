// concept of strigs

let str = "Dev Pavthawala";
let str1 = 'Javascript';

// string length

console.log(str.length);
console.log(str1.length);

// accessing characters in a string

console.log(str[0]);
console.log(str1[9]);

// Templete Literals

let specialString = `This is templete literals`
console.log(specialString);

// Eg and real use of Template Literals

let obj ={
    item : 'pen',
    price: 5,
}

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// escape charactors (\n ----> for next line & \t ----> for tab)

console.log('Dev\npavthawala');
console.log('Dev\tpavthawala');

// methords of strings


let str2 = 'Dev Pavthawala';

// for uppercase and lowercase

console.log(`This is in uppercase ${str2.toUpperCase()} and this is in lowercase ${str2.toLowerCase()}`)

// this methord trim the white space at starting and ending.

let str3 = "    Dev Patel     Js      "
console.log(`This will remove the empty space ${str3.trim()}`)