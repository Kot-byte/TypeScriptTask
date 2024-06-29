function filterByAge(persons, minAge) {
    return persons.filter(function (person) { return person.age > minAge; });
}
var persons = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];
var filteredPersons = filterByAge(persons, 22);
console.log(filteredPersons);
