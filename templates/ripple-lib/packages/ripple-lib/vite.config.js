import { defineConfig } from 'vite';
import { ripple } from 'vite-plugin-ripple';
import path from 'path';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		ripple(),
		dtsPlugin({
			entryRoot: 'src',
			insertTypesEntry: true,
			copyDtsFiles: true,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		target: 'esnext',
		manifest: false,
		minify: false,
		lib: {
			entry: 'src/index.ts',
			fileName: (format) => `ripple-lib.${format}.js`,
			formats: ['es'],
		},
		rollupOptions: {
			input: 'src/index.ts',
			output: {
				dir: 'dist',
				globals: {},
				exports: 'named',
			},
			external: ['ripple', 'ripple/internal/client'],
			plugins: [],
		},
	},
});
