import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    commonjs(),
    postcss({
      plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer,
      ],
      extract: 'index.css',
      minimize: true,
    }),
    terser(),
  ],
};