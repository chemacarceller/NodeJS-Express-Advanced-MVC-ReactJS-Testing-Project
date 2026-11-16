import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  publicDir: false, 
  build: {
    outDir: resolve(__dirname, '../public/react'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        homeView: resolve(__dirname, 'src/homeView.jsx'),
        audioanalyzerAIView: resolve(__dirname, 'src/audioanalyzerAIView.jsx'),
        //characterAIView: resolve(__dirname, 'src/characterAIView.jsx'),
        lightbulbAIView: resolve(__dirname, 'src/lightbulbAIView.jsx'),
        speechAIView: resolve(__dirname, 'src/speechAIView.jsx'),
        systemprompteditorView: resolve(__dirname, 'src/systemprompteditorView.jsx'),
        systemprompttestingAIView: resolve(__dirname, 'src/systemprompttestingAIView.jsx'),
        translatorAIView: resolve(__dirname, 'src/translatorAIView.jsx'),
        userView: resolve(__dirname, 'src/userView.jsx'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'shared-[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
