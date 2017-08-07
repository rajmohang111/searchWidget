var app = angular.module("searchWidgetAPP", []);

app.component("customGrid", {
    templateUrl: function ($element, $attrs) {
        return '/templates/customGridTpl.html'
    },
   // template: '<div class="search-wrap"><input type="text" id="search-field" class="search-box" ng-model="$ctrl.searchText" placeholder="SEARCH (Client Name / Policy Number)"/></div> <grid-table name="$ctrl.searchText"></grid-table>',
    controller: function() {
        let ctrl = this;
        this.searchText = '';
    }
});