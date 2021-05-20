import { Component, OnInit } from '@angular/core';
import { ImgPath } from '../../app.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  VeggiesImgPath: string;

  constructor() {
    this.VeggiesImgPath = `${ImgPath}/veggies`;
  }

  ngOnInit(): void {}
}
