(function () {
   'use strict';

   // así como 'controller()' crea controladores, usamos factory()' para crear una fábrica
   angular.module('people').factory('peopleFactory', peopleFactory);

   peopleFactory.$inject = ['$http'];

   function peopleFactory($http) {

      var algo = {
         nombre: 'Luna'
      };

       return {
           getPeople: getPeople
       }

       function getPeople()
       {
           return $http.get('server/MOCK_DATA.json').then(function(response){
               return response;
           }, function(error){
               return error;
           });
       }

   }

}());