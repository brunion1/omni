function bestbuyServices($http, key, dataServices){
	return {
		searchItem : function(options){
            var keyArr = options.searchString.split(" ");
            var searchString = "";
            for(var i = 0; i < keyArr.length; ++i){
                if(i === 0){
                    searchString += "search=" + keyArr[i];
                }
                else{
                    searchString += "&search=" + keyArr[i];
                }
            }

			var url = "http://api.bestbuy.com/v1/products(" + searchString + "*)?show=upc,name,salePrice,shortDescription,image,url&pageSize=10&page=5&apiKey=" + key.getBestBuyKey() + "&format=json"
			var req = {
				method : 'GET',
				url: url
			}
			$http(req).then(function(response){
                var itemList = [];
                
                angular.forEach(response.data.products, function(item){
                        itemList.push(dataServices.buildItem(
                            item.upc, 
                            item.name, 
                            item.shortDescription, 
                            "Best Buy", 
                            item.salePrice, 
                            item.url, 
                            item.image));
                });
            
				options.success(itemList);	
                
			}, function(){
				options.error(data);	
			});
		}
	}	
};

omniApp.factory('bestbuyServices', bestbuyServices);