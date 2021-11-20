var ngApp = angular.module('myApp', []);

ngApp.controller('myController', function ($scope, $http) {

  $scope.msg = '¡Hola Inmodigital! ';



  $scope.getData = function () {
    return 'qubernet';
  }

  //Logueo en la aplicacion
  $scope.login = function () {

    $http
      .post("http://localhost:9000/login", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};

        if (response.data == "logueado") {
          $scope.todos = response.data;
          window.location = '/inmuebles.html';
          return
        } else {
          $scope.errorMessage = 'Credenciales invalidas'
        }

      })

    //window.location = '/inmuebles.html';
    //return

  };


  $scope.createTodo = function () {
    $http
      .post("http://localhost:9000/insertar", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response.data);
      })

    //   alert($scope.tel+" "+$scope.cedula)
  };



  $scope.RegistrarInmueble = function () {

    $http
      .post("http://localhost:9000/insertarInmueble", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.message = response.data;
        console.log(response);
      })

  }



  $scope.RegistrarUbicacion = function () {

    $http
      .post("http://localhost:9000/RegistrarUbicacion", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.message = response.data;
        console.log(response);
      })

  }

  onload = function () {
    $http.get("http://localhost:9000/listadoUbicaciones").then(function succesCallback(response) {
      $scope.ubicaciones = response.data;
    })

  }


})



