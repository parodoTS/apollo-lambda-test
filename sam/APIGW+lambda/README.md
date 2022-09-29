# SAM
### Building

Building the project and validating the template:

![image](https://user-images.githubusercontent.com/100789868/169084680-65c7988d-70e7-4c2d-b00b-760607d02d3b.png)

### Deploying:
After running:


![Sin título](https://user-images.githubusercontent.com/100789868/191950847-b79c492a-12fe-4780-b26f-5b56384c132f.png)

![Sin título](https://user-images.githubusercontent.com/100789868/191951194-ef707aa6-f9c6-4fb5-8936-871320ed9aec.png)


In AWS we can see now the resources deployed (CloudFormation Stack):

![image](https://user-images.githubusercontent.com/100789868/169085322-11990ae2-3ddd-4373-aebb-2ace4ea4fec6.png)


![template1-designer (1)](https://user-images.githubusercontent.com/100789868/169085789-c3b88642-241f-4244-a921-8bfc84b19b31.png)

The number of resources deployed compared with the Serverless Framework is lower because SAM deploys the bucket outside the stack (as said [here](https://github.com/parodoTS/apollo-lambda-test/edit/main/sam/README.md)).


### Deletion 
In order to delete the stack:

![image](https://user-images.githubusercontent.com/100789868/169087145-c04d3dfd-ad2e-40c7-9860-ead05cf28dc1.png)
