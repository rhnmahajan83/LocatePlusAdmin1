/**
 * Created by Rohan on 3/22/2018.
 */
var app = angular.module('locplus', ['ui.router','ngMaterial', 'ngStorage'])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/')
    $urlRouterProvider.when('/dashboard', '/dashboard/category')

    $stateProvider

       .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .state('dashboard.category', {
            url: '/category',
            templateUrl: 'category/category.html',
            controller: 'categoryCtrl'
        })
        .state('dashboard.facility', {
            url: '/facility',
            templateUrl: 'facility/facility.html',
            controller: 'facilityCtrl'
        })
        .state('dashboard.place', {
            url: '/place',
            templateUrl: 'place/place.html',
            controller: 'placeCtrl'
        })
        .state('dashboard.remove-place', {
            url: '/place',
            templateUrl: 'place/removePlace.html',
            controller: 'removePlaceCtrl'
        })
        .state('dashboard.udid', {
            url: '/udid',
            templateUrl: 'udid/udid.html',
            controller: 'udidCtrl'
        })
        .state('dashboard.photo', {
            url: '/photo',
            templateUrl: 'photo/photo.html',
            controller: 'photoCtrl'
        })
})