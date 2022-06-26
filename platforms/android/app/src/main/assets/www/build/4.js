webpackJsonp([4],{

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicosFormPageModule", function() { return MedicosFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicos_form__ = __webpack_require__(570);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MedicosFormPageModule = /** @class */ (function () {
    function MedicosFormPageModule() {
    }
    MedicosFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__medicos_form__["a" /* MedicosFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__medicos_form__["a" /* MedicosFormPage */]),
            ],
        })
    ], MedicosFormPageModule);
    return MedicosFormPageModule;
}());

//# sourceMappingURL=medicos-form.module.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicosFormPage; });
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




var MedicosFormPage = /** @class */ (function () {
    function MedicosFormPage(navCtrl, navParams, medicosProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicosProvider = medicosProvider;
        this.alertCtrl = alertCtrl;
        this.titulo = '';
        this.medicoID = undefined;
        this.medicos = { nome: '', crm: '', telefone: '', especialidades: '', status: '' };
        var medicoID = this.navParams.get('medicoID');
        var medicos = this.navParams.get('medicos');
        if (medicoID) {
            this.medicoID = medicoID;
            this.medicos = medicos;
            this.titulo = "Editar dados médico";
        }
        else {
            this.titulo = "Cadastrar médico";
        }
        console.log(this.medicos);
    }
    MedicosFormPage.prototype.Salvar = function () {
        var _this = this;
        if (this.medicoID) {
            this.medicosProvider.atualizarMedico(this.medicoID, this.medicos).then(function (_database) {
                var mensagem = 'Usuario atualizado com sucesso';
                _this.showAlert(mensagem);
            });
        }
        else {
            this.medicosProvider.cadastrarMedico(this.medicos).then(function (_database) {
                var mensagem = 'Usuario cadastrado com sucesso';
                _this.showAlert(mensagem);
            });
        }
    };
    MedicosFormPage.prototype.deletarMedico = function () {
        var _this = this;
        {
            var confirm_1 = this.alertCtrl.create({
                title: 'Excluir médico?',
                message: 'Você tem certeza que deseja excluir esse médico?',
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
                            if (_this.medicoID) {
                                _this.medicosProvider.deleteMedico(_this.medicoID).then(function (data) {
                                    var mensagem = 'Médico excluído com sucesso';
                                    _this.showAlert(mensagem);
                                    console.log(_this.medicoID);
                                });
                            }
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    MedicosFormPage.prototype.showAlert = function (mensagem) {
        var alert = this.alertCtrl.create({
            title: 'Médico',
            subTitle: mensagem,
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
    };
    MedicosFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicos-form',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\medicos-form\medicos-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-item>\n    <ion-label>Nome</ion-label>\n    <ion-input type="text" [(ngModel)]="medicos.nome"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Especialidades</ion-label>\n    <ion-select [(ngModel)]="medicos.especialidades">\n      <ion-option value="clinicoGeral">Clínico-geral</ion-option>\n      <ion-option value="cardiologista">Cardiologista</ion-option>\n      <ion-option value="Neurologista">Neurologista</ion-option>\n      <ion-option value="Pediatra">Pediatra</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Telefone</ion-label>\n    <ion-input type="text" [(ngModel)]="medicos.telefone"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>CRM</ion-label>\n    <ion-input type="text" [(ngModel)]="medicos.crm"></ion-input>\n  </ion-item>\n  \n    \n  <ion-item>\n    <ion-label>Status</ion-label>\n    <ion-select [(ngModel)]="medicos.status">\n      <ion-option value="ativo">Ativo</ion-option>\n      <ion-option value="inativo">Inativo</ion-option>\n    </ion-select>\n  </ion-item>\n  <button ion-button round block (click)="Salvar()">Salvar</button>\n  <button ion-button round block  *ngIf="medicoID" (click)="deletarMedico()" color="danger" outline>Excluir perfil</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\medicos-form\medicos-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_medicos_medicos__["a" /* MedicosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MedicosFormPage);
    return MedicosFormPage;
}());

//# sourceMappingURL=medicos-form.js.map

/***/ })

});
//# sourceMappingURL=4.js.map