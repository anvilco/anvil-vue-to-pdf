// this runs in Node.js on the server.
import { createSSRApp } from 'vue'
// Vue's server-rendering API is exposed under `vue/server-renderer`.
import { renderToString } from 'vue/server-renderer'

// We can create other components using the "Options API" style.
// https://vuejs.org/guide/introduction.html#api-styles
const OtherComponent = {
  data: () => ({ text: 'Hello' }),
  template: `
    <div>
    <p>This is within the imported component.</p>
    <p>{{ text }}</p>
    </div>
  `
}

const app = createSSRApp({
  // We register any other components we use within our template here.
  components: { OtherComponent },
  data: () => ({ count: 1 }),
  computed: {
    countPlusTwo: (state) => state.count + 2
  },
  template: `
    <div>
    <OtherComponent />
    <h2>Hello from the main Vue component</h2>
    <p>This also uses data. Count is: {{ count }}.</p>
    <p>This uses computed data. Count plus 2 is: {{ countPlusTwo }}</p>
    </div>
  `
})

export default app
