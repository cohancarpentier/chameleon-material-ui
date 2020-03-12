import inlineSvg from 'rollup-plugin-inline-svg';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      inlineSvg({
        removingTags: ['title', 'desc', 'defs', 'style'],
        removeSVGTagAttrs: true,
      }),
      typescript({
        typescript: require('typescript'),
      }),
      postcss({
        plugins: [],
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
  },
];
