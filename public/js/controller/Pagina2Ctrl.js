angular.module('app').controller('pagina2Ctrl',['$scope', '$state', pagina2Controller])

function pagina2Controller($scope, $state){
  $scope.mensagem = "mensagem da página 2";
}
