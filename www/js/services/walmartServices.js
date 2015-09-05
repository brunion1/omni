function walmartServices($http, key, dataServices){
	return {
		searchItem : function(options){
			var url = "http://api.walmartlabs.com/v1/search?apiKey=" + key.getWalmartDevKey() +  "&query=" + options.searchString;
			var req = {
				method : 'GET',
				url: url
			}
			$http(req).then(function(response){
                if(response){
                    var itemList = [];
                    angular.forEach(response.data.items, function(item){
                        itemList.push(dataServices.buildItem(
                            item.upc, 
                            item.name, 
                            item.shortDescription, 
                            "Walmart", 
                            item.salePrice, 
                            item.productUrl, 
                            item.thumbnailImage));
                    });
                    options.success(itemList);	
                }
                else{
                    options.error(data);
                }
			}, function(){
				options.error(data);	
			});
		}
	}	
};

omniApp.factory('walmartServices', walmartServices);