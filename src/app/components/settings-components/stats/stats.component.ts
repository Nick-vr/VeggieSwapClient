import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  data: any;
  constructor() {
    this.data = {
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
          ],
          label: 'My dataset',
        },
      ],
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    };
  }

  ngOnInit(): void {}
}
