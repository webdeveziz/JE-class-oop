// Задание 3

class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }

  add(word, description) {
    const doneWord = this.words[word]?.word
    if (doneWord === undefined || word !== doneWord) {
      this.words[word] = { word, description }
    }
  }

  remove(key) {
    delete this.words[key]
  }

  get(key) {
    alert(`***${this.name}***
${key} - это ${this.words[key].description}`) // Так красиво выглядит на экране))
    return this.words[key]
  }

  showAllWords() {
    for (const key in this.words) {
      const el = this.words[key]
      console.log(`${el.word} - ${el.description}`)
    }
  }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
)
dictionary.remove('JavaScript')
dictionary.showAllWords()
// dictionary.get('Веб-разработчик')
