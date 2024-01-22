// area of tringle using function

function areaofTringle(a){
    area = 0.5*a*a;
    console.log('Area of Tringle is :', area);
}

areaofTringle(10);


// same using ARROW function

const arrow = (a) => {
    area = 0.5*a*a;
    console.log(area);
    return area;
}
arrow(2);