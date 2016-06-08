System.register(['angular2/core', 'angular2/http', "rxjs/Rx", 'rxjs/add/operator/map', 'rxjs/add/operator/share', '../../app.config.service', '../../common/utils/tsHelper', '../../common/utils/errorCode'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, app_config_service_1, tsHelper_1, errorCode_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (app_config_service_1_1) {
                app_config_service_1 = app_config_service_1_1;
            },
            function (tsHelper_1_1) {
                tsHelper_1 = tsHelper_1_1;
            },
            function (errorCode_1_1) {
                errorCode_1 = errorCode_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http, appConfigService) {
                    var _this = this;
                    this.http = http;
                    this.appConfigService = appConfigService;
                    this.isError = false;
                    this.http = http;
                    this.items = new Array();
                    this.items$ = new Rx_1.Observable(function (observer) {
                        _this.itemsObserver = observer;
                    }).share();
                    this.dataStore = { items: [] };
                    this.selectionChange$ = new Rx_1.Observable(function (observer) {
                        _this.selectionObserver = observer;
                    }).share();
                }
                DataService.prototype.getHostServerIp = function () {
                    return this.appConfigService.getServerIp();
                };
                DataService.prototype.getHostServerPort = function () {
                    return this.appConfigService.getServerPort();
                };
                //crud
                DataService.prototype.getItems = function () {
                    var _this = this;
                    // this.url = this.baseUrl + this.systemUrlPart;
                    var token = localStorage.getItem('id_token');
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Authorization', 'Bearer ' + token);
                    this.http.get(this.url, { headers: headers }).subscribe(function (response) {
                        _this.apiResponse = _this.extractData(response);
                        _this.dataStore.items = _this.apiResponse;
                        _this.itemsObserver.next(_this.dataStore.items);
                    }, function (error) { return console.log(_this.apiResponse); });
                };
                DataService.prototype.getItem = function (id) {
                    var _this = this;
                    this.url += "//" + id;
                    var token = localStorage.getItem('id_token');
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Authorization', 'Bearer ' + token);
                    this.http.get(this.url, { headers: headers }).subscribe(function (response) {
                        _this.apiResponse = _this.extractData(response);
                        _this.dataStore.items = _this.apiResponse;
                        _this.itemsObserver.next(_this.dataStore.items);
                    }, function (error) { return console.log(_this.apiResponse); });
                };
                DataService.prototype.postItem = function (postData) {
                    var _this = this;
                    var token = localStorage.getItem('id_token');
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Authorization', 'Bearer ' + token);
                    return this.http.post(this.url, postData, { headers: headers }).subscribe(function (response) {
                        _this.apiResponse = _this.extractData(response);
                        if (_this.isError) {
                            _this.dataStore.items = _this.apiResponse;
                            _this.itemsObserver.next(_this.dataStore.items); //trigger error notification to any subscribers
                        }
                    }, function (error) { return console.log(_this.apiResponse); });
                };
                //Selection 
                DataService.prototype.selectionObserverInit = function () {
                    var _this = this;
                    this.selectionChange$ = new Rx_1.Observable(function (observer) {
                        _this.selectionObserver = observer;
                    }).share();
                };
                DataService.prototype.selectionChanged = function (item) {
                    this.selectItem = item;
                    //  if ((this.selectionObserver !== null) || (this.selectionObserver !== undefined)) {
                    if (this.selectionObserver !== undefined) {
                        this.selectionObserver.next(item);
                    }
                    else {
                        this.selectionObserverInit();
                    }
                };
                DataService.prototype.selectedItem = function () {
                    return this.selectItem;
                };
                DataService.prototype.selectedItems = function () {
                    return this.dataStore.items.filter(function (item) { return item.active; });
                };
                DataService.prototype.extractData = function (res) {
                    this.isError = false; //reset
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    if (tsHelper_1.TsHelper.IsNull(this.errorCode))
                        this.errorCode = new errorCode_1.ErrorCode();
                    if (this.errorCode.isError(body)) {
                        this.isError = true;
                        var errCode = this.errorCode.transform(body);
                        var errMsg = "ERROR  = " + errCode + " FROM API - " + res.url;
                        return errMsg;
                    }
                    return body.data || {};
                };
                DataService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    //  let errMsg = error.message || 'Server error';
                    var errMsg = error || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Rx_1.Observable.throw(errMsg);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_config_service_1.AppConfigService])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map