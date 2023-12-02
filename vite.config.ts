import {fileURLToPath, URL} from 'node:url'
import {defineConfig}       from 'vite'
import copy                 from 'rollup-plugin-copy'

export default defineConfig(({command, mode, isSsrBuild, isPreview}) => {
    console.log('Config arguments:', command, mode, isSsrBuild, isPreview)

    const common = {
        build: {
            outDir: './dist',
            emptyOutDir: false,
            sourcemap: true,
            lib: {
                entry: './lib/main.ts',
                name: 'Jettix',
                filename: 'jettix'
            }
        },
        plugins: [
            copy({
                targets: [
                    {src: 'lib/scss/**/*', dest: 'dist/scss'}
                ]
            })
        ],
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
