import {fileURLToPath, URL} from 'node:url'
import {defineConfig}       from 'vite'
import copy                 from 'rollup-plugin-copy'
import * as path            from 'path'

const root = path.resolve(__dirname, './')
const dir = {
    root: root,
    lib: path.resolve(root, 'lib'),
    build: path.resolve(root, 'dist')
}

export default defineConfig(({command, mode, isSsrBuild, isPreview}) => {
    console.log('Config arguments:', command, mode, isSsrBuild, isPreview)

    const common = {
        build: {
            outDir: dir.build,
            emptyOutDir: false,
            sourcemap: true,
            lib: {
                entry: dir.lib + '/main.ts',
                name: 'Jettix'
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
            ...common,
            mode: 'development'
        }
    } else {
        // command === 'build'
        return {
            // build specific config
            ...common,
            mode: 'production'
        }
    }
})
