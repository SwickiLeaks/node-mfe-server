import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { CustomLoggerService } from '../core/logger/logger.service';

/**
 * Service for handling application shutdown
 * @module ShutdownService
 */
@Injectable()
export class ShutdownService implements OnApplicationShutdown {
  /**
   * Constructor for the ShutdownService
   * @param none
   */
  constructor(private readonly logger: CustomLoggerService) {
    this.logger.setContext(ShutdownService.name);
  }

  /**
   * Responsible for handling application shutdown
   * @param signal - The signal that triggered the shutdown
   */
  async onApplicationShutdown(signal?: string) {
    this.logger.log(`Shutdown Signal: ${signal}`, ShutdownService.name);
  }
}
