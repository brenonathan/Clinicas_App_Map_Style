webpackJsonp([7],{

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicasFormPageModule", function() { return ClinicasFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinicas_form__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClinicasFormPageModule = /** @class */ (function () {
    function ClinicasFormPageModule() {
    }
    ClinicasFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clinicas_form__["a" /* ClinicasFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clinicas_form__["a" /* ClinicasFormPage */]),
            ],
        })
    ], ClinicasFormPageModule);
    return ClinicasFormPageModule;
}());

//# sourceMappingURL=clinicas-form.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicasFormPage; });
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
 * Generated class for the ClinicasFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClinicasFormPage = /** @class */ (function () {
    function ClinicasFormPage(navCtrl, navParams, clinicasProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clinicasProvider = clinicasProvider;
        this.alertCtrl = alertCtrl;
        this.titulo = '';
        this.clinicaID = undefined;
        this.clinicas = { nome: '', endereco: '', cidade: '', UF: '' };
        var clinicaID = this.navParams.get('clinicaID');
        var clinicas = this.navParams.get('clinicas');
        if (clinicaID) {
            this.clinicaID = clinicaID;
            this.clinicas = clinicas;
            this.titulo = "Editar dados clinica";
        }
        else {
            this.titulo = "Cadastrar clinica";
        }
        console.log(this.clinicas);
    }
    ClinicasFormPage.prototype.ionnViewDidLoad = function () {
    };
    ClinicasFormPage.prototype.Salvar = function () {
        var _this = this;
        if (this.clinicaID) {
            this.clinicasProvider.atualizarClinica(this.clinicaID, this.clinicas).then(function (_database) {
                var mensagem = 'Usuario atualizado com sucesso';
                _this.showAlert(mensagem);
            });
        }
        else {
            this.clinicasProvider.cadastrarClinica(this.clinicas).then(function (_database) {
                var mensagem = 'Usuario cadastrado com sucesso';
                _this.showAlert(mensagem);
            });
        }
    };
    ClinicasFormPage.prototype.deletarclinica = function () {
        var _this = this;
        {
            var confirm_1 = this.alertCtrl.create({
                title: 'Excluir clinica?',
                message: 'Você tem certeza que deseja excluir esse clinica?',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Sim, desejo!',
                        handler: function () {
                            if (_this.clinicaID) {
                                _this.clinicasProvider.deleteClinica(_this.clinicaID).then(function (data) {
                                    var mensagem = 'clinica excluído com sucesso';
                                    _this.showAlert(mensagem);
                                    console.log(_this.clinicaID);
                                });
                            }
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    ClinicasFormPage.prototype.showAlert = function (mensagem) {
        var alert = this.alertCtrl.create({
            title: 'Clinica',
            subTitle: mensagem,
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
    };
    ClinicasFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinicas-form',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\clinicas-form\clinicas-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-item>\n    <ion-label>Nome</ion-label>\n    <ion-input type="text" [(ngModel)]="clinicas.nome"></ion-input>\n  </ion-item>\n  \n  \n  <ion-item>\n    <ion-label>Endereço</ion-label>\n    <ion-input type="text" [(ngModel)]="clinicas.endereco"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Cidade</ion-label>\n    <ion-input type="text" [(ngModel)]="clinicas.cidade"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Latitude</ion-label>\n    <ion-input type="text" [(ngModel)]="clinicas.latitude"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Longitude</ion-label>\n    <ion-input type="text" [(ngModel)]="clinicas.longitude"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>UF</ion-label>\n    <ion-select [(ngModel)]="clinicas.UF">\n      <ion-option value="CE">CEARÁ</ion-option>\n      <ion-option value="RN">RIO GRANDE DO NORTE</ion-option>\n      <ion-option value="MA">MARANHÃO</ion-option>\n    </ion-select>\n  </ion-item>\n  <button ion-button round block (click)="Salvar()">Salvar</button>\n  <button ion-button round block *ngIf="clinicaID" (click)="deletarClinica()" color="danger" outline>Excluir perfil</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\clinicas-form\clinicas-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clinicas_clinicas__["a" /* ClinicasProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ClinicasFormPage);
    return ClinicasFormPage;
}());

//# sourceMappingURL=clinicas-form.js.map

/***/ })

});
//# sourceMappingURL=7.js.map