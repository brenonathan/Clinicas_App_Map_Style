webpackJsonp([8],{

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarUsuarioPageModule", function() { return CadastrarUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario__ = __webpack_require__(566);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarUsuarioPageModule = /** @class */ (function () {
    function CadastrarUsuarioPageModule() {
    }
    CadastrarUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario__["a" /* CadastrarUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario__["a" /* CadastrarUsuarioPage */]),
            ],
        })
    ], CadastrarUsuarioPageModule);
    return CadastrarUsuarioPageModule;
}());

//# sourceMappingURL=cadastrar-usuario.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarUsuarioPage; });
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




var CadastrarUsuarioPage = /** @class */ (function () {
    function CadastrarUsuarioPage(navCtrl, navParams, usuarioProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.alertCtrl = alertCtrl;
        this.usuarios = { email: '', senha: '', nome: '' };
    }
    CadastrarUsuarioPage.prototype.ionViewDidLoad = function () {
    };
    CadastrarUsuarioPage.prototype.cadastrar = function () {
        var _this = this;
        var email = this.usuarios.email;
        var senha = this.usuarios.senha;
        this.usuarioProvider.CadastrarUsuario(email, senha).
            then(function (sucesso) {
            console.log(sucesso);
            var mensagem = 'Usuário cadastrado com sucesso';
            _this.navCtrl.pop();
            _this.showAlert(mensagem);
        }).catch(function (error) {
            console.log(error);
            var mensagem = 'Ocorreu um erro no cadastro';
            _this.showAlert(mensagem);
        });
    };
    CadastrarUsuarioPage.prototype.showAlert = function (mensagem) {
        var alert = this.alertCtrl.create({
            title: mensagem,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar-usuario',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\cadastrar-usuario\cadastrar-usuario.html"*/'\n<ion-header>\n  <ion-navbar transparent>\n    <ion-title id="titulo">Cadastro usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="conteudo">\n\n  <ion-grid class="grid-logo">\n    <ion-row align-items-center justify-content-center>\n      <ion-col col-12 align-self-center>\n        <img src="../../assets//imgs/logo.png" />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="grid-list">\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-12 col-lg-4 col-xl-4>\n\n        <ion-list class="conteudo-input">\n\n          <ion-item class="margem-input-top">\n            <ion-input type="text" [(ngModel)]="nome" placeholder="Nome"></ion-input>\n          </ion-item>\n    \n          <ion-item class="margem-input-top">\n            <ion-input type="text" [(ngModel)]="email" placeholder="E-mail"></ion-input>\n          </ion-item>\n        \n          <ion-item class="margem-input-top">\n            <ion-input type="password" [(ngModel)]="senha" placeholder="Senha"></ion-input>\n          </ion-item>\n      \n          <button ion-button block color="vinho" (click)="cadastrar()" class="margem-btn-top btn">Cadastrar</button>\n        \n      \n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\cadastrar-usuario\cadastrar-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CadastrarUsuarioPage);
    return CadastrarUsuarioPage;
}());

//# sourceMappingURL=cadastrar-usuario.js.map

/***/ })

});
//# sourceMappingURL=8.js.map