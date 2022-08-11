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
    console.log(res.header.location);
    expect(res.header.location).toMatch(/https:\/\/github.com\/login\/oauth\/authorize\?client_id[\w\d]+&scope=user&redirect_uri=http:\/\/localhost:7890\/api\/v1\/posts/i);
  });


});

