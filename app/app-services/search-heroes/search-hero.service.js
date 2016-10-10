(function(app){
    app.SearchHeroesService = ng.core.Class({
        constructor: [ng.http.Http, function(http) {

            var viewModel = this;

            viewModel.http = http;

            viewModel.url = "http://57ed26849815a81100234d00.mockapi.io/v1/heroes/";
            viewModel.headers = new Headers();
            viewModel.headers.append('Content-Type', 'application/json');

        }],
        searchHeroes: function (obj) {
            // Observable(obj)
        }
    });

})(window.app || (window.app = {}));