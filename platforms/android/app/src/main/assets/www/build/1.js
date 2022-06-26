webpackJsonp([1],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesListPageModule", function() { return PacientesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pacientes_list__ = __webpack_require__(573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PacientesListPageModule = /** @class */ (function () {
    function PacientesListPageModule() {
    }
    PacientesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pacientes_list__["a" /* PacientesListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pacientes_list__["a" /* PacientesListPage */]),
            ],
        })
    ], PacientesListPageModule);
    return PacientesListPageModule;
}());

//# sourceMappingURL=pacientes-list.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacientesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pacientes_pacientes__ = __webpack_require__(353);
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
 * Generated class for the PacientesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PacientesListPage = /** @class */ (function () {
    function PacientesListPage(navCtrl, navParams, pacientesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pacientesProvider = pacientesProvider;
        this.pacientes = [];
    }
    PacientesListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PacientesListPage');
        this.listarPaciente();
    };
    PacientesListPage.prototype.cadastroPaciente = function () {
        this.navCtrl.push('PacientesFormPage');
    };
    PacientesListPage.prototype.listarPaciente = function () {
        var _this = this;
        this.pacientesProvider.listarPaciente().subscribe(function (_database) {
            _this.pacientes = _database;
        }), console.error();
        (function (error) {
            console.log(error);
        });
    };
    PacientesListPage.prototype.editPaciente = function (item) {
        var pacientes = item.value;
        var pacienteID = item.key;
        this.navCtrl.push('PacientesFormPage', { pacienteID: pacienteID, pacientes: pacientes });
    };
    PacientesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pacientes-list',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\pacientes-list\pacientes-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de pacientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-item *ngFor="let item of pacientes" (click)="editPaciente(item)">\n     <ion-avatar item-start>\n      <img src="{{item.value.foto}}">\n     </ion-avatar>\n      <h2>Paciente: {{item.value.nome}}</h2>\n      <p>Tipo de convênio: {{item.value.convenio}}</p>\n      <p>{{item.value.cidade}} - {{item.value.UF}}</p>\n    </ion-item>\n  \n  <ion-fab right bottom>\n    <button ion-fab mini (click)="cadastroPaciente()"><ion-icon name="add" ></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\pacientes-list\pacientes-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pacientes_pacientes__["a" /* PacientesProvider */]])
    ], PacientesListPage);
    return PacientesListPage;
}());

//# sourceMappingURL=pacientes-list.js.map

/***/ })

});
//# sourceMappingURL=1.js.map