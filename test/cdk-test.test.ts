import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as CdkTest from '../lib/cdk-test-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-test-stack.ts
test('Lambda Created', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new CdkTest.CdkTestStack(app, 'MyTestStack');
    // THEN
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::Lambda::Function', Match.objectLike({
    Handler: 'index.handler'
  }));
});
