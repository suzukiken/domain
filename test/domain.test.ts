import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Domain from '../lib/domain-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Domain.DomainStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
