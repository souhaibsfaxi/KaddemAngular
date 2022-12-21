import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';

const routes: Routes = [
  {path:'app-list-entreprise',component:ListEntrepriseComponent},
  {path:'app-add-entreprise',component:AddEntrepriseComponent},
  {path:'app-update-entreprise/:id',component:UpdateEntrepriseComponent},
  {path:'app-detail-entreprise/:id',component:DetailEntrepriseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }