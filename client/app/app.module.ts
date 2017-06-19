// import modules here
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { WizardModule } from 'ng2-archwizard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { I18nModule } from './shared/i18n/i18n.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialDesigModule } from './shared/material-design/material-design.module';

// import components here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

// import directives/pipes here

// import constants here
import { APP_ROUTES } from './app.routes';

/**
 * @author: Shoukath Mohammed
 */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    I18nModule,
    HttpModule,
    FormsModule,
    WizardModule,
    BrowserModule,
    TranslateModule,
    MaterialDesigModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
