import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SwapNowComponent } from './pages/swap-now/swap-now.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TradeComponent } from './pages/trade/trade.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'swap-now', component: SwapNowComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'trade/:id', component: TradeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
