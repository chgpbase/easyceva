angular.module('app.services', ['firebase'])
// .factory("Parties", function($firebaseArray) {
//   var partiesRef = new Firebase("https://project-1147322799272806851.firebaseio.com/parties");
//   return $firebaseArray(partiesRef);
// })

.factory("Orders", function($firebaseArray) {
  var ordersRef = new Firebase("https://easyceva.firebaseio.com/orders");
  return $firebaseArray(ordersRef);
})

.service('DetailsOrder', function() {
  function set(data){ setData = data; }
  function get(data){ return setData; }
  return {set: set, get: get}
})

.factory('BlankFactory', [function(){

}])

.service('BarcodeService', [function(){
	var myBarcode;

	return {
		setBarcode: function () {
			myBarcode = (Math.floor(Math.random() * 2000000) * Math.floor(Math.random() * 2000000)) + Math.floor(Math.random() * 50);
		},
		getBarcode: function () {
			return myBarcode;
		}

	}
}]);

