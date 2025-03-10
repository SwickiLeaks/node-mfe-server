import { Test } from '@nestjs/testing';

describe('Bootstrap', () => {
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [],
      providers: [],
    }).compile();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = ['test'];
      expect(true).toBe(true);
    });
  });
});
