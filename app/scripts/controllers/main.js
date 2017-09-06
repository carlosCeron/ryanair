
/**
 * @ngdoc function
 * @name ryanairApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ryanairApp
 */
//angular.module('ryanairApp')

ryanairApp.controller('MainCtrl', function ($scope, countriesService, cheapflightService) {




  $scope.ori_des = {
    origin:'',
    destination:''
  };


  $scope.query = {
    origin:'',
    destination:'',
    init_date:'',
    end_date:''
  };

  $scope.countries = countriesService.countries();
    console.log(countriesService.countries());
    console.log(cheapflightService.cheaps());

    $scope.date_range = {
      startDate: null,
      endDate: null
    };


  $scope.limpiar = function(){
    $scope.showflight = false;
  };


  $scope.consultar = function(){
    $scope.showflight = true;

    $scope.flight = cheapflightService.cheaps();
  }

  });
