import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'

const app = createApp(App);

//global UI folder component registration for auto import
components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
