import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { database } from './db/database'

var app = createApp(App)

const db = new database
db.dbConnect()

app.mount('#app')

