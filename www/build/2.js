webpackJsonp([2],{

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesFormPageModule", function() { return PacientesFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pacientes_form__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PacientesFormPageModule = /** @class */ (function () {
    function PacientesFormPageModule() {
    }
    PacientesFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pacientes_form__["a" /* PacientesFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pacientes_form__["a" /* PacientesFormPage */]),
            ],
        })
    ], PacientesFormPageModule);
    return PacientesFormPageModule;
}());

//# sourceMappingURL=pacientes-form.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacientesFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pacientes_pacientes__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PacientesFormPage = /** @class */ (function () {
    function PacientesFormPage(navCtrl, navParams, camera, pacientesProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.pacientesProvider = pacientesProvider;
        this.alertCtrl = alertCtrl;
        this.titulo = '';
        this.pacienteID = undefined;
        this.pacientes = { nome: '', convenio: '', telefone: '', endereco: '', cidade: '', UF: '', foto: 'https://bit.ly/3ttLPrJ' };
        var pacienteID = this.navParams.get('pacienteID');
        var pacientes = this.navParams.get('pacientes');
        if (pacienteID) {
            this.pacienteID = pacienteID;
            this.pacientes = pacientes;
            this.titulo = "Editar dados paciente";
        }
        else {
            this.titulo = "Cadastrar paciente";
        }
        console.log(this.pacientes);
    }
    PacientesFormPage.prototype.ionnViewDidLoad = function () {
    };
    PacientesFormPage.prototype.TirarFoto = function () {
        var _this = this;
        this.camera.FazerFoto().then(function (imageData) {
            _this.pacientes.foto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
        });
    };
    PacientesFormPage.prototype.Salvar = function () {
        var _this = this;
        if (this.pacienteID) {
            this.pacientesProvider.atualizarPaciente(this.pacienteID, this.pacientes).then(function (_database) {
                var mensagem = 'Usuario atualizado com sucesso';
                _this.showAlert(mensagem);
            });
        }
        else {
            this.pacientesProvider.cadastrarPaciente(this.pacientes).then(function (_database) {
                var mensagem = 'Usuario cadastrado com sucesso';
                _this.showAlert(mensagem);
            });
        }
    };
    PacientesFormPage.prototype.deletarPaciente = function () {
        var _this = this;
        {
            var confirm_1 = this.alertCtrl.create({
                title: 'Excluir paciente?',
                message: 'Você tem certeza que deseja excluir esse paciente?',
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
                            if (_this.pacienteID) {
                                _this.pacientesProvider.deletePaciente(_this.pacienteID).then(function (data) {
                                    var mensagem = 'Paciente excluído com sucesso';
                                    _this.showAlert(mensagem);
                                    console.log(_this.pacienteID);
                                });
                            }
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    PacientesFormPage.prototype.showAlert = function (mensagem) {
        var alert = this.alertCtrl.create({
            title: 'Paciente',
            subTitle: mensagem,
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
    };
    PacientesFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pacientes-form',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\pacientes-form\pacientes-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-item>\n      <ion-avatar item-start (click)="TirarFoto()">\n        <img src="{{this.pacientes?.foto}}" >\n        <label>  FOTO</label>\n      </ion-avatar>\n      <!-- <button ion-button clear block (click)="TirarFoto()">Tirar foto</button> -->\n    </ion-item>\n\n  </ion-item>\n  <ion-item>\n    <ion-label>Nome</ion-label>\n    <ion-input type="text" [(ngModel)]="pacientes.nome"></ion-input>\n  </ion-item>\n  <!-- <ion-item>\n    <ion-label >Matrícula</ion-label>\n    <ion-input type="text"[(ngModel)]="pacientes.matricula"></ion-input>\n  </ion-item>\n  <ion-item> -->\n  <ion-item>\n    <ion-label>Convênio</ion-label>\n    <ion-select [(ngModel)]="pacientes.convenio">\n      <ion-option value="individual">Convênios de saúde individual</ion-option>\n      <ion-option value="empresarial">Convênios de saúde empresarial</ion-option>\n      <ion-option value="adesao">Convênios de saúde por adesão</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Telefone</ion-label>\n    <ion-input type="text" [(ngModel)]="pacientes.telefone"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Endereço</ion-label>\n    <ion-input type="text" [(ngModel)]="pacientes.endereco"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Cidade</ion-label>\n    <ion-input type="text" [(ngModel)]="pacientes.cidade"></ion-input>\n  </ion-item>\n  <!-- <ion-item>\n    <ion-label >UF</ion-label>\n    <ion-input type="text"[(ngModel)]="pacientes.UF"></ion-input>\n  </ion-item> -->\n  <ion-item>\n    <ion-label>UF</ion-label>\n    <ion-select [(ngModel)]="pacientes.UF">\n      <ion-option value="CE">CEARÁ</ion-option>\n      <ion-option value="RN">RIO GRANDE DO NORTE</ion-option>\n      <ion-option value="MA">MARANHÃO</ion-option>\n    </ion-select>\n  </ion-item>\n  <button ion-button round block (click)="Salvar()">Salvar</button>\n  <button ion-button round block *ngIf="pacienteID" (click)="deletarPaciente()" color="danger" outline>Excluir perfil</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\pacientes-form\pacientes-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pacientes_pacientes__["a" /* PacientesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PacientesFormPage);
    return PacientesFormPage;
}());

//# sourceMappingURL=pacientes-form.js.map

/***/ })

});
//# sourceMappingURL=2.js.map