angular.module('Fruite', [
    'ngRoute',
    'mobile-angular-ui',
    'mobile-angular-ui.core.activeLinks'
])
.config(function($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'home.html',
            reloadOnSearch: false,
            controller:indexController
        })
        .when('/category', {
            templateUrl: 'category.html',
            reloadOnSearch: false,
            controller:categoryController
        })
        .when('/friend', {
            templateUrl: 'friend.html',
            reloadOnSearch: false,
            controller:friendController
        })
        .when('/shopping_cart', {
            templateUrl: 'shopping_cart.html',
            reloadOnSearch: false,
            controller:shoppingCartController
        })
        .when('/me', {
            templateUrl: 'me.html',
            reloadOnSearch: false,
            controller:meController
        })
        .otherwise('/index',{
        	templateUrl:'home.html',
        	reloadOnSearch:false,
        	controller:indexController
        })
});
