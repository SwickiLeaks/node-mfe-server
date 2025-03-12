import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  constructor() {}

  public async healthCheck(): Promise<any> {
    try {
      return 'Hello :)';
    } catch (error: any) {
      throw error;
    }
  }
}
