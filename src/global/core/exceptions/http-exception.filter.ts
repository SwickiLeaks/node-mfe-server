/**
 * Copyright 2025
 */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constuctor() {}

  catch(originalError: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const isHttpException = originalError instanceof HttpException;
    const isPatchError = originalError.constructor.name === 'PatchError';

    const status = isHttpException ? (originalError as HttpException).getStatus() : 500;
    const error =
      isPatchError || !isHttpException ? originalError : ((originalError as HttpException).getResponse() as Error);

    if (!(status >= 400 && status < 500)) console.log(`Uncaught API Exception, Message: ${error.message}`);
  }
}
