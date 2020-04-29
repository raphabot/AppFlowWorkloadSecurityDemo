import * as cdk from '@aws-cdk/core';
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda'
import { Bucket } from '@aws-cdk/aws-s3';

export interface AppFlowExampleProps extends cdk.StackProps {
  appFlowBucket: string
}

export class AppFlowExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: AppFlowExampleProps) {
    super(scope, id, props);

    // Creating the bucket that will receive the processed data.
    const destinationBucket = new Bucket(this, 'destinationBucket');

    // Referencing the source bucket for this process, the existin destination bucket off the AppFlow flow.
    // This is necessary in order to give the Lambda read access to this bucket.
    const sourceBucket = Bucket.fromBucketName(this, 'sourceBucket', props.appFlowBucket);
  
    // Defining the Lambda itself. 
    const lambda = new Function(this, 'lambda', {
      runtime: Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: Code.fromAsset('./lib/lambda'),
      environment: {
        DESTINATION_BUCKET: destinationBucket.bucketName
      }
    });

    // Giving the lambda permission to write to destination bucket and read from source bucket.
    destinationBucket.grantPut(lambda);
    sourceBucket.grantRead(lambda);

  }
}
