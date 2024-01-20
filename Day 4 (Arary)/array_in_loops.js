// printing each value of array using for loops

let hero = ['ironman','thor','shaktiman','spiderman','batman'];

for(let idx = 0;idx<hero.length;idx++){
    console.log(hero[idx]);
}


// using for-of loop

for(let element of hero){
    console.log(element);
}

// using for-in loops
let cities = ['surat','goa','delhi','mumbai'];

for(let city in cities){
    console.log(cities[city.toUpperCase()]);
}