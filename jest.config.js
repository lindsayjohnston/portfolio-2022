module.exports  = {
   verbose: true,
   testURL: "http://localhost/",
   'transform': {
     '^.+\\.jsx?$': 'babel-jest',
   },
   testMatch: ['**/__tests__/*.js?(x)'],
   moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        'portfolio-2022/__mocks__/fileMock.js',
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns:["node_modules/(?!axios)/\""]
 }
