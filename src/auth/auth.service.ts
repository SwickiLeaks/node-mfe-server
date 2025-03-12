import { Injectable } from '@nestjs/common';
import { CustomLoggerService } from '../global/core/logger/logger.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly logger: CustomLoggerService,
    // private localCacheService: LocalCacheService,
  ) {
    this.logger.setContext(AuthService.name);
  }

  public async getData(): Promise<string> {
    const data = 'hello';
    // const data = await this.localCacheService.get('mfeContextData');
    this.logger.log(`Getting Data: ${JSON.stringify(data)}`);
    return data;
  }
}
