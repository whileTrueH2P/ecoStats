import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuthModule } from "angularfire2/auth";
import { RegisterPage } from '../pages/register/register';
import { AguaPage } from '../pages/agua/agua';
import { AtmosfericosPage } from '../pages/atmosfericos/atmosfericos';
import { EnergiaPage } from '../pages/energia/energia';
import { EnergiaSolarPage } from '../pages/energia-solar/energia-solar';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { GasPage } from '../pages/gas/gas';
import { OrganicosPage } from '../pages/organicos/organicos';
import { QuimicosPage } from '../pages/quimicos/quimicos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    EnergiaPage,
    RegisterPage,
    AguaPage,
    AtmosfericosPage,
    EnergiaSolarPage,
    EstadisticasPage,
    GasPage,
    OrganicosPage,
    QuimicosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage, 
    EnergiaPage,
    AguaPage,
    AtmosfericosPage,
    EnergiaPage,
    EnergiaSolarPage,
    EstadisticasPage,
    GasPage,
    OrganicosPage,
    QuimicosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    AngularFireModule,
    AngularFireAuthModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
