import {createApp} from 'vue'
import App         from './App.vue'
import router      from './router'

console.log(import.meta.env.VITE_APP_TITLE)
export default createApp(App)
    .use(router)
    .mount('#app')
