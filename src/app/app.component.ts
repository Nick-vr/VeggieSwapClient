import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VeggieSwapClient';

  private url = 'https://localhost:5001/api/user'

  getData(){
    fetch(this.url)
      .then(res => res.json())
      .then(data => console.log(data))
  }
}
