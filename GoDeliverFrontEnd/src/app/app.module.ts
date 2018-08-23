import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserDetailsService } from "./user-details.service";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { RoutingModule } from "./routing/routing.module";
import { MultipleCheckboxesModule } from 'multiple-checkboxes';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {AuthenticationService} from './services/authentication.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RecommendationsComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule, MultipleCheckboxesModule,MatDividerModule, MatListModule,ReactiveFormsModule, MaterialModule, MatButtonModule, MatCheckboxModule
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
