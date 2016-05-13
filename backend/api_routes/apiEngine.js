/**
 * Created by NB on 26-Jan-16.
 */
var apiList= require("./apiList");
module.exports = function(app) {
    for(var methd1 in apiList){
        var methd=methd1;
        for(var pth in apiList[methd]){
            var i=pth;
            app[methd](apiList[methd][i].url,apiList[methd][i].callback)
        }
    }
};