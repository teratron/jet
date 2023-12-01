/** @type {import('vite').UserConfig} */
import {fileURLToPath, URL} from 'node:url'
import {defineConfig}       from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({command, mode, isSsrBuild, isPreview}) => {
    console.log('Config arguments:', command, mode, isSsrBuild, isPreview)

    // build      command='build', mode='production'
    // build:dev  command='build', mode='development'
    // dev        command='serve', mode='development'
    // preview    command='serve', mode='production'

    const common = {
        build: {
            outDir: './dist',
            lib: {
                entry: './lib/main.ts',
                name: 'Jettix',
                filename: 'jettix'
            }
        },
        resolve: {
            extensions: ['.ts', '.scss'],
            alias: {
                '@': fileURLToPath(new URL('./lib', import.meta.url))
            }
        }
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
