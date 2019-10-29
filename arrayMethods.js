const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
]

// Part 1 - Find all users older than 24

function olderThanTwentyFour(arr) {
  return arr.filter(n => n.age >= 24)
}

console.log(olderThanTwentyFour(texasss))
// Part 2 - Find the total age of all users

function totalAge(arr) {
  return arr.map( n => n.age).reduce((n, acc) => n + acc, 0)
}
console.log(totalAge(texasss))

// Part 3 - List all female coders


function femaleCoders(arr) {
  return arr.filter(n => n.gender === "f")
}

console.log(femaleCoders(texasss))



// ARRAY 2
const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder:true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder:false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Ivy',
    age: 26,
    coder:true,
    gender: 'f',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder:true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder:false,
    gender: 'm',
    us: true,
  },
]

// Part 1 - List all users in US in ascending order


function usUsers(arr) {
  return arr.filter(n => n.us === true).sort((a, b) => a - b ? -1 : 1 )
}

console.log(usUsers(newieyork))


// Part 2 - Sort all users by age

function sortedByAge(arr) {
  return arr.sort((a, b) => (a - b) ? -1 : 1 )
}

console.log(sortedByAge(newieyork))



// Part 3 -  List all female coders

function femaleCodersList(arr) {
  let filtered = arr.filter(n => n.gender === "f")
  return filtered.map( n => n.name)
}

console.log(femaleCodersList(newieyork))


// ARRAY 3
const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder:true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder:true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder:false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder:true,
    gender:'f'
  },
  {
    name: 'Jon',
    age: 47,
    coder:false,
    gender: 'm',
  },
]

// Part 1 - Find the total age of male coders under 25


function maleCodersUnderTwentyFive(arr) {
  let filtered = arr.filter(n => n.gender === "m")
  return filtered.map( n => n.age).reduce((n, acc) => n+ acc, 0)
}

console.log(maleCodersUnderTwentyFive(vegzas))

// Part 2 - List all male coders over 30


function maleCodersOverThirty(arr) {
  return arr.filter(n => n.age > 30 )
}

console.log(maleCodersOverThirty(vegzas))

// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

function findTotalAge(arr) {
  return arr.map(n => n.age).reduce((n, acc) => n + acc, 0)
}

let totalAge = findTotalAge(texasss) + findTotalAge(newieyork) + findTotalAge(vegzas)

// console.log(totalAge)
