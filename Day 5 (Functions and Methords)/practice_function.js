// create a function which takes a string and return number of vowels present in strig

function countVowels(text){
    let count = 0;
    for(const char of text){
        if (char === 'a'||char ==='e'||char==='i'||char==='o'||char === 'u'  ){
            count++;

        }
    }
    return count;
}

console.log(countVowels("Devpavthawala"));


// same using arrow function

const arrow = (sentence) => {
    let countt = 0;
    for(const char of sentence){
        if (char === 'a'||char ==='e'||char==='i'||char==='o'||char === 'u'  ){
            countt++;

        }
    }
    return countt;
}