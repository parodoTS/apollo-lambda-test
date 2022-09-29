### Deploying:
After running:

![Sin título](https://user-images.githubusercontent.com/100789868/191951493-bf4cb0c6-d91e-4e7c-9023-c2f7dfa99627.png)

![Sin título](https://user-images.githubusercontent.com/100789868/191951657-c8521438-54e5-48fb-a725-5a6cf46105f1.png)


In AWS we can see now the resources deployed (CloudFormation Stack):

![template1-designer (3)](https://user-images.githubusercontent.com/100789868/169522260-9706d674-c903-4aeb-a50d-ca1e04cb31c1.png)

![image](https://user-images.githubusercontent.com/100789868/169522196-2d9604fd-f395-476e-9e24-cf4003b46e92.png)


The number of resources deployed compared with the Serverless Framework is lower because SAM deploys the bucket outside the stack (as said [here](https://github.com/parodoTS/apollo-lambda-test/edit/main/sam/README.md)).
