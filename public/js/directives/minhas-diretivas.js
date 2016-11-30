angular.module('minhasDiretivas', [])

.directive('meuPainel', function(){
    var ddo = {restrict: 'AE', transclude: true};

    ddo.scope = {
        titulo: '@'
    };

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});
