import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Client = createParamDecorator(
  (field: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if(field) {

        if (request.client[field]) {
          return request.client[field];
        } else {
          return null;
        }

    } else {

      return request.client;
    }
  },
);
