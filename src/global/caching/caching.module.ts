import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { LocalCacheModule } from './local-cache/local-cache.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [LocalCacheModule, RedisModule, NestCacheModule.register({ isGlobal: true })],
  exports: [LocalCacheModule, RedisModule],
})
export class CachingModule {}
