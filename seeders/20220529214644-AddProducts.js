// xxxxx-AddProducts.js
'use strict';
// Reusable Description
const description = `Super soft, cuddly plush toys Cuddle them, collect them, gift them and use them as pillows!`
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'Animal Squishmellow', 
        slug: 'animal-squishmellow', 
        price: 50.78, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'Food Squishmellow', 
        slug: 'food-squishmellow', 
        price: 35.78, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 3, 
        title: 'Disney Character Squishmellow', 
        slug: 'disney-character-squishmellow', 
        price: 89.78, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};
