import App from './app.svelte'
import './styles/global.css'

let app = new App({
  target: document.getElementById('app'),
})

export default app
