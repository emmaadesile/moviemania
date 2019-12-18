module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve('./src/__mocks__/fileMock.js')
      // "<rootDir>/src/__mocks__/fileMock.js"
  }
};
 