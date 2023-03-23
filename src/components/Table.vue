<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDwrAZgsIEB17vOqOv_Vd6U_U_74UhqdHo',
  authDomain: 'goatwordle-53100.firebaseapp.com',
  projectId: 'goatwordle-53100',
  storageBucket: 'goatwordle-53100.appspot.com',
  messagingSenderId: '553346905034',
  appId: '1:553346905034:web:0786187016b25e7ec01533',
  measurementId: 'G-Y7N8V59M2D'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default {
  name: 'Table',
  data() {
    return {
      word: 'granuja',
      letters: '',
      words: []
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
