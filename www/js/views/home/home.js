function homeController($scope, $state){
	$scope.searchString = '';
    $scope.itemSearch = function(searchString){
        if(searchString){
            $state.go("itemSearch",{searchString: searchString});
        }else{
            $state.go("itemSearch",{searchString: "tv"});
        }
    };
};

omniApp.controller('homeController', homeController);