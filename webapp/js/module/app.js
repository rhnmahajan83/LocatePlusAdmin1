/**
 * Created by Rohan on 3/22/2018.
 */
var app = angular.module('locplus', ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/')
    $urlRouterProvider.when('/dashboard', '/dashboard/category')
})