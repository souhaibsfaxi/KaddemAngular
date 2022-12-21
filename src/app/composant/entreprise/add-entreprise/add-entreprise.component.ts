import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Entreprise } from 'src/app/module/entreprise';
import { ServiceEntrepriseService } from '../service-entreprise.service';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit {

  addForm!:FormGroup;
  entreprisePreview$!: Observable<Entreprise>;
  entreprise: Entreprise = new Entreprise;
  //mailRegex!: RegExp;

  constructor( private entrepriseService: ServiceEntrepriseService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.addForm = new FormGroup({
      //idEntreprise:new FormControl('',),
      nomEntreprise:new FormControl('', [Validators.required, Validators.minLength(2)]) ,
      localisation:new FormControl('', [Validators.required, Validators.minLength(2)]),
      emailEntreprise:new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      dateDebutAlternance:new FormControl(''),
      dateFinAlternance:new FormControl(''),
      //recruiting:new FormControl('')
    },{
      updateOn:'blur'
  });
  this.entreprisePreview$ = this.addForm.valueChanges;
  
  }

  // get idEntreprise(){
  //   return this.addForm.controls["idEntreprise"]
  // }
  get nomEntreprise(){
    return this.addForm.controls["nomEntreprise"]
  }
  get localisation(){
    return this.addForm.controls["localisation"]
  }
  get emailEntreprise(){
    return this.addForm.controls["emailEntreprise"]
  }
  get dateDebutAlternance(){
    return this.addForm.controls["dateDebutAlternance"]
  }
  get dateFinAlternance(){
    return this.addForm.controls["dateFinAlternance"]
  }
  // get recruiting(){
  //   return this.addForm.controls["recruiting"]
  // }

  saveEntreprise(){
    // this.entrepriseService.addEntreprise(this.addForm.value).subscribe(data =>{
      this.entrepriseService.addEntreprise(this.addForm.value).subscribe(data =>{ 
        this.goToEntreprises(); 
    alert("Ajouté avec succès...!!!");
    },
      error => console.log(error));
  } 

  goToEntreprises(){
    this.router.navigate(['/app-list-entreprise'])
  }

  public onSubmit(){
    this.saveEntreprise();
    this.goToEntreprises();

  }

}
