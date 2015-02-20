# git-modified

Simple utility library that returns the list of files that have been modified since your last commit.

## Usage

```javascript
var modified = require('git-modified');

gulp.src(modified())
  .pipe(jshint());
```
