import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  transactions: any[] = [];
  user: any;

  constructor(private userDataService: UserdataService, private dataService: DataService) {}

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

    
    const userId = 1;
    this.dataService.getUserById(userId).subscribe(
      (data) => {
        this.user = data;
        console.log('User details:', this.user);
      },
      (error) => {
        console.error('Error fetching user by ID', error);
      }
    );
  }
  }
  



