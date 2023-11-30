/** @type {import('vite').UserConfig} */
import {fileURLToPath, URL} from 'node:url'
import {defineConfig}       from 'vite'
import vue                  from '@vitejs/plugin-vue'
import autoprefixer         from 'autoprefixer'
import app                  from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({command, mode, isSsrBuild, isPreview}) => {
    console.log('Config arguments:', command, mode, isSsrBuild, isPreview)

    // build      command='build', mode='production'
    // build:dev  command='build', mode='development'
    // dev        command='serve', mode='development'
    // preview    command='serve', mode='production'

    return {
        base: command === 'serve' ? '/' : './',
        root: 'src',
        publicDir: 'public',
        server: {
            open: app.name,
            warmup: {
                clientFiles: [
                    'src/**/*.vue'
                ]
            }
        },
        preview: {
            open: app.name
        },
        test: {},
        css: {
            devSourcemap: true,
            postcss: {
                plugins: [
                    autoprefixer({})
                ]
            }
        },
        plugins: [
            vue()
        ],
        minify: mode === 'development' ? false : 'terser',
        sourcemap: command === 'serve' ? 'inline' : false,
        build: {
            outDir: 'build',
            emptyOutDir: true,
            manifest: command === 'build' ? 'manifest.json' : false,
            rollupOptions: {
                input: {
                    main: 'src/index.html'
                },
                output: {
                    entryFileNames: 'js/[name].[hash].js',
                    chunkFileNames: 'js/[name].[hash].js',
                    assetFileNames: (assetInfo => {
                        const info = assetInfo.name?.split('.')
                        let ext: string = info![info!.length - 1]
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|webm|mp3|wav/i.test(ext)) {
                            ext = 'media'
                        } else if (/(sa|sc|c)ss/i.test(ext)) {
                            ext = 'css'
                        } else if (/woff(2)?|eot|ttf|otf/i.test(ext)) {
                            ext = 'fonts'
                        } else ext = ''
                        return `${ext}/[name].[hash][extname]`
                    })
                }
            }
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }
})
