import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { YourAccountComponent } from './pages/your-account/your-account.component';
import { BrowseDetailComponent } from './pages/browse-detail/browse-detail.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'browse/:id', component: BrowseDetailComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'yourAccount', component: YourAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
