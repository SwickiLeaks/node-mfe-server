import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class LocalCacheService {
  constructor(@Inject('CACHE_MANAGER') private nestCacheManager: Cache) {}

  public async set(data: any): Promise<any> {
    return await this.nestCacheManager.set('mfeContextData', data);
  }

  public async get(key: string): Promise<any> {
    return await this.nestCacheManager.get(key);
  }
}
