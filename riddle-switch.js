const person = {
  age: 27,
  name: 'Alex'
}

function sayHi (person) {
  switch (person.name) {
    case 'Alex':
      const age = person.age
      console.log(`Hello Alex, you are ${age} yo., yet your prez is terrible.`)
      break
    default:
      const age = person.age
      console.log(`Hi ${person.name}. ${age} years old, right?`)
      break
  }
}

sayHi(person)
