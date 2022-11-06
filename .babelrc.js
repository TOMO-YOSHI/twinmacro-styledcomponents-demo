// {
//   "presets": [
//     [
//       "next/babel",
//       {
//         "preset-react": {
//           "runtime": "automatic",
//           "importSource": "@emotion/react",
//         }
//       }
//     ]
//   ],
//   "plugins": [
//     ["styled-components", { "ssr": true }],
//     ["babel-plugin-twin", { "debug": false }],
//     "babel-plugin-macros"
//   ]
// }
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: ['@emotion/babel-plugin', 'babel-plugin-macros'],
}