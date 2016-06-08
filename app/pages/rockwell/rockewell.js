var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ionic_1 = require('ionic-framework/ionic');
var RockwellPage = (function () {
    function RockwellPage(nav, navParams) {
        // debugger;
        // If we navigated to this page, we will have an item available as a nav param
        //   this.selectedItem = navParams.get('item');
        this.nav = nav;
    }
    RockwellPage = __decorate([
        ionic_1.Page({
            templateUrl: 'build/pages/rockwell/rockwell.html'
        })
    ], RockwellPage);
    return RockwellPage;
})();
exports.RockwellPage = RockwellPage;
