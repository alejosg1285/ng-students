(function () {
   'use strict';

   angular.module('students').controller('StudentsController', StudentsController);

   // para usar una fábrica siemplemente la inyectamos
   StudentsController.$inject = ['studentsFactory', 'version'];

   function StudentsController(studentsFactory, version) {

      var self = this;

      console.log(version);
       self.version = version;

      self.students = studentsFactory.getStudents();

   }

}());