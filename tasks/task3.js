// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  // Ваш код
}

module.exports = findByName;
// завданя 
function findByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
  return null;
}

module.exports = findByName;
