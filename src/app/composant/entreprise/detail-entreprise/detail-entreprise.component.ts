import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from 'src/app/module/entreprise';
import { ServiceEntrepriseService } from '../service-entreprise.service';

@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrls: ['./detail-entreprise.component.css']
})
export class DetailEntrepriseComponent implements OnInit {

  id!:number;
  entreprise!:Entreprise;

  constructor(private route: ActivatedRoute,
    private entrepriseService: ServiceEntrepriseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 

    this.entreprise = new Entreprise();
    this.entrepriseService.getEntrepriseById(this.id).subscribe( data =>{
      this.entreprise = data;
    });
  }

}
