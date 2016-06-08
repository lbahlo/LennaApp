System.register(['angular2/core', 'angular2/http', "rxjs/Rx", 'rxjs/add/operator/map', 'rxjs/add/operator/share', '../app.config.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, app_config_service_1;
    var AppTilesService;
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
            }],
        execute: function() {
            AppTilesService = (function () {
                //  constructor(private http: Http, private _gridService: GridService) {
                function AppTilesService(http, appConfigService) {
                    var _this = this;
                    this.http = http;
                    this.appConfigService = appConfigService;
                    //identification
                    this.nameId = "Default";
                    this.baseUrl = "https://" + this.getHostServerIp() + this.getHostServerPort();
                    this.systemUrlPart = "/SMAMain/api/system";
                    //  private updateBewlMetaUrlPart: string = "/SMAMain/api/updateBewlMetaData";
                    this.systemId = "";
                    this.http = http;
                    this.items = new Array();
                    this.items$ = new Rx_1.Observable(function (observer) {
                        _this.itemsObserver = observer;
                    }).share();
                    this.dataStore = { items: [] };
                    this.selectionChange$ = new Rx_1.Observable(function (observer) {
                        _this.selectionObserver = observer;
                    }).share();
                    // this.selectedItems = new Array<System>();
                }
                AppTilesService.prototype.getItems = function () {
                    var data = this.mockData();
                    this.dataStore.items = data;
                    this.itemsObserver.next(this.dataStore.items);
                };
                //future read from json file like appConfig...
                AppTilesService.prototype.getItemsFuture = function () {
                    var _this = this;
                    this.url = this.baseUrl + this.systemUrlPart;
                    var token = localStorage.getItem('id_token');
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Authorization', 'Bearer ' + token);
                    //mock start
                    // this.dataStore.items = this.mockData();
                    //  this.itemsObserver.next(this.dataStore.items);
                    //mock end
                    //save for future
                    this.http.get(this.url, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this.dataStore.items = data;
                        _this.itemsObserver.next(_this.dataStore.items);
                    }, function (error) { return console.log('Could not load system headers.'); });
                };
                AppTilesService.prototype.getItem = function (_systemId) {
                    var _this = this;
                    this.systemId = _systemId;
                    this.url = this.baseUrl + this.systemUrlPart + "//" + this.systemId;
                    var token = localStorage.getItem('id_token');
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Authorization', 'Bearer ' + token);
                    this.http.get(this.url, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this.dataStore.items = data.Members;
                        _this.itemsObserver.next(_this.dataStore.items);
                    }, function (error) { return console.log('Could not load todos.'); });
                };
                AppTilesService.prototype.postItem = function (postData) { };
                ;
                AppTilesService.prototype.selectionObserverInit = function () {
                    var _this = this;
                    this.selectionChange$ = new Rx_1.Observable(function (observer) {
                        _this.selectionObserver = observer;
                    }).share();
                };
                AppTilesService.prototype.selectionChanged = function (item) {
                    this.selectItem = item;
                    //  if ((this.selectionObserver !== null) || (this.selectionObserver !== undefined)) {
                    if (this.selectionObserver !== undefined) {
                        this.selectionObserver.next(item);
                    }
                    else {
                        this.selectionObserverInit();
                    }
                };
                AppTilesService.prototype.selectedItem = function () {
                    return this.selectItem;
                };
                AppTilesService.prototype.getHostServerIp = function () {
                    return this.appConfigService.getServerIp();
                };
                AppTilesService.prototype.getHostServerPort = function () {
                    return this.appConfigService.getServerPort();
                };
                AppTilesService.prototype.mockData = function () {
                    var data = ([
                        { "Name": "Systems", "imageUrl": "../assets/img/systems-lg.png", "routeName": "Systems", "description": "System description" },
                        { "Name": "Bewls", "imageUrl": "../assets/img/Lists-lg.png", "routeName": "Bewls", "description": "Bewls  description" },
                        { "Name": "Alerts", "imageUrl": "../assets/img/alarms-lg.png", "routeName": "Alerts", "description": "Alerts description" },
                        { "Name": "Import", "imageUrl": "../assets/img/sma_logo-lg.png", "routeName": "Import", "description": "Import description" },
                        { "Name": "Help", "imageUrl": "../assets/img/help-red-lg.png", "routeName": "Help", "Help description": "Help description" },
                        { "Name": "App Ideas Home", "imageUrl": "../assets/img/bewlList1.png", "routeName": "Ideas", "App Ideas Home description": "x6 description" },
                    ]);
                    return data;
                };
                AppTilesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_config_service_1.AppConfigService])
                ], AppTilesService);
                return AppTilesService;
            })();
            exports_1("AppTilesService", AppTilesService);
        }
    }
});
//# sourceMappingURL=app.tiles.service.js.map