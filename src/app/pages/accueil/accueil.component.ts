import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  searchForm: FormGroup;

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  categories_Data = [
      {Adultes: 0},
      {Enfants: 0},
      {Bebes: 0},
  ];

  voyageurs:number = 0

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.formBuilder.group({
      adresse: '',
      arrivee: '',
      depart: '',
      voyageurs: [{value:'',disabled: true}],
    });
  }

  onClickplus(key,i,$event){
    this.categories_Data[i][key]++
    this.voyageurs += 1
    $event.stopPropagation();
  }

  onClickminus(key,i,$event){
    if(this.categories_Data[i][key] > 0) {
      this.categories_Data[i][key]--
      this.voyageurs -= 1
      }
      $event.stopPropagation();
  }



}
