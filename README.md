# Lambda Microservice Template
Microservice are designed to be small, easy to deploy and fast to create without the overhead of setting up.
This template is design to solve just that!

## Features
- Utilising an existing proven and community driven serverless framework
- Write Lambda using ES6/7 with Webpack bundling
- Can run and test locally without having an AWS account
- Easily integrate with any CI platforms
- Hot reload and server side debugging

## Getting started
0. Fork or clone this repo
1. `npm i -g serverless` to install serverless to your global npm
2. Run `yarn` to install all the required modules
3. Add your function(s) into the `functions` folder
4. Add those function(s) to `webpack.config.js` entry
5. Update the `serverless.yml` functions section to match with the changes
6. Run `yarn start` to run all the functions locally
7. Open the browser and navigate to the lambda function (eg. [http://localhost:8000/first](http://localhost:8000/first))

## Deploying your functions to AWS
This is currently being setup through circleci to deploy automatically on merge to the dev and master branch
If you however want to manually deploy it, then you'll need the following
1. [AWS credential setup](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
2. `serverless deploy --stage test --region ap-southeast-1` to deploy.
Alternatively, `yarn bundle` to package the lambda functions into `dist` folder

## Contribute are welcome

## Todo
- [ ] More documentation
    - [ ] Quick start
    - [ ] Working with Dynamodb
    - [ ] Serverless configuration
    - [ ] AWS deploy/release
    - [ ] More examples
    
##### Look out for other examples that spawn from this template
- [ ] Dynamodb examples
- [ ] Scheduler examples
- [ ] IoT examples
- [ ] Kinesis example
- [ ] Graphql examples
- [ ] Machine Learning

###### More details can be found at
- [serverless](https://serverless.com/framework/docs/)
- [serverless-webpack](https://github.com/elastic-coders/serverless-webpack)
