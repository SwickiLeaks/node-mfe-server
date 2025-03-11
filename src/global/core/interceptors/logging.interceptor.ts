/**
 * Copyright 2025
 */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Scope } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CustomLoggerService } from '../logger/logger.service';

@Injectable({ scope: Scope.REQUEST })
export class LoggingInterceptor implements NestInterceptor {
  private logger: CustomLoggerService;
  constructor() {
    this.logger = new CustomLoggerService();
    this.logger.setContext(LoggingInterceptor.name);
  }

  /**
   * Intercepts the request and response phases of the application
   * @param context ExecutionContext object that contains the request and response objects
   * @param next CallHandler object that contains the next() method
   * @returns {Observable<any>} An observable that resolves when the request and response phases are complete
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const requestId = Date.now();
    const contextType = context.getType(); // 'http', 'rpc', or 'ws'
    const requestUrl = context.switchToHttp().getRequest().url;

    this.logger.log(`REQUEST ID [${requestId}] ${contextType} - ${requestUrl}`);

    return next.handle().pipe(
      tap(() => {
        this.logger.log(`RESPONSE REQUEST ID [${requestId}] ${contextType} - ${requestUrl}`);
      }),
    );
  }
}
