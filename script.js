console.log("How to make Spaghetti alla Carbonara:")

let spaghetti = 400;
let guanciale = 250;
let eggYolk = 6;
let pecorino = 50;
let blackPepper = 4;
let water = 1000;

console.log("\nIngredients for 4 people:");
console.log("Spaghetti:", spaghetti, "\nGuanciale:", guanciale, "\nVery fresh egg yolks:", eggYolk, "\nAged Granted Pecorino Romano cheese:", pecorino, "\nRaw black pepper:", blackPepper, "\nWater:", water);


console.log("\nLet's make Carbonara:")

console.log("\nCut Guanciale in long strips of 1 cm layers.")

console.log("1 Egg Yolk is aproxiatly 18 gr.");
eggYolk += 6 * 18;
let mixedEggPecorino = eggYolk + pecorino;
console.log("Mix Egg Yolk with Pecorino:", mixedEggPecorino, "g");

let roastedBlackPepper = blackPepper + mixedEggPecorino * 0.1;
console.log("Roast Black Pepper on the pan:", roastedBlackPepper, "g");

let brownGuanciale = guanciale * 0.95;
let grease = guanciale * 0.05;
console.log("Brown Guanciale strips  on the pan and take them out util  cripsy , and let them cool: ", brownGuanciale, "g");

spaghetti += water * 0.1;
console.log("Drain the pasta and save a ladle full of pasta water: ", spaghetti, "g");

let pastaWater = 30;
brownGuanciale += pastaWater + grease;
console.log("Add 2 table spoon of pasta water in pan  the with cooled guanciale and turn the heat on", brownGuanciale, "g");

spaghetti += brownGuanciale;
console.log("After it creates a creamy sauce, turn of the heat and add the spagheti:", spaghetti, "g");

let carbonara = spaghetti + mixedEggPecorino;
console.log("Add the mixed yolk and cheese in the pan and stir them rapidly, until the eggs cooks gently and becomes creamy");

carbonara += roastedBlackPepper;
console.log("Add the remmaing roasted black paper. ", carbonara, "g");

let plate = carbonara / 4;
console.log("\nThat's one good plate per person of  ", plate, "g");

console.log("Enjoy!");



