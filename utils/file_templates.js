const functions_crud = [
  {
    name: "index",
    method: "get",
    statusCode: 200,
    params: [],
    return_msg: "API To Get Data",
  },
  {
    name: "show",
    method: "get",
    statusCode: 200,
    params: ["id"],
    return_msg: "API to Get Single Data",
  },
  {
    name: "store",
    method: "post",
    statusCode: 201,
    params: [],
    return_msg: "API to Store Data",
  },
  {
    name: "update_patch",
    method: "patch",
    statusCode: 201,
    params: ["id"],
    return_msg: "API to Patch Data",
  },
  {
    name: "update_put",
    method: "put",
    statusCode: 201,
    params: ["id"],
    return_msg: "API to Put Data",
  },
  {
    name: "delete",
    method: "delete",
    statusCode: 201,
    params: ["id"],
    return_msg: "API to Delete Data",
  },
];
const functions_normal = [functions_crud[0]];
module.exports = {
  ControllerCRUD: (name) => {
    const file_data = `
const ${name}Controller = {
  ${functions_crud
    .map((fn) => {
      return `${fn.name} : (req, res) => {
    ${
      fn.params.length > 0
        ? `const {${fn.params.map((param, i) => {
            return param;
          })}} = req.params`
        : ""
    }
    return res.status(${fn.statusCode}).json({
      body: '${fn.return_msg}'
    })
  },\n`;
    })
    .join("")}
}
module.exports = ${name}Controller    
`;
    return file_data;
  },
  RouteCRUD: (name) => {
    const file_data = `
const { Router } = require("express");
const router = Router();
const ${name}Controller = require("../controllers/${name}Controller");
${functions_crud
  .map((fn) => {
    return `
router.${fn.method}("/${fn.name}",${name}Controller.${fn.name});
`;
  })
  .join("")}
module.exports = router;
`;
    return file_data;
  },
  RouteNormal: (name) => {
    const file_data = `
const { Router } = require("express");
const router = Router();
const ${name}Controller = require("../controllers/${name}Controller");
${functions_normal.map((fn) => {
  return `
router.${fn.method}("/${fn.name}",${name}Controller.${fn.name});
`;
})}
module.exports = router;
`;
    return file_data;
  },
  ControllerNormal: (name) => {
    const file_data = `
const ${name}Controller = {
  ${functions_normal.map((fn) => {
    return `${fn.name} : (req, res) => {
    ${
      fn.params.length > 0
        ? `const {${fn.params.map((param, i) => {
            return param;
          })}} = req.params`
        : ""
    }
    return res.status(${fn.statusCode}).json({
      body: '${fn.return_msg}'
    })
  }`;
  })}
}
module.exports = ${name}Controller    
`;
    return file_data;
  },
};
