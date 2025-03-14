import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { LocalCacheModule } from './local-cache/local-cache.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [NestCacheModule.register({ isGlobal: true, ttl: 60 * 5, max: 1000 }), LocalCacheModule, RedisModule],
  exports: [LocalCacheModule, RedisModule],
})
export class CachingModule {}
