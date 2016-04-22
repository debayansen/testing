(function(){
    var app = angular.module('test',['ngMaterial']);

    // app.config(function($mdThemingProvider) {
    //   $mdThemingProvider.theme('default')
    //     .primaryPalette('green', {
    //       'default': '400', // by default use shade 400 from the pink palette for primary intentions
    //       'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
    //       'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
    //       'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    // });
    //
    // app.accentPalette('purple', {
    //   'default': '200' // use shade 200 for default, and keep all other shades the same
    // });
    //
    app.controller('ShippingStates', function(){});

    //menu controller
    app.controller('WidthDemoCtrl', DemoCtrl);
    function DemoCtrl($mdDialog) {
      var vm = this;
      this.announceClick = function(index) {
        $mdDialog.show(
          $mdDialog.alert()
            .title('You clicked!')
            .textContent('You clicked the menu item at index ' + index)
            .ok('Nice')
        );
      };
    }

})()
