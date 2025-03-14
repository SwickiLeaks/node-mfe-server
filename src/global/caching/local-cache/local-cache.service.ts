import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class LocalCacheService {
  constructor(@Inject('CACHE_MANAGER') private nestCacheManager: Cache) {}

  public async set<T>(data: any): Promise<T> {
    return await this.nestCacheManager.set<T>('mfeContextData', data);
  }

  public async get<T>(key: string): Promise<T | null> {
    return await this.nestCacheManager.get<T>(key);
  }

  public async del(key: string): Promise<void> {
    await this.nestCacheManager.del(key);
  }
}
