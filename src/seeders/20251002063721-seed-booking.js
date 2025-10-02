'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookings', [
      {
        flightId: 6,
        userId: 1,
        status: 'initiated',
        noOfSeats: 1,
        totalCost: 999,
        createdAt: new Date('2025-10-02T04:50:44'),
        updatedAt: new Date('2025-10-02T04:50:44'),
      },
      {
        flightId: 6,
        userId: 1,
        status: 'booked',
        noOfSeats: 1,
        totalCost: 9999,
        createdAt: new Date('2025-10-02T04:52:14'),
        updatedAt: new Date('2025-10-02T04:52:14'),
      },
    ]
      , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookings', {
      id: { [Sequelize.Op.in]: [1, 2] }
    }, {});
  }
};
