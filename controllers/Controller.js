app.controller('myCtrl', function($http, $filter) {
    var vm = this;
    var filtered = $filter('filterClient')(vm.user, vm.name);
    vm.$onInit = function() {
        $http.get('data.json').then(function(data) {
            vm.user = data.data;
        });
    };

});