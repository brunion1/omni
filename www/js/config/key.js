function keyFactory(){
	var walmartKey = '';
	var amazonDevId = '';
	var amazonDevPublicKey = '';
	var amazonDevPrivateKey = '';
	var userId = "";
	var bestBuyKey = "";
	
	return {
		getWalmartDevKey : function(){
			return walmartKey;
		},
		getAmazonDevId : function(){
			return this.amazonDevId;
		},
		getAmazonDevPublicKey : function(){
			return this.amazonDevPublicKey;
		},
		getAmazonDevPrivateKey : function(){
			return this.amazonDevPrivateKey;
		},
		getUserId : function(){
			
		},
		getBestBuyKey : function(){
			return bestBuyKey;
		}
	}	
};

omniApp.factory('key', keyFactory);