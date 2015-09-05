function dataServices(){
	return {
		buildItem : function(upc, title, description, storeName, price, url, imageUrl){
            return {
                upc         : upc,
                title       : title,
                description : description,
                storeName   : storeName,
                price       : price,
                url         : url,
                imageUrl    : imageUrl
            }
		}
	}	
};

omniApp.factory('dataServices', dataServices);