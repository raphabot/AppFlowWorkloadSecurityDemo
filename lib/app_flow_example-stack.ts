import * as cdk from '@aws-cdk/core';
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda'
import { Bucket } from '@aws-cdk/aws-s3';

export interface AppFlowExampleProps extends cdk.StackProps {
  appFlowBucket: string
}

export class AppFlowExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: AppFlowExampleProps) {
    super(scope, id, props);

    const destinationBucket = new Bucket(this, 'destinationBucket');

    const sourceBucket = Bucket.fromBucketName(this, 'sourceBucket', props.appFlowBucket);

    const lambda = new Function(this, 'lambda', {
      runtime: Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: Code.fromAsset('./lib/lambda'),
      environment: {
        DESTINATION_BUCKET: destinationBucket.bucketName
      }
    });

    destinationBucket.grantPut(lambda);
    sourceBucket.grantRead(lambda);

  }
}
