var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic-framework/ionic');
var dsc_details_1 = require('../dsc-details/dsc-details');
var DscPage = (function () {
    function DscPage(nav, navParams) {
        this.nav = nav;
        debugger;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    DscPage.prototype.itemTapped = function (event, item) {
        this.nav.push(dsc_details_1.DscDetailsPage, {
            item: item
        });
    };
    DscPage = __decorate([
        ionic_1.Page({
            templateUrl: 'build/pages/dsc/dsc.html'
        }), 
        __metadata('design:paramtypes', [ionic_1.NavController, ionic_1.NavParams])
    ], DscPage);
    return DscPage;
})();
exports.DscPage = DscPage;
