import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SwapNowComponent } from './pages/swap-now/swap-now.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TradeComponent } from './pages/trade/trade.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'swap-now', component: SwapNowComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'trade/:id', component: TradeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
