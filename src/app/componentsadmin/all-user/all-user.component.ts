import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

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
