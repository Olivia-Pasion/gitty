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
    await agent.get('/api/v1/github/callback?code=42').redirects(1);
    const res = await agent.get('/api/v1/posts');
    expect(res.body[0]).toEqual({ //[0] -> reads "0"
      id: expect.any(String),
      title: expect.any(String),
      content: expect.any(String),
      gh_user_id: expect.any(String)
    });
  });

  it('#POST users should be able to add a post to the table', async () => {
    await agent.get('/api/v1/github/callback?code=42').redirects(1);
    const res = await agent.post('/api/v1/posts').send({ title: 'New Post', content: 'This is from the new post test' });
    console.log(res.body);
    expect(res.body).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      content: expect.any(String),
      gh_user_id: expect.any(String)
    });
  });
});

