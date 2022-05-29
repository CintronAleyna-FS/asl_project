'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await Promise.all([
      queryInterface.addColumn(
        'Products',
        'slug',
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'Products',
        'description',
        {
          type: Sequelize.TEXT('long'),
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'Products',
        'is_published',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return Promise.all([
      queryInterface.removeColumn('Products', 'slug'),
      queryInterface.removeColumn('Products', 'description'),
      queryInterface.removeColumn('Products', 'is_published'),
    ]);
  }
};
