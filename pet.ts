// Объединенный тип данных Pet
type Pet = Dog | Cat;

interface Dog {
    type: 'dog';
    name: string;
    breed: string;
}

interface Cat {
    type: 'cat';
    name: string;
    color: string;
}

function printPetInfo(pet: Pet): void {
    if (pet.type === 'dog') {
        console.log(`Dog: ${pet.name}, Breed: ${pet.breed}`);
    } else if (pet.type === 'cat') {
        console.log(`Cat: ${pet.name}, Color: ${pet.color}`);
    }
}

const dog: Pet = { type: 'dog', name: 'Buddy', breed: 'Labrador' };
const cat: Pet = { type: 'cat', name: 'Whiskers', color: 'Grey' };

printPetInfo(dog);
printPetInfo(cat);
