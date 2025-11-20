import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts({ outDir: 'dist/types', insertTypesEntry: true })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'uiKit',
            formats: ['es', 'cjs'],
            fileName: (format) => (format === 'es' ? 'index.es.js' : 'index.cjs.js')
        },
        rollupOptions: {
            external: [
                'react',
                'react/jsx-runtime',
                'react-dom',
                '@mui/material',
                '@emotion/react',
                '@emotion/styled'
            ],
            output: {
                // ensure named exports are preserved
                exports: 'named',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI'
                }
            }
        },
        outDir: 'dist',
        emptyOutDir: true
    }
})
