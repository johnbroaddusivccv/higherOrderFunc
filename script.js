// Array of companies sorted
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
// array of ages unsorted
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop to loop through data
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// for each loop to loop through a certain area of our data
// you are essentially renaming each one of the companies in this array method
companies.forEach((company) => {
  console.log(company.name);
});

// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Filter
// Filter allows us to do just that filter things out of the array.
// canDrink = ages.filter(function(age){
//   if(age >= 21) {
//     return true;
//   }
// });

// ES6 Arrow function
const canDrink = ages.filter((age) => age >= 21);

console.log(canDrink);

// filter retail company

const retailCompanies = companies.filter(function (company) {
  if (company.category === "Retail") {
    return true;
  }
});

console.log(retailCompanies);

// Get companies from the 80's

const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start > 1990
);

console.log(eightiesCompanies);

// map
