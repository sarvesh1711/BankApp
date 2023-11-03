import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './componentsadmin/adminhome/adminhome.component';
import { TransactionComponent } from './componentsadmin/transaction/transaction.component';
import { SettingsComponent } from './componentsadmin/settings/settings.component';
import { QueryComponent } from './componentsadmin/query/query.component';
import { AddUserComponent } from './componentsadmin/add-user/add-user.component';
import { AllUserComponent } from './componentsadmin/all-user/all-user.component';
import { UpdateUserComponent } from './componentsadmin/update-user/update-user.component';
import { UserAccountsComponent } from './user-components/user-accounts/user-accounts.component';
import { UserPassbookComponent } from './user-components/user-passbook/user-passbook.component';
import { UserFixeddepositComponent } from './user-components/user-fixeddeposit/user-fixeddeposit.component';
import { UserQueryComponent } from './user-components/user-query/user-query.component';
import { LoginComponent } from './login-components/login/login.component';
import { RegisterComponent } from './login-components/register/register.component';
import { UserHomeComponent } from './user-components/user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserTransactionsComponent } from './user-components/user-transactions/user-transactions.component';
import { UserDetailsComponent } from './adminhome/user-details/user-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    TransactionComponent,
    SettingsComponent,
    QueryComponent,
    AddUserComponent,
    AllUserComponent,
    UpdateUserComponent,
    UserTransactionsComponent,
    UserAccountsComponent,
    UserPassbookComponent,
    UserFixeddepositComponent,
    UserQueryComponent,
    LoginComponent,
    UserHomeComponent,
    RegisterComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
