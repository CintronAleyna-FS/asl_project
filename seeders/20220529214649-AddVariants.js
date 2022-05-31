// xxxxx-AddVariants.js
'use strict';
// Reusable Description
const description = `Super soft, cuddly plush toys. Cuddle them, collect them, gift them and use them as pillows!`
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'Blue Bird', slug: 'blue-bird', description, price: 50.78, productId: 1, inventory: 5, createdAt, updatedAt  },
      { id: 2, title: 'Brown Snake', slug: 'brown-snake', description, price: 50.78, productId: 1, inventory: 24, createdAt, updatedAt  },
      { id: 3, title: 'Dog', slug: 'dog', description, price: 50.78, productId: 1, inventory: 15, createdAt, updatedAt  },
      { id: 4, title: 'Wolf', slug: 'wolf', description, price: 50.78, productId: 1, inventory: 10, createdAt, updatedAt  },
      { id: 5, title: 'Fox', slug: 'fox', description, price: 50.78, productId: 1, inventory: 15, createdAt, updatedAt  },
      { id: 6, title: 'Strawberry', slug: 'strawberry', description, price: 35.78, productId: 2, inventory: 20, createdAt, updatedAt  },
      { id: 7, title: 'Cupcake', slug: 'cupcake', description, price: 35.78, productId: 2, inventory: 10, createdAt, updatedAt  },
      { id: 8, title: 'Icecream Sandwich', slug: 'icecream-sandwich', description, price: 35.78, productId: 2, inventory: 7, createdAt, updatedAt  },
      { id: 9, title: 'Fries', slug: 'fries', description, price: 35.78, productId: 2, inventory: 34, createdAt, updatedAt  },
      { id: 10, title: 'Mickey Mouse', slug: 'mickey-mouse', description, price: 95.78, productId: 3, inventory: 3, createdAt, updatedAt  },
      { id: 11, title: 'Toys Story Alien', slug: 'alien', description, price: 89.78, productId: 3, inventory: 22, createdAt, updatedAt  },
      { id: 12, title: 'Minnie Mouse', slug: 'minnie-mouse', description, price: 100.78, productId: 3, inventory: 11, createdAt, updatedAt  },
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};