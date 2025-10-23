const request = require('supertest');
const app = require('../src/app');

test('GET / should return greeting message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toContain('Hello Jenkins CI Pipeline');
});

