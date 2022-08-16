module.exports = (path, cwd) => {
  return path.replace(cwd, '').split('/')[1];
}