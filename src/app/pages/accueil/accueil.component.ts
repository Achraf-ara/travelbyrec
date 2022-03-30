import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.formBuilder.group({
      adresse: '',
      arrivee: '',
      depart: '',
      voyageurs: '',
    });
  }
  
   

}
