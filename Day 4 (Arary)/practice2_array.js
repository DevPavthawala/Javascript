let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
console.log('Original array',companies);
// remove the first company from the array

companies.shift();
console.log('removing the first company :',companies);

// remove uber and add ola
console.log(companies);
companies.splice(1,1,"Ola");
console.log('removing uber and adding ola :',companies);

// add amazon at the end

companies.push('Amazon');
console.log('adding Amazon to the last position:',companies);