import {fileURLToPath, URL} from 'node:url'
import {defineConfig}       from 'vite'
import vue                  from '@vitejs/plugin-vue'
import autoprefixer         from 'autoprefixer'
import * as path            from 'path'

const root = path.resolve(__dirname, './')
const dir = {
    root: root,
    src: path.resolve(root, 'src'),
    build: path.resolve(root, 'build'),
    public: path.resolve(root, 'public')
}

export default defineConfig(({command, mode, isSsrBuild, isPreview}) => {
    console.log('Config arguments:', command, mode, isSsrBuild, isPreview)

    return {
        base: command === 'serve' ? '/' : './',
        root: dir.src,
        publicDir: dir.public,
        envDir: '',
        plugins: [
            vue()
        ],
        server: {
            warmup: {
                clientFiles: [
                    './src/components/*.vue'
                ]
            }
        },
        preview: {},
        test: {},
        css: {
            devSourcemap: true,
            postcss: {
                plugins: [
                    autoprefixer({})
                ]
            }
        },
        minify: mode === 'development' ? false : 'terser',
        sourcemap: command === 'serve' ? 'inline' : false,
        build: {
            outDir: dir.build,
            emptyOutDir: true,
            manifest: command === 'build' ? 'manifest.json' : false,
            rollupOptions: {
                input: {
                    main: dir.src + '/index.html'
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
            extensions: ['.ts', '.vue', '.scss'],
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }
})
