##Overview of CI integration - Workflow file structure

Install dependencies with yarn (if yarn is not available install yarn)
In package.json file create custom scripts:
“build” : “rollup -c“ - to compile application
“start“ : “http-server“ - puts http server to serve the app
“test“ : “cypress run“ - runs test
“cypress : open“ : “cypress open“ - starts the cypress runner
We need to run the command yarn build - to compile the app
It will create a rollup.config.js file
If there is an error please run the command 
yarn rollup --dev
yarn start - will start http server
Create workflow file:
test-app.yaml
name: Cypress Smoke Test    - workflow name
on: [push]      - trigger on push
jobs: 
      cypress-run:     - can be any name of the action (this is when the action starts)
      runs-on: ubuntu-latest     
      steps:      - describes what our action is doing
                -name: Checkout    - action maintained by GitHub - checks out our repo and puts it into the pipeline so the workflow can access it
                 uses: actions/checkout@v2 - utilize the cypress GitHub  action that is maintained by the cypress team. This will install all our npm dependencies and run the cypress test
                -name: Cypress run 
                  uses: cypress-io/github-action@v2
                  with:
                           build: rpm run build   - we are telling to run our build and start npm scripts 
                           npm: start
