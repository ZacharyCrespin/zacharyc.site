const path = require('path');

module.exports = {
  // The entry point file described above
  entry: './src/js/firebase.js',
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'firebase.js'
  }
};
module.exports = {
  // The entry point file described above
  entry: './src/js/service-worker.js',
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'service-worker.js'
  }
};