# Express-cr

CLI tool to Generate Boilerplate Code for creating REST API Routes and Controllers

It is tiresome to write same lines of Code

```js
router.get("/endpoint", Controller.Method);
router.get("/endpoint/:id", Controller.Method);
router.post("/endpoint", Controller.Method);
router.put("/endpoint/:id", Controller.Method);
router.patch("/endpoint/:id", Controller.Method);
router.delete("/endpoint/:id", Controller.Method);
```

Specially if the application is very Large, and there are alot of routes to create, this gives unnecessary headache while development. This only is route creation. Creating controllers for these routes is even more tiresome.

Express-rc package removes this headache by allowing you to generate these files on the fly with a simple command.

## Requirements

The Application Runs on Node JS v10x and above. The tool is made for Express Framework.

#### Compilation Requirements

- Node JS v10.x and above
- Express

## Installation

Installation Globally

```bash
$ npm install -g express-rc
```

Installation In as Dev Dependency

```bash
$ npm install --global express-rc
```

## File Generation

The file structure adopted by express-rc is as below:

```folter
root
├── controllers         # Auto Generated when command is run First Time.
                          All Files for controllers reside inside this directory.
├── routes              # Auto Generated when command is run First Time.
                          All Files for routing reside in inside this directory
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

Creating Controller and Routes Combined (No CRUD Functions)

```bash
$ express-cr cr:create
  ? Name of Controller: Name
```

Creating Controller and Routes Combined (With CRUD Functions)

```bash
$ express-cr cr:create -c
  ? Name of Controller: Name
```

Creating Controller Only (Without CRUD)

```bash
$ express-cr c:create
  ? Name of Controller: Name
```

Creating Controller Only (With CRUD)

```bash
$ express-cr c:create -c
  ? Name of Controller: Name
```

Creating Route Only (Without CRUD)

```bash
$ express-cr r:create
  ? Name of Route: Name
```

Creating Route Only (With CRUD)

```bash
$ express-cr r:create -c
  ? Name of Route: Name
```
