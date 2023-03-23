/**
 * @see https://firebase.google.com/docs/reference/js/firestore_lite
 */

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
import 'dotenv/config'
import * as fs from 'fs'

const firebaseConfig = {
  apiKey: 'AIzaSyDwrAZgsIEB17vOqOv_Vd6U_U_74UhqdHo',
  authDomain: 'goatwordle-53100.firebaseapp.com',
  projectId: 'goatwordle-53100',
  storageBucket: 'goatwordle-53100.appspot.com',
  messagingSenderId: '553346905034',
  appId: '1:553346905034:web:0786187016b25e7ec01533',
  measurementId: 'G-Y7N8V59M2D'
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

let data = null

fs.readFile('palabras.json', 'utf8', (err, response) => {
  if (err) {
    console.error(err)
    return
  }

  // En data tenemos los objetos del JSON de películas
  data = JSON.parse(response)
  // data = data.palabras

  for (const palabras of data) {
    let palabra = palabras.palabra
    set(ref(db, 'palabras/' + palabra), palabras)
  }
})
