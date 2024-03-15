// function orderChickenWith(sideDish) {
//     if (sideDish === undefined) {
//         sideDish = "whatever";
//     }
//     console.log("Chicken with " + sideDish);
// }

function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever"
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodless");
orderChickenWith();