'use strict';

/**
 * @ngdoc overview
 * @name ryanairApp
 * @description
 * # ryanairApp
 *
 * Main module of the application.
 */
var ryanairApp = angular.module('ryanairApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'daterangepicker',
    'ui.bootstrap'
  ]);

ryanairApp.config(function ($routeProvider, RestangularProvider) {




    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });


    /** Configuracion Restangular **/

    RestangularProvider.setBaseUrl('https://ryanair-test.herokuapp.com/api/');
    RestangularProvider.setJsonp(true);
    RestangularProvider.setDefaultRequestParams('JSONP', {callback: 'JSON_CALLBACK'});



  });
