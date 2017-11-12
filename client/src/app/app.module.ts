import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';

import { AlertService, AuthenticationService, UserService } from './_services/index';
import { customHttpProvider } from './_helpers/index';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuard } from './_guards/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    UserListComponent,
    RegisterComponent,
    LoginComponent,
    ModalComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    HttpModule
  ],
  providers: [
	AlertService, 
	AuthenticationService, 
	AuthGuard,
	UserService,
	customHttpProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
