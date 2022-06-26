webpackJsonp([6],{

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicasListPageModule", function() { return ClinicasListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinicas_list__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClinicasListPageModule = /** @class */ (function () {
    function ClinicasListPageModule() {
    }
    ClinicasListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clinicas_list__["a" /* ClinicasListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clinicas_list__["a" /* ClinicasListPage */]),
            ],
        })
    ], ClinicasListPageModule);
    return ClinicasListPageModule;
}());

//# sourceMappingURL=clinicas-list.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicasListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clinicas_clinicas__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClinicasListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClinicasListPage = /** @class */ (function () {
    function ClinicasListPage(navCtrl, navParams, clinicasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clinicasProvider = clinicasProvider;
        this.clinicas = [];
    }
    ClinicasListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClinicasListPage');
        this.listarClinica();
    };
    ClinicasListPage.prototype.cadastroClinica = function () {
        this.navCtrl.push('ClinicasFormPage');
    };
    ClinicasListPage.prototype.listarClinica = function () {
        var _this = this;
        this.clinicasProvider.listarClinica().subscribe(function (_database) {
            _this.clinicas = _database;
        }), console.error();
        (function (error) {
            console.log(error);
        });
    };
    ClinicasListPage.prototype.editClinica = function (item) {
        var clinicas = item.value;
        var clinicaID = item.key;
        this.navCtrl.push('ClinicasFormPage', { clinicaID: clinicaID, clinicas: clinicas });
    };
    ClinicasListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinicas-list',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\clinicas-list\clinicas-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de clinicas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-item *ngFor="let item of clinicas" (click)="editClinica(item)">\n     \n      <h2>Clinica: {{item.value.nome}}</h2>\n      <p>Endereço: {{item.value.endereco}}</p>\n      <p>{{item.value.cidade}} - {{item.value.UF}}</p>\n    </ion-item>\n  \n  <ion-fab right bottom>\n    <button ion-fab mini (click)="cadastroClinica()"><ion-icon name="add" ></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\clinicas-list\clinicas-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_clinicas_clinicas__["a" /* ClinicasProvider */]])
    ], ClinicasListPage);
    return ClinicasListPage;
}());

//# sourceMappingURL=clinicas-list.js.map

/***/ })

});
//# sourceMappingURL=6.js.map