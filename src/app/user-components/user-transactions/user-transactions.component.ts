import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css']
})
export class UserTransactionsComponent implements OnInit {
  transactions: any[] = [];

  constructor(private userDataService: UserdataService) {}

  ngOnInit(): void {
    console.log("Hello");
    this.userDataService.getTransactions().subscribe(
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
