import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {
  private url = 'https://localhost:44360/api/User?includeAddress=true'
  constructor() { }
  getData(){
    fetch(this.url)
      .then(res => res.json())
      .then(data => console.log(data))  
  }
  ngOnInit(): void {
   
this.getData();
   
  }

}
