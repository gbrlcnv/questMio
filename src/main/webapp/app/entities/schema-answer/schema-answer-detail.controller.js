(function() {
    'use strict';

    angular
        .module('questMioApp')
        .controller('SchemaAnswerDetailController', SchemaAnswerDetailController);

    SchemaAnswerDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'SchemaAnswer', 'Schema1', 'Person', 'SchemaAnswerField'];

    function SchemaAnswerDetailController($scope, $rootScope, $stateParams, previousState, entity, SchemaAnswer, Schema1, Person, SchemaAnswerField) {
        var vm = this;

        vm.schemaAnswer = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('questMioApp:schemaAnswerUpdate', function(event, result) {
            vm.schemaAnswer = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
