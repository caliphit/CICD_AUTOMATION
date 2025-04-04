// filepath: c:\Users\hp\Desktop\demoCICDnode\index.test.js
const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

test('GET / should return Hello World!', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello World!');
});

test('Sample test', () => {
  expect(1 + 1).toBe(2);
});