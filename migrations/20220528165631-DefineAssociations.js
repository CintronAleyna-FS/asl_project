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
        'Variants',
        'slug',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Variants',
        'description',
        {
          type: Sequelize.TEXT('long'),
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Variants',
        'inventory',
        {
          type: Sequelize.INTEGER,
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
     return Promise.all([
      queryInterface.removeColumn('Variants', 'slug'),
      queryInterface.removeColumn('Variants', 'description'),
      queryInterface.removeColumn('Variants', 'inventory'),
    ]);
  }
};
