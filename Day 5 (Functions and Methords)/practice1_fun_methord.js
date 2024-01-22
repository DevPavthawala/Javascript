// from the array fillter out the marks who score the more then 90

let marks = [ 78,89,69,85,74,99,98,95,94,91,43];

let max = marks.filter((val) => {
    return val > 90;
})

console.log(max);


