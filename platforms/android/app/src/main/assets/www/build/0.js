webpackJsonp([0],{

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarUsuarioPageModule", function() { return RecuperarUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recuperar_usuario__ = __webpack_require__(574);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecuperarUsuarioPageModule = /** @class */ (function () {
    function RecuperarUsuarioPageModule() {
    }
    RecuperarUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recuperar_usuario__["a" /* RecuperarUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recuperar_usuario__["a" /* RecuperarUsuarioPage */]),
            ],
        })
    ], RecuperarUsuarioPageModule);
    return RecuperarUsuarioPageModule;
}());

//# sourceMappingURL=recuperar-usuario.module.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(351);
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
 * Generated class for the RecuperarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecuperarUsuarioPage = /** @class */ (function () {
    function RecuperarUsuarioPage(navCtrl, navParams, usuarioProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.alertCtrl = alertCtrl;
    }
    RecuperarUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperarUsuarioPage');
    };
    RecuperarUsuarioPage.prototype.recuperarSenha = function () {
        var _this = this;
        var email = this.email;
        this.usuarioProvider.recuperarSenha(email).then(function (sucesso) {
            console.log(sucesso);
            var mensagem = 'Um email de recuperação foi enviado para sua caixa postal';
            _this.navCtrl.pop();
            _this.showAlert(mensagem);
        }).catch(function (error) {
            console.log(error);
            var mensagem = 'Ocorreu um erro durante a recuperação';
            _this.showAlert(mensagem);
        });
    };
    RecuperarUsuarioPage.prototype.showAlert = function (mensagem) {
        var alert = this.alertCtrl.create({
            title: mensagem,
            buttons: ['OK']
        });
        alert.present();
    };
    RecuperarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recuperar-usuario',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\recuperar-usuario\recuperar-usuario.html"*/'\n<ion-header>\n  <ion-navbar transparent>\n    <ion-title id="titulo">Recuperação de senha</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="conteudo">\n\n  <ion-grid class="grid-logo">\n    <ion-row align-items-center justify-content-center>\n      <ion-col col-12 align-self-center>\n        <img src="../../assets//imgs/logo.png" />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="grid-list">\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-12 col-lg-4 col-xl-4>\n\n        <ion-list class="conteudo-input">\n\n          <ion-item class="margem-input-top">\n            <ion-input type="text" [(ngModel)]="email" placeholder="E-mail"></ion-input>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n          <button ion-button block color="vinho" (click)="recuperarSenha()" class="margem-btn-top btn">Recuperar senha</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\recuperar-usuario\recuperar-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RecuperarUsuarioPage);
    return RecuperarUsuarioPage;
}());

//# sourceMappingURL=recuperar-usuario.js.map

/***/ })

});
//# sourceMappingURL=0.js.map