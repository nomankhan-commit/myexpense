'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
*/
      Example:
      return queryInterface.bulkInsert('roles', [
        {
          roles: 'ony view',
          createdAt:new Date(),
          updatedAt:new Date(),
         
      },
      {
        roles: 'can update',
        createdAt:new Date(),
        updatedAt:new Date(),
       
    },
    
    
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
  }
};
