# Testing Apollo Server on Lambda function

This repo contains the info related to the project developed in order to test the implementation of an Apollo Server running in a Lambda function and the [app](https://github.com/parodoTS/apollo-lambda-test/tree/main/src) itself. We are also going to use this app to test different serverless Frameworks.

> GraphQL is an application-level query language that helps clients and
> servers communicate by establishing a common protocol for queries. It
> represents an alternative to the REST style: unlike REST, GraphQL
> gives the client, not the server, the power to define what kind of
> data will be included in the response to its query.
> 
> GraphQL allows clients to efficiently query multiple backend
> applications with a single endpoint. Additionally, GraphQL introduces
> the concept of subscriptions for real-time updates. With
> subscriptions, a client can tell a server which data it wants to get
> pushed, for example via a WebSocket connection as seen in this post.

[Reference](https://aws.amazon.com/es/blogs/opensource/using-apollo-server-on-aws-lambda-with-amazon-eventbridge-for-real-time-event-driven-streaming/)

[Apollo Server](https://www.apollographql.com/docs/apollo-server/) is an open source GraphQL server compatible with all popular JavaScript frameworks and deployable in serverless environments (as in this case).

## Implementation with API Gateway + Lambda function:
The implementation consists of an Apollo Server with three different datasources; another GraphQL API (implemented using AppSync, with api-key authentication), a Lambda function, and a RDS (Aurora Serverless with PostgreSQL with RDS Data Endopoint enabled), just to show the wide variety of options allowed.

![apollolambdatest drawio](https://user-images.githubusercontent.com/100789868/168018874-f492e7ba-5a2a-4665-949a-3a719347ad29.png)

> The three datasources used, belongs to a previously deployed project (an [Appsync test implementation](https://github.com/parodoTS/PCMT25))

To get Apollo running in a Lambda function, we can simply use the [*apollo-server-lambda*](https://www.npmjs.com/package/apollo-server-lambda) Node.js package which helps us with some methods and clasess that we can use to define the GraphQL server.

## Implementation with Lambda Function URLs:

Lambda fucntion URLs were announced to be generally available on 6/APRIL/22.

![6250d316276dc7495b0d74a3_Untitled](https://user-images.githubusercontent.com/100789868/169300342-cec28913-ce16-4f4e-83fb-698e9fefc434.png)

> Function URLs are best for use cases where you must implement a single-function microservice with a public endpoint that doesn’t require the advanced functionality of API Gateway, such as request validation, throttling, custom authorizers, custom domain names, usage plans, or caching. For example, when you are implementing webhook handlers, form validators, mobile payment processing, advertisement placement, machine learning inference, and so on. It is also the simplest way to invoke your Lambda functions during research and development without leaving the Lambda console or integrating additional services.
> 
> Amazon API Gateway is a fully managed service that makes it easy for you to create, publish, maintain, monitor, and secure APIs at any scale. Use API Gateway to take advantage of capabilities like JWT/custom authorizers, request/response validation and transformation, usage plans, built-in AWS WAF support, and so on.

[Reference](https://aws.amazon.com/es/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices)

We are going to test this feature using different Frameworks as well.

## Frameworks:
We can use this app implementations to test different Frameworks for deploying serverless apps.

[Serverless Framework](https://github.com/parodoTS/apollo-lambda-test/tree/main/serverless)

[SAM](https://github.com/parodoTS/apollo-lambda-test/tree/main/sam)

[SST BETA](https://github.com/parodoTS/apollo-lambda-test/tree/main/sst)


## References:

[References](https://github.com/parodoTS/apollo-lambda-test/blob/main/References.md)

