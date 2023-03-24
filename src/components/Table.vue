<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDocs } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXjttzlgRSGkOMRuyQqzY0gzYwb3nL2kg",
  authDomain: "name-c783b.firebaseapp.com",
  projectId: "name-c783b",
  storageBucket: "name-c783b.appspot.com",
  messagingSenderId: "650828303978",
  appId: "1:650828303978:web:282d0ef8128ba6b2e94413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export default {
  name: 'Table',
  data() {
    return {
      word: '',
      letters: '',
      name: '',
      employeesData: [],
    }
  },
  async created() {
    const collectionRef = collection(db, 'palabras')
    const querySnapshot = await getDocs(collectionRef)
    const palabras = []
    querySnapshot.forEach((doc) => {
      palabras.push(doc.data().palabra)
    })
    // Actualiza el estado de la palabra
    this.word = palabras[Math.floor(Math.random() * palabras.length)]
    // Actualiza la longitud
    this.setLength()
  },

  mounted() {


    this.setLength()
  },
  methods: {


    async test() {
      const querySnapshot = await getDocs(collection(db, "this.palabras"))
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      })
    },
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
      <input v-for="(word, index) in letters" type="text" maxlength="1" :data-index="index" @keyup="checkLetter(e)" />
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
