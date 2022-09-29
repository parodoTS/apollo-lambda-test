# AWS SAM

When using SAM to deploy apps, it automatically creates a S3 bucket to store all the Cloud Formation stacks that you deploy, something like this:

![template1-designer (4)](https://user-images.githubusercontent.com/100789868/169523547-7a465a88-4c12-48cb-9c86-c64a0480f0c3.png)

Cloud Formation template available [here](https://github.com/parodoTS/apollo-lambda-test/edit/main/sam/CloudFormation/template.yaml).

You can change this default settings:

![image](https://user-images.githubusercontent.com/100789868/169539268-b9286c7a-c85e-4025-b88a-249cc70f67e4.png)

The samconfig.toml contains the settings for the deployment (such as the region, some checks...)

### Implementations:

[API GW + Lambda](https://github.com/parodoTS/apollo-lambda-test/tree/main/sam/APIGW%2Blambda))

[Lambda URL](https://github.com/parodoTS/apollo-lambda-test/tree/main/sam/LambdaURL))
