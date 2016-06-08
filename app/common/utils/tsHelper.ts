import {Http, Response, Headers, HTTP_PROVIDERS} from '@angular/http';
//import {Directive} from 'angular2/core'

//@Directive({
//    selector: '[jsHelper',
//    host: { },
//    providers: []
//})

export class TsHelper {

    

   // ASP.NET Web Forms and MVC serializes dates in a special form - \/Date(ticks)\/
   //  - where ticks is the number of milliseconds since 1 January 1970.
    public static dateFormatter(jsonTickDate:string) {

    }

    public static ToJavaScriptDate(value:string) {
        var pattern = /Date\(([^)]+)\)/;
        var results = pattern.exec(value);
        var dt = new Date(parseFloat(results[1]));
        return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear() + " " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    }

    public static IsNotNull(value: any) {
        if ((value !== null) && (value !== undefined) && (value !== "")) {
            return true;
        }
        else {
            return false;
        }
    }
    public static IsNull(value: any) {
        if ((value === null) || (value === undefined) || (value === "")) {
            return true;
        }
        else {
            return false;
        }
    }


    public static doesFileExist(urlToFile:string) {
        //var xhr = new XMLHttpRequest();
        //xhr.open('HEAD', urlToFile, false);
        //xhr.send();

        //if (xhr.status == "404") {
        //    return false;
        //} else {
        //    return true;
        //}
    }

}