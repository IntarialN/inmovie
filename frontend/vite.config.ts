import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
// import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  base: './',
  plugins: [
      react(
          {
            tsDecorators: true,
          }
      ),
  ],
  build: {
    outDir: '../../resources/eveot/ui',
    emptyOutDir: true,
  },
  define: {
    __DEV__: mode === 'development',
  },
  resolve: {
    alias: {
      '@shared': resolve(__dirname, '../shared'),
      '@modules': resolve(__dirname, './src/modules'),
      '@components': resolve(__dirname, './src/components/'),
      '@components-ui': resolve(__dirname, './src/components/ui-gamemode/src/components'),
      '@assets-ui': resolve(__dirname, './src/components/ui-gamemode/src/assets'),
      '@assets': resolve(__dirname, './src/assets')
    },
  },
  esbuild: {
    drop: ['debugger'],
  },
}));