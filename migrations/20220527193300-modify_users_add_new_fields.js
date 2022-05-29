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
      queryInterface.changeColumn(
        'Products',
        'slug',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.changeColumn(
        'Products',
        'description',
        {
          type: Sequelize.TEXT('long'),
          allowNull: true,
        },
      ),
      queryInterface.changeColumn(
        'Products',
        'is_published',
        {
          type: Sequelize.BOOLEAN,
          allowNull: true,
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
     return await Promise.all([
      queryInterface.changeColumn(
        'Products',
        'slug',
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.changeColumn(
        'Products',
        'description',
        {
          type: Sequelize.TEXT('long'),
          allowNull: false,
        },
      ),
      queryInterface.changeColumn(
        'Products',
        'is_published',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      ),
    ]);
  }
};
