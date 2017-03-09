(function () {
    'use strict';

    angular.module("sportsStore")
    .controller("sportsStoreCtrl", function ($scope) {
        $scope.data = {
            products: [
            { name: "Prod1", description: "Prod1", category: "Cat1", price: 100 },
            { name: "Prod2", description: "Prod2", category: "Cat2", price: 110 },
            { name: "Prod3", description: "Prod3", category: "Cat1", price: 120 },
            { name: "Prod4", description: "Prod4", category: "Cat3", price: 130 }]
        };
    })();