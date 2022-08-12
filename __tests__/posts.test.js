const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const agent = request.agent(app);

jest.mock('../lib/services/github');

describe('post routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  afterAll(() => {
    pool.end();
  });

  it('#GET /api/v1/posts shows all posts for users', async () => {
    await agent.get('/api/v1/github/login');
    const res = agent.get('/api/v1/posts');
    expect(res.body.length).toEqual(2);
    console.log(res.body[0]);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      content: expect.any(String),
    });
  });


});

