System.register([], function(exports_1) {
    var ErrorCode;
    return {
        setters:[],
        execute: function() {
            ErrorCode = (function () {
                function ErrorCode() {
                }
                ;
                ErrorCode.prototype.transform = function (errorId) {
                    var value;
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
                            value = "DuplicateEntry";
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
                };
                ErrorCode.prototype.isError = function (value) {
                    return (value > 0) ? true : false;
                };
                return ErrorCode;
            })();
            exports_1("ErrorCode", ErrorCode);
        }
    }
});
//# sourceMappingURL=errorCode.js.map