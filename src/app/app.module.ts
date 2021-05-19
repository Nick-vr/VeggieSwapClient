import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG Components
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';

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
import { TradeItemOverviewComponent } from './components/trade-item-overview/trade-item-overview.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TradeComponent } from './pages/trade/trade.component';
import { UserTradeItemsComponent } from './components/user-trade-items/user-trade-items.component';

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
    PageNotFoundComponent,
    TradeItemOverviewComponent,
    LoginComponent,
    UserDetailComponent,
    TradeComponent,
    UserTradeItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    CardModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    InputTextModule,
    ToastModule,
    PaginatorModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    DialogModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
