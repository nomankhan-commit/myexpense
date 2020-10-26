'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('categories', [{
        categories: 'home',
        createdAt:new Date(),
        updatedAt:new Date(),
       
      },
      {
        categories: 'other',
        createdAt:new Date(),
        updatedAt:new Date(),
        
      }      
    ],
      
      {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('categories', null, {});
  }
};
