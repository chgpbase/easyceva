angular.module('app.controllers', [])

.controller('buyCtrl', function($scope,$state) {
  // $scope.sports = Sports;
  // $scope.getDatetime = new Date();
  // console.log($scope.getDatetime);
  // $scope.setDetails = function(sport)
  // {
  //   DetailsSport.set(sport);
  //   $state.go('tabsController.page9');
  // };
})

.controller('ordersCtrl', function($scope, $state, Orders, DetailsOrder) {
  $scope.orders = Orders;
  $scope.getDatetime = new Date();
  console.log($scope.getDatetime);
  $scope.setDetails = function(order)
  {
    DetailsOrder.set(order);
    $state.go('tabsController.orderDetails');
  };
})

.controller('orderDetailsCtrl', function($scope, DetailsOrder) {
  $scope.order = DetailsOrder.get();
})

.controller('allOrdersCtrl', function($scope, $state, Orders, DetailsOrder) {

  $scope.orders = Orders;

  today = new Date();
  today.setHours(0,0,0,0,0);
  var i = 0;

  for( var x in $scope.orders) {
    date = new Date();
    date.setFullYear($scope.orders[x].year,$scope.orders[x].month-1,$scope.orders[x].day);
    date.setHours(0,0,0,0,0);
    if(date < today)
      i++;
  }

  var total = $scope.orders.length - i;

  $scope.filteredItems = total; //Initially for no filter  
  $scope.totalItems = total;

  $scope.setDetails = function(order)
  {
    DetailsOrder.set(order);
    $state.go('tabsController.orderDetails');
  };
  $scope.filterDate = function(){
    return function(item){
      date = new Date();
      date.setFullYear(item["year"],item["month"]-1,item["day"]);
      date.setHours(0,0,0,0,0);
      return (date >= today);
    }
  }

  $scope.filter = function() {
    $timeout(function() { 
      $scope.filteredItems = $scope.filtered.length;
    }, 10);
  };
})

.controller('buyTicketCtrl', function($scope, $state) {
  //$scope.orders = Orders;
  //$scope.getDatetime = new Date();
  var ref = new Firebase("https://easyceva.firebaseio.com/orders");
  // this new, empty ref only exists locally
  var newChildRef = ref.push();
  // we can get its id using key()

  var barcodeRandom = (Math.floor(Math.random() * 2000000) * Math.floor(Math.random() * 2000000)) + Math.floor(Math.random() * 50);
  
  // ####### MONTA DATA #########
  today = new Date();
  var month = ((today.getMonth() + 1) > 9)?(today.getMonth()+1).toString():"0"+(today.getMonth()+1);
  var data = today.getDate() + "/" 
           + month + "/" 
           + today.getFullYear();
  // ############################

  newChildRef.key();
  // now it is appended at the end of data at the server
  newChildRef.set({
    "barcode" : barcodeRandom,
    "date" : data,
    "product" : "product_1",
    "price" : "3,50",
    "used" : 0,
    "user" : "teste"
  });
})