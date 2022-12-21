import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/module/entreprise';
import { ServiceEntrepriseService } from '../service-entreprise.service';



@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {

  //property
  entreprises!: Entreprise[];
  searchText!: string;

  constructor(private entrepriseService: ServiceEntrepriseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEntreprises();

  }

  private getEntreprises(){
    this.entrepriseService.getEntreprisesList().subscribe(data =>{
      this.entreprises = data;
    });
  }

  gotoUpdate(id:number){
    this.router.navigate(['entreprise/app-update-entreprise',id]);
  } 

  goToEntreprises(){
    this.router.navigate(['entreprise/app-list-entreprise'])
  }

  deleteAndGotoEntreprises(id:number){
    this.entrepriseService.deleteEntreprise(id).subscribe(data =>{
      console.log(data);
      this.getEntreprises();
    })
  }

  goToDetails(id:number){
    this.router.navigate(['entreprise/app-detail-entreprise',id]);
  }

  goToAddEntreprise(){
    this.router.navigate(['entreprise/app-add-entreprise'])
  }
}