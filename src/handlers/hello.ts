import { APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent): Promise<any> => {
  return new Promise((resolve, reject) => resolve({
    statusCode: 200,
    body: "Hello, world!"
  }));
};