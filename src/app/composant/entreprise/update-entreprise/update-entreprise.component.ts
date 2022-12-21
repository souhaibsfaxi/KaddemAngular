import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/module/entreprise';
import { ServiceEntrepriseService } from '../service-entreprise.service';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.css']
})
export class UpdateEntrepriseComponent implements OnInit {

  id!:number;
  entreprise: Entreprise = new Entreprise();

  constructor(private entrepriseService: ServiceEntrepriseService,
   private activatedRoute: ActivatedRoute,
   private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.entrepriseService.getEntrepriseById(this.id).subscribe(data =>{
      this.entreprise = data;
    }, error => console.log(error));
  }

  goToEntreprises(){
    this.router.navigate(['/app-list-entreprise'])
  }
  
  onSubmit(){ //event handler
    this.entrepriseService.updateEntreprise(this.id, this.entreprise).subscribe(data =>{
      //console.log(data);
      //this.entreprise = new Entreprise();
      this.goToEntreprises();
    }, error => console.log(error))
  }

}
