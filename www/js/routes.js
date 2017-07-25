angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController.buy', {
    url: '/buy',
    views: {
      'tab4': {
        templateUrl: 'templates/buy.html',
        controller: 'buyCtrl'
      }
    }
  })

  .state('tabsController.orders', {
    url: '/orders',
    views: {
      'tab3': {
        templateUrl: 'templates/orders.html',
        controller: 'ordersCtrl'
      }
    }
  })

  .state('tabsController.orderDetails', {
    url: '/orderdetails',
    views: {
      'tab3': {
        templateUrl: 'templates/orderDetails.html',
        controller: 'orderDetailsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/easyceva',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.allOrders', {
    url: '/allOrders',
    views: {
      'tab3': {
        templateUrl: 'templates/allOrders.html',
        controller: 'allOrdersCtrl'
      }
    }
  })

  .state('tabsController.buyTicket', {
    url: '/buy',
    //url:'/barcode',
    views: {
      'tab4': {
        templateUrl: 'templates/buy.html',
        //templateUrl: 'templates/barcode.html',
        //controller: 'orderDetailsCtrl',
        controller: 'buyTicketCtrl'
        //controller: 'barcodeCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/easyceva/orders')



});
