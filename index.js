var execSync = require('exec-sync');

module.exports = function() {
  var result = execSync('git diff --name-only');
  return result.split('\n');
};