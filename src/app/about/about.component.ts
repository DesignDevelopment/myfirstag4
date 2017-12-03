import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cfullImagePath: string;
  constructor() { 
    this.cfullImagePath = 'assets/images/body-perineologie.png';
  }

  ngOnInit() {
    
  }

}
