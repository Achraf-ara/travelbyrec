import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})
export class DefaultHomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;

  constructor(private observer : BreakpointObserver,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode ='over';
        this.sidenav.close()
      }
      else{
        this.sidenav.mode = 'side';
        this.sidenav.close()
        // this.sidenav.open()
      }
    })
  }


}
