(function() {
    'use strict';

    angular.module('Lunch', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.check = false;
        $scope.checkLunch = function() {
            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.check = true;
                $scope.empty = false;
                var arrayofDishes = $scope.dishes.split(',');
                var arrayofDishesWithoutEmptys = arrayofDishes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrayofDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();
