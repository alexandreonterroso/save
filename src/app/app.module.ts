import { Safe } from './pipes/Safe';
import { FTP } from '@ionic-native/ftp';
import { File } from '@ionic-native/file';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PagePage } from "../pages/page/page";
import { ChoixAction2Page } from "../pages/choix-action2/choix-action2";
import { ChoixActionPage } from "../pages/choix-action/choix-action";
import { PhotosPage } from "../pages/photos/photos";
import { PhotoLibrary } from "@ionic-native/photo-library";

@NgModule({
  declarations: [
    MyApp,
    PagePage,
    LoginPage,
    ChoixActionPage,
    ChoixAction2Page,
    PhotosPage,
    Safe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PagePage,
    LoginPage,
    ChoixActionPage,
    ChoixAction2Page,
    PhotosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FTP,
    File,
    PhotoLibrary
  ]
})
export class AppModule {}
