System.register(['angular2/core', '../vendor-translate/src/xtranslate.pipe', '../vendor-translate/src/xtranslate.service', '../common/styles/appStyles', '../common/tiles/tiles', '../common/tiles/tile', "./app.tiles.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, xtranslate_pipe_1, xtranslate_service_1, appStyles_1, tiles_1, tile_1, app_tiles_service_1;
    var AppIdeasHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (xtranslate_pipe_1_1) {
                xtranslate_pipe_1 = xtranslate_pipe_1_1;
            },
            function (xtranslate_service_1_1) {
                xtranslate_service_1 = xtranslate_service_1_1;
            },
            function (appStyles_1_1) {
                appStyles_1 = appStyles_1_1;
            },
            function (tiles_1_1) {
                tiles_1 = tiles_1_1;
            },
            function (tile_1_1) {
                tile_1 = tile_1_1;
            },
            function (app_tiles_service_1_1) {
                app_tiles_service_1 = app_tiles_service_1_1;
            }],
        execute: function() {
            AppIdeasHomeComponent = (function () {
                function AppIdeasHomeComponent(translate, appTilesService) {
                    this.translate = translate;
                    this.appTilesService = appTilesService;
                    this.title = "xxxxxx";
                    this.subTitle = "yyyy";
                    // this.tiles = appTilesService.getItems();
                    this.activeColor = appStyles_1.AppStyles.secondaryActiveColor;
                    this.activeTextColor = appStyles_1.AppStyles.secondaryActiveTextColor;
                }
                AppIdeasHomeComponent.prototype.ngOnInit = function () {
                    console.log('hello `Home` component');
                    // this.title.getData().subscribe(data => this.data = data);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', appStyles_1.AppStyles)
                ], AppIdeasHomeComponent.prototype, "appStyles", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', app_tiles_service_1.AppTilesService)
                ], AppIdeasHomeComponent.prototype, "dataService", void 0);
                __decorate([
                    core_1.ViewChild(tiles_1.Tiles), 
                    __metadata('design:type', tiles_1.Tiles)
                ], AppIdeasHomeComponent.prototype, "tiles", void 0);
                AppIdeasHomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/ideas/app.ideas.home.html',
                        styleUrls: ['app/ideas/app.ideas.home.css'],
                        providers: [app_tiles_service_1.AppTilesService],
                        directives: [tiles_1.Tiles, tile_1.Tile],
                        pipes: [xtranslate_pipe_1.TranslatePipe]
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [xtranslate_service_1.TranslateService, app_tiles_service_1.AppTilesService])
                ], AppIdeasHomeComponent);
                return AppIdeasHomeComponent;
            })();
            exports_1("AppIdeasHomeComponent", AppIdeasHomeComponent);
        }
    }
});
//# sourceMappingURL=app.ideas.home.component.js.map