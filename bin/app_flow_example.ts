#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppFlowExampleStack } from '../lib/app_flow_example-stack';

const app = new cdk.App();
new AppFlowExampleStack(app, 'AppFlowExampleStack');
