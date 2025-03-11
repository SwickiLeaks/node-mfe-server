import { Controller, Get, Render } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { CustomLoggerService } from './global/core/logger/logger.service';
import { TemplateData } from './template-data/template-data.model';
import { TemplateDataService } from './template-data/template-data.service';

@Controller(['/'])
export class AppController {
  constructor(
    private readonly logger: CustomLoggerService,
    private templateDataService: TemplateDataService,
  ) {
    this.logger.setContext(AppController.name);
  }

  /**
   * Renderer for the index page
   */
  @Get()
  @Render('index')
  index(request: Request): Observable<TemplateData> {
    return from(this.templateDataService.makeTemplateData(request));
  }
}
