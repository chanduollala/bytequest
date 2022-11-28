import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "../app/profile/profile.component";
import {MainComponent} from "../app/main/main.component";
import {ContributeComponent} from "../app/contribute/contribute.component";
import {MagazineComponent} from "../app/magazine/magazine.component";

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'main', component: MainComponent},
  {path: 'contribute', component: ContributeComponent},
  {path: 'mag', component: MagazineComponent},


]




@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
