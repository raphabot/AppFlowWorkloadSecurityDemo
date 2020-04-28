import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AppFlowExample from '../lib/app_flow_example-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AppFlowExample.AppFlowExampleStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
