# Welcome to your CDK TypeScript project!

This is a CDK project to showcase AppFlow. More details on blog post.
This example uses Trend Micro Cloud One Workload Security as input for AppFlow.

## How to use

Make the following changes to `bin/app_flow_example.ts`:
 * `existingAppFlowBucket`  Name of current existing output bucket for your AppFlow
 * `regionToDeploy`         It should be the same region as above Bucket.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
