(function() {
    'use strict';

    angular
        .module('questMioApp')
        .controller('SchemaFieldDetailController', SchemaFieldDetailController);

    SchemaFieldDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'SchemaField', 'Schema1'];

    function SchemaFieldDetailController($scope, $rootScope, $stateParams, previousState, entity, SchemaField, Schema1) {
        var vm = this;

        vm.schemaField = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('questMioApp:schemaFieldUpdate', function(event, result) {
            vm.schemaField = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
