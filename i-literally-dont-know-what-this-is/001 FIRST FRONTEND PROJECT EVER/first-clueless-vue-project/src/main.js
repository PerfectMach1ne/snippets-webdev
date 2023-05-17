import { createApp } from 'vue'
import App from './App.vue'

// The .mount() method should always be called after all app 
// configurations and asset registrations are done. 
const app = createApp(App)
// .mount() returns the root component instance (not the app instance)
// Wait... then it can't be good to just do this:
// const app = createApp(App).mount('#app')
// ...right?

app.mount('#app')