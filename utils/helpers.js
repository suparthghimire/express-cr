const fs = require("fs");
const fsPromises = fs.promises;
module.exports = {
  CheckExists: (path) => {
    return fs.existsSync(path);
  },
  CreateDirectory: async (path, nested = false) => {
    return await fsPromises.mkdir(path, { recursive: nested });
  },
  CreateFile: async (path) => {
    return await fsPromises.open(path, "w");
  },
  WriteFile: async (path, data) => {
    return await fsPromises.writeFile(path, data);
  },
};
