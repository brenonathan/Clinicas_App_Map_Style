import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { CameraProvider } from '../providers/camera/camera';
import { Camera } from '@ionic-native/camera';
import { PacientesProvider } from '../providers/pacientes/pacientes';
import { MedicosProvider } from '../providers/medicos/medicos';
import { ClinicasProvider } from '../providers/clinicas/clinicas';
import { UserProvider } from '../providers/user/user';
import { IonicStorageModule } from '@ionic/storage';
import { ExportProvider } from '../providers/export/export';

const firebaseConfig = {
  apiKey: "AIzaSyC3Jh2JxWe23rlM-PkZIPWt1-uIqSd7FOc",
  authDomain: "baseclinica-da662.firebaseapp.com",
  databaseURL: "https://baseclinica-da662-default-rtdb.firebaseio.com",
  projectId: "baseclinica-da662",
  storageBucket: "baseclinica-da662.appspot.com",
  messagingSenderId: "834577856432",
  appId: "1:834577856432:web:cf3068ab68040cd5d0c875",
  measurementId: "G-N198HLF22X"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    CameraProvider,
    Camera,
    PacientesProvider,
    MedicosProvider,
    ClinicasProvider,
    UserProvider,
    ExportProvider,
  ]
})
export class AppModule {}
