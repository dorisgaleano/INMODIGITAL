var ngApp = angular.module('myApp', []);

ngApp.controller('myController', function ($scope, $http) {

  $scope.msg = '¡Hola Inmodigital! ';



  $scope.getData = function () {
    return 'qubernet';
  }
  $scope.createTodo = function () {
    $http
      .post("http://localhost:9000/insertar", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response);
      })

    //   alert($scope.tel+" "+$scope.cedula)
  };
})


onload = function () {
  document.getElementById('lbtnTest').onclick = function () {
    alert("Hola inmodigital")
    // Obtenga la aplicación Angular a través del controlador
    var appElement = document.querySelector('[ng-controller=myController]');
    // Obtenga la variable $ scope
    var $scope = angular.element(appElement).scope();

    // Llama a la variable msg y cambia el valor de msg
    $scope.msg = 'Trae la variable msg';
    // La línea anterior cambió el valor de msg. Si desea sincronizar con el controlador angular, debe llamar al método $ apply ().
    $scope.$apply();
    // Llame al método getData () en el controlador
    console.log($scope.getData());
  }
}

