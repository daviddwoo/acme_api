const { expect } = require('chai');

const app = require('supertest')(require('../app'))
const { syncAndSeed } = require('../db')

describe('Routes', () => {
  beforeEach(() => syncAndSeed());
  describe('GET /', () => {
    it('shows info about api', async() => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme API')
    })
  })
  describe('GET /api/products', () => {
    it('returns products', async() => {
      const response = await app.get('/api/products');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(2);
    })
  })
})