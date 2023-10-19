/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { UserAuthModule } from './user-auth/user-auth.module';
import { CategoryModule } from './category/category.module';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ItemModule } from './item/item.module';
import { OwnerModule } from './owner/owner.module';
import { LocationModule } from './location/location.module';
import { EquipmentModule } from './equipment/equipment.module';
import { CserviceModule } from './cservice/cservice.module';
import { TypeModule } from './type/type.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    TypeModule,
    CserviceModule,
    EquipmentModule,
    LocationModule,
    OwnerModule,
    ItemModule,
    UserAuthModule,
    CategoryModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
