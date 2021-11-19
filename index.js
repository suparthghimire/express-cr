const {
  ControllerCRUD,
  ControllerNormal,
  RouteCRUD,
  RouteNormal,
} = require("./utils/file_templates");
const {
  CheckExists,
  CreateDirectory,
  CreateFile,
  WriteFile,
} = require("./utils/helpers");

const CreateRouteController = async (name, options) => {
  // Capatilize First Letter of Name if User Did Not
  name = name[0].toUpperCase() + name.slice(1);
  // Check if controllers directory exists
  const controllerDirPath = "./controllers";
  const routeDirPath = "./routes";
  try {
    if (!CheckExists(controllerDirPath)) {
      // If No, Create One
      await CreateDirectory(controllerDirPath, false);
    }
    // Check if routes directory exists
    if (!CheckExists(routeDirPath)) {
      // If No, Create One
      await CreateDirectory(routeDirPath, false);
    }
    const controllerFilePath = `./controllers/${name}Controller.js`;
    const routeFilePath = `./routes/${name.toLowerCase()}.js`;
    // Check if Controller file Exists
    if (!CheckExists(controllerFilePath)) {
      // If No, Create One
      await CreateFile(controllerFilePath);
      const fileDataController = options.c
        ? ControllerCRUD(name)
        : ControllerNormal(name);
      await WriteFile(controllerFilePath, fileDataController);
    } else {
      throw new Error("Controller File Already Exists");
    }
    // Check if Route file Exists
    if (!CheckExists(routeFilePath)) {
      // If No, Create One
      await CreateFile(routeFilePath);
      const fileDataRoute = options.c ? RouteCRUD(name) : RouteNormal(name);
      await WriteFile(routeFilePath, fileDataRoute);
    } else {
      throw new Error("Route File Already Exists");
    }
    console.log("Controller and Routes Created Successfully! 🚀");
  } catch (error) {
    console.info("🚩 Error: ", error.message);
  }
};
const CreateController = async (name, options) => {
  // Capatilize First Letter of Name if User Did Not
  name = name[0].toUpperCase() + name.slice(1);
  // Check if controllers directory exists
  const controllerDirPath = "./controllers";
  try {
    if (!CheckExists(controllerDirPath)) {
      // If No, Create One
      await CreateDirectory(controllerDirPath, false);
    }
    const controllerFilePath = `./controllers/${name}Controller.js`;
    // Check if Controller file Exists
    if (!CheckExists(controllerFilePath)) {
      // If No, Create One
      await CreateFile(controllerFilePath);
      const fileDataController = options.c
        ? ControllerCRUD(name)
        : ControllerNormal(name);
      await WriteFile(controllerFilePath, fileDataController);
    } else {
      throw new Error("Controller File Already Exists");
    }
    // Check if Controller file Exists
    console.log("Controller Created Successfully! 🚀");
  } catch (error) {
    console.info("🚩 Error: ", error.message);
  }
};
const CreateRoute = async (name, options) => {
  // Capatilize First Letter of Name if User Did Not
  name = name[0].toUpperCase() + name.slice(1);
  const routeDirPath = "./routes";
  try {
    // Check if routes directory exists
    if (!CheckExists(routeDirPath)) {
      // If No, Create One
      await CreateDirectory(routeDirPath, false);
    }
    const routeFilePath = `./routes/${name.toLowerCase()}.js`;
    // Check if Route file Exists
    if (!CheckExists(routeFilePath)) {
      // If No, Create One
      await CreateFile(routeFilePath);
      const fileDataRoute = options.c ? RouteCRUD(name) : RouteNormal(name);
      await WriteFile(routeFilePath, fileDataRoute);
    } else {
      throw new Error("Route File Already Exists");
    }
    console.log("Routes Created Successfully! 🚀");
  } catch (error) {
    console.info("🚩 Error: ", error.message);
  }
};
module.exports = {
  CreateRouteController,
  CreateController,
  CreateRoute,
};
