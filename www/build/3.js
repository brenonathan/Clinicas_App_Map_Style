webpackJsonp([3],{

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicosListPageModule", function() { return MedicosListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicos_list__ = __webpack_require__(571);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MedicosListPageModule = /** @class */ (function () {
    function MedicosListPageModule() {
    }
    MedicosListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__medicos_list__["a" /* MedicosListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__medicos_list__["a" /* MedicosListPage */]),
            ],
        })
    ], MedicosListPageModule);
    return MedicosListPageModule;
}());

//# sourceMappingURL=medicos-list.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicosListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_medicos_medicos__ = __webpack_require__(352);
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
 * Generated class for the MedicosListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicosListPage = /** @class */ (function () {
    function MedicosListPage(navCtrl, navParams, medicosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicosProvider = medicosProvider;
        this.medicos = [];
    }
    MedicosListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad medicosListPage');
        this.listarMedico();
    };
    MedicosListPage.prototype.cadastroMedico = function () {
        this.navCtrl.push('MedicosFormPage');
    };
    MedicosListPage.prototype.listarMedico = function () {
        var _this = this;
        this.medicosProvider.listarMedico().subscribe(function (_database) {
            _this.medicos = _database;
        }),
            (function (error) {
                console.log(error);
            });
    };
    MedicosListPage.prototype.editMedico = function (item) {
        var medicos = item.value;
        var medicoID = item.key;
        this.navCtrl.push('MedicosFormPage', { medicoID: medicoID, medicos: medicos });
    };
    MedicosListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicos-list',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\medicos-list\medicos-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de médicos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-item *ngFor="let item of medicos" (click)="editMedico(item)">\n     \n      <h2>Médico: {{item.value.nome}}</h2>\n      <p>CRM: {{item.value.crm}}</p>\n      <p>telefone: {{item.value.telefone}} -    status: {{item.value.status}}</p>\n    </ion-item>\n  \n  <ion-fab right bottom>\n    <button ion-fab mini (click)="cadastroMedico()"><ion-icon name="add" ></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\medicos-list\medicos-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_medicos_medicos__["a" /* MedicosProvider */]])
    ], MedicosListPage);
    return MedicosListPage;
}());

//# sourceMappingURL=medicos-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map