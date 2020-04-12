const { readFile, writeFile } = require('fs');
const config = require('./config');

const startNewReplacementProcess = (filePath, keysArray) => {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }

    keysArray.forEach(key => {
      data = data.replace(key.pattern, key.replaceWith);
    });

    writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        console.log(err);
      }
    })
  });
}

for (const key in config) {
  startNewReplacementProcess(config[key].file, config[key].patterns);
}
