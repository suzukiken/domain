# CDK Project to create SSL certs for microservices 

## Resources to be created

* SSL Certificate
  * wildcard certificate for a domain
  * Regions
    * ap-northeast-1
    * us-east-1
* CFNOutput
  * ACM arn
  * HostedZone Id
    * Parameter names are defined in cdk.json
* SSM Parameters
  * ACM arn
    * Parameter names are defined in cdk.json

(diagram)[https://diagram.figmentresearch.com/domain]

## Purpose

To place ACM arn at SSM param store which will be used other CDK projects.

Examples of the resources which the other CDK projects creates:

  * CloudFront for S3 Origin
  * Cognito Userpool Domain
  * ApiGateway Custom Domain

### How to use the resources which this CDK project creates

Example Typescript code. This  if `acmarn_ssm_param` is defined in cdk.json.

cdk.json
```json
"acmarn_ssm_param": "/domain/examplecom/wildcard/useast1/acmarn"
```

CDK stack 
```Typescript
const acmarn_ssm_param = this.node.tryGetContext('acmarn_ssm_param')
const acmarn = ssm.StringParameter.valueFromLookup(this, acmarn_ssm_param)
const cert = acm.Certificate.fromCertificateArn(this, 'Certificate', acmarn)
```

## Commands

* `npm install`
* `cdk deploy`
* `aws ssm get-parameters-by-path --path /v2/domain --recursive`
* `npm run diagram`

## Parameters

These parameters are defined in cdk.json 

* domain name
* SSM Parameter name
* Output name

