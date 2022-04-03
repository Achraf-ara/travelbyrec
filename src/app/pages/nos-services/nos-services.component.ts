import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.scss']
})
export class NosServicesComponent implements OnInit {

  prestation_Service:any[] = [
    {
      name_S: "Un Cuisinier",
      desc_S: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      prix_S: 500,
      value_S: "jours",
      svg_S: "../../../assets/img/cuisinier.svg"
    },
    {
      name_S: "Une Nounou",
      desc_S: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      prix_S: 200,
      value_S: "jours",
      svg_S: "../../../assets/img/nounou.svg"
    },
    {
      name_S: "Un Serveur",
      desc_S: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      prix_S: 350,
      value_S: "jours",
      svg_S: "../../../assets/img/serveur.svg"
    },
    {
      name_S: "Un Traiteur",
      desc_S: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      prix_S: 2500,
      value_S: "jours",
      svg_S: "../../../assets/img/traiteur.svg"
    },
    {
      name_S: "Linge et Pressing",
      desc_S: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      prix_S: 100,
      value_S: "kg",
      svg_S: "../../../assets/img/linge_pressing.svg"
    },
    {
      name_S: "Une Composition Florale",
      desc_S: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      prix_S: 670,
      value_S: "bouquet",
      svg_S: "../../../assets/img/florale.svg"
    }
  ]
  displayedColumns = ['Service', 'Quantité', 'Sous-total',"delete"];
  ELEMENT_DATA: services[] = [
    {service: 'Un Cuisinier', quantite: 1, sous_total: 500, prix_unit: 500, delete:''},
    {service: 'Une Nounou', quantite: 1, sous_total: 200, prix_unit: 200, delete:''},
    {service: 'Linge et Pressing', quantite: 1, sous_total: 100, prix_unit: 100, delete:''}
  ];

  calculTotal = 0

  constructor() { }

  ngOnInit(): void {
    this.calculT()
  }

  onClickplus(i){
    this.ELEMENT_DATA[i].quantite = this.ELEMENT_DATA[i].quantite + 1;
    this.ELEMENT_DATA[i].sous_total = this.ELEMENT_DATA[i].prix_unit * this.ELEMENT_DATA[i].quantite
    this.calculT()
  }

  onClickminus(i){
    if(this.ELEMENT_DATA[i].quantite > 1) {
    this.ELEMENT_DATA[i].quantite = this.ELEMENT_DATA[i].quantite - 1;
    this.ELEMENT_DATA[i].sous_total -= this.ELEMENT_DATA[i].prix_unit
    this.calculT()
    }
  }

  onClickajouter(service){
    let getElement:any[] = this.ELEMENT_DATA.filter(x=> x.service == service.name_S);
    if(getElement.length > 0){
      getElement[0].sous_total += getElement[0].prix_unit
      getElement[0].quantite += 1
    } else {
      this.ELEMENT_DATA.push({
        service: service.name_S,
        quantite: 1,
        sous_total: service.prix_S,
        prix_unit: service.prix_S,
        delete:''
      })
    }
    this.ELEMENT_DATA = [...this.ELEMENT_DATA];
    this.calculT()
  }

  onClickDelete(index){
    this.ELEMENT_DATA.splice(index, 1);
    this.ELEMENT_DATA = [...this.ELEMENT_DATA];
    this.calculT()
  }

  calculT() {
    this.calculTotal = 0;
    this.ELEMENT_DATA.forEach(service=> {
      this.calculTotal += service.sous_total
    })
  }





}


  export interface services {
    service: string;
    quantite: number;
    sous_total: number;
    prix_unit: number;
    delete: any;
  }


