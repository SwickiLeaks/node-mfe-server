import { Controller, Get, Render } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CustomLoggerService } from './atlas/core/logger/logger.service';

@Controller(['*'])
export class AppController {
  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setContext(AppController.name);
  }

  /**
   * Renderer for the index page
   */
  @Get()
  @Render('index')
  index(): Observable<any> {
    return of({
      title: 'MFE Server',
      message: 'Hello from MFE Server',
    });
  }
}
