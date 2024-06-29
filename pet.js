function printPetInfo(pet) {
    if (pet.type === 'dog') {
        console.log("Dog: ".concat(pet.name, ", Breed: ").concat(pet.breed));
    }
    else if (pet.type === 'cat') {
        console.log("Cat: ".concat(pet.name, ", Color: ").concat(pet.color));
    }
}
var dog = { type: 'dog', name: 'Buddy', breed: 'Labrador' };
var cat = { type: 'cat', name: 'Whiskers', color: 'Grey' };
printPetInfo(dog);
printPetInfo(cat);
