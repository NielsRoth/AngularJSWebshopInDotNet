angular.module("sportsStore")
.constant("dataUrl", "http://localhost:5500/products")
.constant("orderUrl", "http://localhost:5500/orders")
//.constant("dataUrl", "http://localhost:5500/productsxxxx")
.controller("sportsStoreCtrl", function ($scope, $http, $location, dataUrl, orderUrl, cart) {
    $scope.data = {};
    $scope.data.products = [];

    $http({
        method: 'GET',
        url: dataUrl
    }).then(function (result) {
        $scope.data.products = result.data;
    }, function (error) {
        $scope.data.error = error;
    });

    $scope.sendOrder = function (shippingDetails) {
        var order = angular.copy(shippingDetails);
        order.products = cart.getProducts();
        $http({
            method: 'POST',
            url: orderUrl,
            data: order
        }).then(function (result) {
            $scope.data.orderId = result.data.id;
            cart.getProducts().length = 0;
        }, function (error) {
            $scope.data.orderError = error;
        }).finally(function () {
            $location.path("/complete");
        });
    }
	//products: [
		//{ name: "Prod1", description: "Prod1", category: "Cat1", price: 100 },
		//{ name: "Prod2", description: "Prod2", category: "Cat2", price: 110 },
		//{ name: "Prod3", description: "Prod3", category: "Cat1", price: 120 },
		//{ name: "Prod4", description: "Prod4", category: "Cat3", price: 130 }]
	//};
});