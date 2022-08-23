const fs = require('fs');
const path = require('path');

module.exports = (handlerType, fileName) => {
  const templatePath = path.join(__dirname, `./templates/${handlerType}/template.js`);
  const templateContents = fs.readFileSync(templatePath);
  const relativePath = `../../../src/events/${handlerType}/${fileName}.js`;
  const writePath = path.join(__dirname, relativePath);

  fs.writeFileSync(writePath, templateContents);

  return { path: writePath, relativePath };
}
