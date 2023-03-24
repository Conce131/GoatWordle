import { createApp } from 'vue'
import App from './App.vue'
import Table from './components/Table.vue'
import './assets/main.css'
import 'firebase/firestore'

createApp(App).component('Table', Table).mount('#app')
