const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/github');

describe('why-i-autha routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  afterAll(() => {
    pool.end();
  });

  it('should redirect to github oauth page upon login', async () => {
    const res = await request(app).get('/api/v1/github/login');
    console.log(res.header.location);
    expect(res.header.location).toEqual(expect.any(String));
  });


  // it('should login and redirect users to /api/v1/github/dashboard', async () => {
  //   const res = await request
  //     .agent(app)
  //     .get('/api/v1/github/callback?code=42')
  //     .redirects(1);

  //   expect(res.body).toEqual({
  //     id: expect.any(String),
  //     username: 'test_user',
  //     email: 'abc@123.com',
  //     avatar: expect.any(String),
  //     iat: expect.any(Number),
  //     exp: expect.any(Number),
  //   });
  // });
});
