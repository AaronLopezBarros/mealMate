import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      all: true,
      provider: 'istanbul',
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: ['node_modules', 'test/**/*', 'src/app/layout.tsx'],
      reporter: ['text', 'html', 'lcov'],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
});
