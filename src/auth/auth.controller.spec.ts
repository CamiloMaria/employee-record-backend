/*import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from './auth.module';
import request from 'supertest';

describe('AuthController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`/auth/login (POST)`, async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        name: 'admin',
        password: 'admin',
      });

    expect(response.status).toBe(201);
    expect(response.body.access_token).toBeDefined();
  });

  afterAll(async () => {
    await app.close();
  });
});*/
