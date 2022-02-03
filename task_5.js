// Задание 5

class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName
    this.age = age
    this.position = position
    this.technologies = new Array()
  }

  code() {}

  learnNewTechnology(technology) {
    this.technologies.push(...technology)
  }
}

class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Junior')
  }
  code() {
    console.log(`${this.position} разработчик пишет код...`)
    this.learnNewTechnology(['HTML', 'CSS', 'JavaScript'])
  }
}

class MiddleDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Middle')
  }
  code() {
    console.log(`${this.position} разработчик пишет код...`)
    this.learnNewTechnology(['HTML', 'CSS', 'JavaScript', 'React'])
  }
}

class SeniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Senior')
  }
  code() {
    console.log(`${this.position} разработчик пишет код...`)
    this.learnNewTechnology(['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'])
  }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
const middleDeveloper = new MiddleDeveloper('Игорь', 25)
const seniorDeveloper = new SeniorDeveloper('Максим', 30)

juniorDeveloper.code() // Junior разработчик пишет код...
middleDeveloper.code() // Middle разработчик пишет код…
seniorDeveloper.code() // Senior разработчик пишет код...

console.log(
  juniorDeveloper.fullName,
  juniorDeveloper.age,
  juniorDeveloper.position
) // 'Анастасия', 20, 'Junior'
console.log(
  middleDeveloper.fullName,
  middleDeveloper.age,
  middleDeveloper.position
) // 'Игорь', 25, 'Middle'
console.log(
  seniorDeveloper.fullName,
  seniorDeveloper.age,
  seniorDeveloper.position
) // 'Максим', 30, 'Senior'
