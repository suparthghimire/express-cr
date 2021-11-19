#!/usr/bin/env node
const { program } = require("commander");
const {
  CreateRouteController,
  CreateController,
  CreateRoute,
} = require("./index");
const { prompt } = require("inquirer");
program.version("1.0.0").description("Users Mgmt");

// Questions
const CreateQuestion = [
  {
    type: "input",
    name: "file_name",
    message: "Name of Controller",
    validate: (input) => {
      const split = input.split(" ");
      if (split.length > 1) return "Names Cannot hava Spaces";
      const regex = new RegExp(/^[a-zA-Z_ ... ]+$/);
      const match_regex = regex.test(input);
      if (!match_regex) return "Name Can only Contain Letters and _ Symbol";
      return true;
    },
  },
];

program
  .command("ControllerRoute:create")
  .alias("cr:create")
  .description("Create New Controller and Route")
  .option("-c", "--crud", "CRUD Functions Implementation")
  .action((options) => {
    prompt(CreateQuestion).then((ans) =>
      CreateRouteController(ans.file_name, options)
    );
  });
program
  .command("Controller:create")
  .alias("c:create")
  .description("Create New Controller")
  .option("-c", "--crud", "CRUD Functions Implementation")
  .action((options) => {
    prompt(CreateQuestion).then((ans) => {
      CreateController(ans.file_name, options);
    });
  });
program
  .command("Route:create")
  .alias("r:create")
  .description("Create New Route")
  .option("-c", "--crud", "CRUD Functions Implementation")
  .action((options) => {
    prompt(CreateQuestion).then((ans) => {
      CreateRoute(ans.file_name, options);
    });
  });
program.parse(process.argv);
