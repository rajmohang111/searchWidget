app.filter('filterClient', function($filter) {
    return function(clients, text) {
        var items = {
            out: []
        };

        var filterText = $filter('uppercase')(text);

        angular.forEach(clients, function(value, key) {

            if (filterText !== '') {


                if (value.ClientName.toUpperCase().indexOf(filterText) > -1) {
                    this.out.push(value);
                } else if (value.PolicyNo.toUpperCase().indexOf(filterText) > -1) {
                    this.out.push(value);
                } else {
                    // console.log("remove item");
                }
            } else {
                this.out.push(value);
            }

        }, items);
        return items.out;
    };
});