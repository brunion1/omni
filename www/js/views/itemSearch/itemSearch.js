function itemSearchController($scope, walmartServices, bestbuyServices, $state, $filter){
	$scope.searchString = '';
	$scope.items = [];
    $scope.init = init;
    $scope.itemSearch = itemSearch;
    $scope.callServices = callServices;
    $scope.addToList = addToList;
    
    $scope.$on('$ionicView.enter', $scope.init);
    
    function init(){
        $scope.items = [];
        if($state.params.searchString){
           $scope.callServices($state.params.searchString);
        }
        else{
            
        }
    };
    
    function itemSearch(searchString){
        if($scope.searchString){
        }else{
        }
    };
    
	function callServices(searchString){
		$scope.items = [];
		walmartServices.searchItem({
			searchString : searchString,
			success : function(itemList){
				$scope.addToList(itemList);
			},
			error : function(response){
				console.log(response);
			}
		});
		bestbuyServices.searchItem({
			searchString : searchString,
			success : function(itemList){
			//	$scope.addToList(itemList);
			},
			failure : function(response){
				console.log(response);
			}
		})
	};
    
    function addToList(itemArray){
        angular.forEach(itemArray, function(item){
            var found = $filter('filter')($scope.items, {upc: item.upc}, true);
            if(found.length > 0){
                var itemObject = found[0];
                var store = new Store({
                    name : item.name,
                    price : item.price
                });
                itemObject.stores.push(store);
            }
            else{
               $scope.items.push({
                    upc             : item.upc,
                    title           : item.title,
                    description     : item.description,
                    thumbnailImage  : item.imageUrl,
                    stores      : [{
                        price       : item.price,
                        storeName   : item.storeName,
                        url         : item.url
                    }]
               });
            }
        });
        console.log($scope.items);
    }
};

omniApp.controller('itemSearchController', itemSearchController);