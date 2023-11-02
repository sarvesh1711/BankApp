import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: any[] = [];

  constructor(private userDataService: UserdataService) {}

  ngOnInit(): void {
    console.log("Hello");
    this.userDataService.getTransactionss().subscribe(
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
