'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     queryInterface.changeColumn(
      'Products',
      'is_published',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     queryInterface.changeColumn(
      'Products',
      'is_published',
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
    )
  }
};
