import { Component, OnInit } from '@angular/core';
import { ImgPath } from '../../app.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  BannerImgPath: string;
  constructor() { 
    this.BannerImgPath = `${ImgPath}`
   }

  ngOnInit(): void {

  }

}
