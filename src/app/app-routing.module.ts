import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { NoUserComponent } from './pages/no-user/no-user.component'
import { ButtonPaymentComponent } from './pages/navbaruser/button-payment/button-payment.component';
import { MoneyWithdrawalComponent } from './pages/money-withdrawal/money-withdrawal.component';
import { AccountStatementComponent } from './pages/account-statement/account-statement.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { DetalleRifaComponent } from './pages/detalle-rifa/detalle-rifa.component';
import { MyRafflesComponent } from './pages/my-raffles/my-raffles.component';
import { CreateComponent } from './pages/create/create.component';
import { AboutComponent } from './pages/about/about.component';
import { FrequentQuestionsComponent } from './pages/frequent-questions/frequent-questions.component';


const routes: Routes = [
 //{ path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] }, // Estamos bloqueando esta ruta para que solo aparezca logeado
  { path: 'home', component: HomeComponent}, 
  { path: 'no-user', component: NoUserComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'button-payment'   , component: ButtonPaymentComponent },
  { path: 'money-withdrawal'   , component: MoneyWithdrawalComponent }, 
  { path: 'account-statement'   , component: AccountStatementComponent }, 
  { path: 'edit-account'   , component: EditAccountComponent }, 
  { path: 'detalle-rifa'   , component: DetalleRifaComponent }, 
  { path: 'my-raffles'   , component: MyRafflesComponent },
  { path: 'create'   , component: CreateComponent }, 
  { path: 'about'   , component: AboutComponent },  
  { path: 'frequent-questions'   , component: FrequentQuestionsComponent },
  
  { path: '**', redirectTo: 'no-user' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
