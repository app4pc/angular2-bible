A  basic Angular2 latest release RC1 ("2.0.0-rc.1") project with authentication (login / logout) works as seed project

# Non compiled code and setup of any project with login/logout modules.

This project setup uses following tech-set:
* Webpack: for transplation and as a task runner
* TSD & TSC to write code in ECMAScript-6 standards.
* TS-Lint for de-bugging,code-optimisation and standardisation.
* Angular 2 with latest release RC1 ("2.0.0-rc.1")


## Running it

Clone this repository as well as [the server](http://code.edgenetworks.in/akhilesh.kumar/genpact_setup_src) for this example.

Then, run `npm install` on this project and run `npm start` to start the app. Then just navigate to [http://localhost:3000](http://localhost:3000) :boom:
Use `npm run server` to run API server.

## Building Project

1. Run command "webpack"
It will create build files in 'dist' folder.
2. Map these files in your index.html(put into script and add tag 'auth-app').
3. run your project.

# Technologies Postmortem:

find The doc file "Technologies Postmortem.doc" in the project

## Author
Akhilesh Kumar<akhileshcoder@gmail.com>
