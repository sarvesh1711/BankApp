import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {

  query: any[] = [];
  user: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log("Hello");
    this.dataService.getQuery().subscribe(
      (data) => {
        this.query = data;
        console.log(this.query);
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
}
}
