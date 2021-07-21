import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // para trabajar con formularios
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NoUserComponent } from './pages/no-user/no-user.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CardComponent } from './pages/card/card.component';
import { NavbaruserComponent } from './pages/navbaruser/navbaruser.component';
import { ButtonPaymentComponent } from './pages/navbaruser/button-payment/button-payment.component';
import { MoneyWithdrawalComponent } from './pages/money-withdrawal/money-withdrawal.component';
import { AccountStatementComponent } from './pages/account-statement/account-statement.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { DetalleRifaComponent } from './pages/detalle-rifa/detalle-rifa.component';
import { MyRafflesComponent } from './pages/my-raffles/my-raffles.component';
import { CreateComponent } from './pages/create/create.component';
import { AboutComponent } from './pages/about/about.component';
import { FrequentQuestionsComponent } from './pages/frequent-questions/frequent-questions.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroeTarjetaComponent } from './pages/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { APP_ROUTING } from './app-routing.module';
import { HeroesService } from './services/heroes.service';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NoUserComponent,
    FooterComponent,
    CardComponent,
    NavbaruserComponent,
    ButtonPaymentComponent,
    MoneyWithdrawalComponent,
    AccountStatementComponent,
    EditAccountComponent,
    DetalleRifaComponent,
    MyRafflesComponent,
    CreateComponent,
    AboutComponent,
    FrequentQuestionsComponent,
    CarouselComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HeroesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    APP_ROUTING

  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
