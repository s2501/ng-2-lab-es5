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
            var viewModel = this;

            // observable logic
            var a = function(item, callback){
                viewModel.http.get(item).map(function (response) {
                    callback(response.json().data)
                })
            };

            var b = Rx.Observable.bindCallback(a);

            var result = b(obj);

            result.subscribe(

                function(obj){

                    console.log(obj)
                },
                function (error) {

                    console.log(error);
                }
            );
        }
    });

})(window.app || (window.app = {}));