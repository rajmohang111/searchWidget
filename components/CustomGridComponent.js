var app = angular.module("searchWidgetAPP", []);

app.component("customGrid", {
    templateUrl: function ($element, $attrs) {
        return '/templates/customGridTpl.html'
    },
    controller: function() {
        let ctrl = this;
        this.searchText = '';
    }
});