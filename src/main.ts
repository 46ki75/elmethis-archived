import { createApp } from 'vue'

import 'prismjs'

import './style.scss'
import App from './App.vue'

import { ElmethisPlugin } from './plugins/ElmethisPlugin'

const app = createApp(App)
app.use(ElmethisPlugin)
app.mount('#app')
