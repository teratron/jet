/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LIB_TITLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
