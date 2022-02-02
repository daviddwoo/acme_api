const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');
const { STRING } = Sequelize;

const Product = conn.define('product', {
  name: STRING
});

const syncAndSeed = async() => {
  await conn.sync({force: true});
  await Product.create( {name: 'foo'})
  await Product.create( {name: 'bar'})
}

module.exports = {
  syncAndSeed,
  models: {
    Product
  }
}