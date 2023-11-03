import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './componentsadmin/adminhome/adminhome.component';
import { AddUserComponent } from './componentsadmin/add-user/add-user.component';
import { AllUserComponent } from './componentsadmin/all-user/all-user.component';
import { QueryComponent } from './componentsadmin/query/query.component';
import { TransactionComponent } from './componentsadmin/transaction/transaction.component';
import { UserDetailsComponent } from './adminhome/user-details/user-details.component';
import { UpdateUserComponent } from './componentsadmin/update-user/update-user.component';

const routes: Routes = [
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'all-user', component: AllUserComponent },
  { path: 'query', component: QueryComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'delete-user/:id', component: UpdateUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
