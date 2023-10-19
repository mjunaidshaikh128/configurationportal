import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserAuthComponent } from "./user-auth.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  
} from "@nebular/theme";
import { ThemeModule } from "../../app/@theme/theme.module";

@NgModule({
  declarations: [UserAuthComponent],
  imports: [
    CommonModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    ThemeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbLayoutModule
  ],
})
export class UserAuthModule {}
