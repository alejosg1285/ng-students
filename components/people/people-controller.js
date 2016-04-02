(function () {
   'use strict';

   angular.module('people').controller('PeopleController', PeopleController);

   // para usar una fábrica siemplemente la inyectamos
   PeopleController.$inject = ['peopleFactory'];

   function PeopleController(peopleFactory) {

      var self = this;

      peopleFactory.getPeople().then(function(response){
         self.people = response.data;
      });

   }

}());