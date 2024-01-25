import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import veauryVitePlugins from 'veaury/vite/index.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
   // Turn off vue and vuejsx plugins
    // vue(),
    // vueJsx(),
    // When the type of veauryVitePlugins is set to vue, 
    // only jsx in files in the directory named 'react_app' will be parsed with react jsx,
    // and jsx in other files will be parsed with vue jsx
    veauryVitePlugins({
      type: 'custom',
      // The jsx in .vue files and in the directory named 'vue_app' will be parsed with vue jsx.
      vueJsxInclude: [/vue&type=script&lang\.[tj]sx?$/, /vue&type=script&setup=true&lang\.[tj]sx?$/, /[/\\]vue_app[\\/$]+/],
      // Configuration of @vitejs/plugin-vue
      // vueOptions: {...},
      // Configuration of @vitejs/plugin-react
      // reactOptions: {...}, 
      // Configuration of @vitejs/plugin-vue-jsx
      // vueJsxOptions: {...}
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
