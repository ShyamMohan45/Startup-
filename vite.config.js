import { defineConfig } from 'vite';

const port = process.env.PORT ? Number(process.env.PORT) : 3007;

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port,
    open: true
  }
});
