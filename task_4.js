// Задание 4

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
    return this.words[key]
  }

  showAllWords() {
    for (const key in this.words) {
      const el = this.words[key]
      console.log(`${el.word} - ${el.description}`)
    }
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name)
  }
  add(word, description) {
    const doneWord = this.words[word]?.word
    if (doneWord === undefined || word !== doneWord) {
      this.words[word] = { word, description, isDifficult: true }
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
)
hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
)
hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
)
hardWordsDictionary.remove('неологизм')

hardWordsDictionary.showAllWords()
