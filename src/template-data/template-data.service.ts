/**
 * Copyright 2025
 */
import { Injectable } from '@nestjs/common';
import { AppContextService } from '../app-context/app-context.service';
import { CustomLoggerService } from '../global/core/logger/logger.service';
import { TemplateData } from './template-data.model';

@Injectable()
export class TemplateDataService {
  constructor(
    private readonly logger: CustomLoggerService,
    private appContextService: AppContextService,
    // private localCacheService: LocalCacheService,
  ) {
    this.logger.setContext(TemplateDataService.name);
  }

  /**
   * Template data for the index page.  Contains data that needs to flow to client side resources
   *
   * @param request
   * @returns
   */
  public async makeTemplateData(request: Request): Promise<TemplateData> {
    this.logger.log('Generating template data');
    const mfeContextData = await this.appContextService.getMfeContext(request);
    // await this.localCacheService.set(mfeContextData);
    return {
      title: 'MFE Server',
      message: 'Node Single-Spa Microfrontend Server',
      mfeAccessToken: {
        accessToken: 'access-token',
        refreshInterval: 300000,
      },
      domainType: 'domainType',
      mfeContextData: mfeContextData,
    };
  }
}
