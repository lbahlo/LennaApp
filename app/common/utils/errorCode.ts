import {Http, Response, Headers, HTTP_PROVIDERS} from '@angular/http';
import {TsHelper} from "./tsHelper";


export class ErrorCode {


    constructor() { };

    transform(errorId:number) {
        let value: string;
        switch (errorId) {
            case 0: {
                value = "Success";
                break;
            }
            case 1: {
                value = "InvalidArgument";
                break;
            }
            case 2: {
                value = "DuplicateEntry"
                break;
            }
            case 3: {
                value = "FileAccessDenied";
                break;
            }
            case 4: {
                value = "InvalidFileFormat";
                break;
            }
            case 5: {
                value = "Failed";
                break;
            }
            case 6: {
                value = "BewlToNodeAssociationExists";
                break;
            }
            case 7: {
                value = "InvalidBewl";
                break;
            }
            default: {
                value = "ErrorCode - BAD ErrorCodeID";
                console.log(value);
            }
        }

        return value;
    }
     
    public isError(value: number) {
        return (value > 0) ? true : false; 
    }

    
    //public extractData(res: Response) {
    ////    isError = false;  //reset
    //    if (res.status < 200 || res.status >= 300) {
    //        throw new Error('Bad response status: ' + res.status);
    //    }
    //    let body = res.json();

    //   // if (TsHelper.IsNull(this.errorCode))
    //   //     this.errorCode = new ErrorCode();

    //    if (this.isError(body)) {
    //        //this.isError = true;
    //        let errCode = this.transform(body);
    //        let errMsg = "ERROR  = " + errCode + " FROM API - " + res.url;
    //        return errMsg;
    //        //return Observable.throw(errMsg);
    //    }
    //    return body.data || {};
    //}

}

