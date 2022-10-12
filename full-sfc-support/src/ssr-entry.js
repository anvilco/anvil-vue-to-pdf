import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

// Create an SSR instance of our `App` component and give us a string.
export async function render () {
  const app = createSSRApp(App)
  return renderToString(app)
}
