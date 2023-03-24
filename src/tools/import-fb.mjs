/**
 * @see https://firebase.google.com/docs/reference/js/firestore_lite
 */

import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import 'dotenv/config'
import * as fs from 'fs'

const firebaseConfig = {
  apiKey: "AIzaSyAXjttzlgRSGkOMRuyQqzY0gzYwb3nL2kg",
  authDomain: "name-c783b.firebaseapp.com",
  projectId: "name-c783b",
  storageBucket: "name-c783b.appspot.com",
  messagingSenderId: "650828303978",
  appId: "1:650828303978:web:282d0ef8128ba6b2e94413"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

let data = null

fs.readFile('palabras.json', 'utf8', async (err, response) => {
  if (err) {
    console.error(err)
    return
  }

  // En data tenemos los objetos del JSON de películas
  data = JSON.parse(response)
  // data = data.palabras

  const collectionRef = collection(db, 'palabras')

  for (const palabras of data) {
    let palabra = palabras.palabra
    console.log(palabra)
    const docRef = await addDoc(collectionRef, palabras)
    console.log(docRef)
  }
})
