#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppFlowExampleStack, AppFlowExampleProps } from '../lib/app_flow_example-stack';


// Adjust manually
const regionToDeploy = 'us-east-2';
const existingAppFlowBucket = 'cloud-one-appflow';

const app = new cdk.App();
const props: AppFlowExampleProps = {
  appFlowBucket: existingAppFlowBucket,
  env: {
    region: regionToDeploy
  } 
}
new AppFlowExampleStack(app, 'AppFlowExampleStack', props);
