app.component("gridTable", {
    templateUrl: function ($element, $attrs) {
        return '/templates/gridTableTpl.html'
    },
    controller: 'searchWidgetController',
    bindings: { name: '=' }
});