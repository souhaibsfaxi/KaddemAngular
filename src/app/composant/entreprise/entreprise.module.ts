import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { EntrepriseRoutingModule } from './entreprise-routing-module';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateStatusComponent } from './update-status/update-status.component';


@NgModule({
  declarations: [
    ListEntrepriseComponent,
    AddEntrepriseComponent,
    UpdateEntrepriseComponent,
    DetailEntrepriseComponent,
    UpdateStatusComponent,

  ],
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    
  ]
})
export class EntrepriseModule { }
