import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/module/entreprise';
import { ServiceEntrepriseService } from '../service-entreprise.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  id!:number;
  entreprise!: Entreprise; 

  constructor(private entrepriseService: ServiceEntrepriseService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    /*
    this.id = this.activatedRoute.snapshot.params['id'];
    this.entrepriseService.checkRecruitingDate(this.id).subscribe(data =>{
      this.entreprise = data;
    }, error => console.log(error));
    */
  }

}

