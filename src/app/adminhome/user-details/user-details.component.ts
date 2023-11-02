import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  transactions: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log("Hello");
    this.dataService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
        console.log(this.transactions);
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
  }
}
