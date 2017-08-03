var app = angular.module("myApp", []);

app.component("customGrid", {
    template: `<div class="search-wrap"><input type="text" id="myInput" class="search-box" ng-model="$ctrl.searchText" placeholder="SEARCH (Client Name / Policy Number)"/></div>
        <grid-table name="$ctrl.searchText"></grid-table>`,
    controller: function() {
        let ctrl = this;
        this.searchText = '';
    }
});