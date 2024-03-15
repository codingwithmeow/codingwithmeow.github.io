// var company = new Object();
// company.name = "Facebook";

// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";



// console.log(company);
// console.log("Company CEO name is : " + company.ceo.firstName);

// console.log(company["name"]);

// //company.$stock = 110;
// //company["stock of company"] = 120;
// var stockPropName = "stock of company";
// company[stockPropName] = 130;

// //console.log("Stock price is : " + company["stock of company"]);
// console.log("Stock price is : " + company[stockPropName]);

// Better way object literal
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     $stock:110
// };

// console.log(facebook);

var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 120
};

console.log(facebook);
console.log(facebook.ceo.firstName);
