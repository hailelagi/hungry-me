var SpoonacularApi = require('spoonacular_api');

// TODO configure with api keys
var api = new SpoonacularApi.DefaultApi()
var q = "salmon with fusilli and no nuts";

var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.analyzeARecipeSearchQuery(q, callback);
