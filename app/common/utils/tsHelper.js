System.register([], function(exports_1) {
    var TsHelper;
    return {
        setters:[],
        execute: function() {
            //import {Directive} from 'angular2/core'
            //@Directive({
            //    selector: '[jsHelper',
            //    host: { },
            //    providers: []
            //})
            TsHelper = (function () {
                function TsHelper() {
                }
                // ASP.NET Web Forms and MVC serializes dates in a special form - \/Date(ticks)\/
                //  - where ticks is the number of milliseconds since 1 January 1970.
                TsHelper.dateFormatter = function (jsonTickDate) {
                };
                TsHelper.ToJavaScriptDate = function (value) {
                    var pattern = /Date\(([^)]+)\)/;
                    var results = pattern.exec(value);
                    var dt = new Date(parseFloat(results[1]));
                    return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear() + " " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
                };
                TsHelper.IsNotNull = function (value) {
                    if ((value !== null) && (value !== undefined) && (value !== "")) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                TsHelper.IsNull = function (value) {
                    if ((value === null) || (value === undefined) || (value === "")) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                TsHelper.doesFileExist = function (urlToFile) {
                    //var xhr = new XMLHttpRequest();
                    //xhr.open('HEAD', urlToFile, false);
                    //xhr.send();
                    //if (xhr.status == "404") {
                    //    return false;
                    //} else {
                    //    return true;
                    //}
                };
                return TsHelper;
            })();
            exports_1("TsHelper", TsHelper);
        }
    }
});
//# sourceMappingURL=tsHelper.js.map