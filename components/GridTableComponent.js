app.component("gridTable", {
    templateUrl: function ($element, $attrs) {
        return '/templates/gridTableTpl.html'
    },
   // template: '<table id="search-grid" class="table table-striped table-hover"> <tr ng-repeat="x in $ctrl.user | filterClient:$ctrl.name"> <td> <span style="font-size: larger;">{{ x.ClientName }}</span> <table class="borderless"> <tr> <td> <p><span class="glyphicon glyphicon-earphone"></span> {{ x.PhoneNo }}</p> </td> <td> @{{ x.Email }} </td> <td><span class="glyphicon glyphicon-file"></span>Policy No. {{x.PolicyNo }}</td> <tr> <table> </td> <tr> </table>',
    controller: 'searchWidgetController',
    bindings: { name: '=' }
});