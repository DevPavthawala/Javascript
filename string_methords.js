// methords of strings


let str2 = 'Dev Pavthawala';

// for uppercase and lowercase

console.log(`This is in uppercase ${str2.toUpperCase()} and this is in lowercase ${str2.toLowerCase()}`)

// this methord trim the white space at starting and ending.

let str3 = "    Dev Patel     Js      "
console.log(`This will remove the empty space ${str3.trim()}`)

// slicing a string

console.log(str2.slice(4,9)); // it don't include the 9 charactor(non inclusive).

// concatination (join str2 and str3 )

console.log(str2.concat(str3));