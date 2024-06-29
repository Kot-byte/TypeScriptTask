interface PersonAnother {
    name: string;
    age: number;
}

function filterByAge(persons: PersonAnother[], minAge: number): PersonAnother[] {
    return persons.filter(person => person.age > minAge);
}

const persons: PersonAnother[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

const filteredPersons = filterByAge(persons, 22);
console.log(filteredPersons);
