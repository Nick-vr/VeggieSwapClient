import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// PrimeNG Components
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';

// Generated Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SwapNowComponent } from './pages/swap-now/swap-now.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
    SwapNowComponent,
    HowItWorksComponent,
    SignInComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    TabViewModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
