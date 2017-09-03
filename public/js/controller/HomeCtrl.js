angular.module('app').controller('homeCtrl',['$scope', '$state', homeController])

function homeController($scope, $state){
  $scope.mensagem = "mensagem =]";

  $scope.goPagina2 = function(){
    $state.go('pagina2');
  }
}
