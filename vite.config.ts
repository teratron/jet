/** @type {import('vite').UserConfig} */
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
defineConfig(({command, mode, isSsrBuild, isPreview}) => {
  console.log('Config arguments:', command, mode, isSsrBuild, isPreview)

  // build      command='build', mode='production'
  // build:dev  command='build', mode='development'
  // dev        command='serve', mode='development'
  // preview    command='serve', mode='production'

  const common = {
    root: './src'
  }

  if (command === 'serve') {
    return {
      // dev specific config
      ...common
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      ...common
    }
  }
})
