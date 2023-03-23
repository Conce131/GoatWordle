<script>
export default {
  name: 'Table',
  data() {
    return {
      word: 'granuja',
      letters: ''
    }
  },
  mounted() {
    this.setLength()
  },
  methods: {
    setLength() {
      this.letters = this.word.length
    },
    checkLetter(event) {
      event = event || window.event
      console.log(event)
      const letter = event.target.value.toLowerCase()
      const index = Number(event.target.dataset.index)
      console.log(`Letra actual: ${letter}, Letra en indice ${index}: 
      ${this.word[index]}`)
      if (letter === this.word[index].toLowerCase()) {
        event.target.style.backgroundColor = 'green'
      } else if (this.word.includes(letter)) {
        console.log(letter)
        event.target.style.backgroundColor = 'yellow'
      } else {
        event.target.style.backgroundColor = 'red'
      }
    }
  }
}
</script>

<template>
  <main>
    <div v-for="word in letters" class="row">
      <input
        v-for="(word, index) in letters"
        type="text"
        maxlength="1"
        :data-index="index"
        @keyup="checkLetter(e)"
      />
    </div>
  </main>
</template>

<style scoped>
* {
  padding-left: 0.5em;
}
input {
  width: 1.5vw;
  /* height: 1.5vh; */
}

.row {
  display: flex;
  /* flex-direction: row; */
}
</style>
