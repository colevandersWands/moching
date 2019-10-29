const fs = require('fs');
const path = require('path');
const Mocha = require('mocha');

// Instantiate a Mocha with options
const mocha = new Mocha({
  reporter: 'json'
});

// Use non-default Mocha test directory.
// const testDir = 'process.env.TEST_DIR';
const testDir = './tests';

// configure which tests you want to run
// (comment out the names of the files you want to ignore)
const testsToRun = [
  'simple.spec.js',
  // 'complicated.spec.js',
];

// Add each selected .js test file to the mocha instance
fs.readdirSync(testDir)
  .filter(function (file) {
    return testsToRun.indexOf(file) !== -1;
  })
  .filter(function (file) {
    return path.extname(file) === '.js';
  })
  .forEach(function (file) {
    mocha.addFile(path.join(testDir, file));
  });

// Run the tests.
mocha.run(function (failures) {
  // how it write to console?
  // console.log("\nfailures: " + failures + "\n");
});
