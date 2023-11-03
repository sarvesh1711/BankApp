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
  searchQuery: string = '';
  public filteredContacts:any[]=[]
  public contact:any[]=[]

  constructor(private userDataService: UserdataService, private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchTransactions();
    console.log("Hello");
    this.userDataService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
        this.filteredContacts=data;
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

  fetchTransactions(): void {
    this.userDataService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
  }
    searchOk(searchName:string){
      searchName=this.searchQuery
      console.log(searchName);
      
      if(!searchName)
      {
      console.log("User not found");
      
  }
  const filteredUsers=this.filteredContacts.filter(
       contact=>JSON.stringify(contact).toLowerCase().includes(searchName.toLowerCase())
    )
    console.log(filteredUsers);
    this.filteredContacts = filteredUsers;
    
  }

  // searchById(): void {
  //   const searchId: number = parseInt(this.searchQuery, 10);
  //   if (isNaN(searchId)) {
  //     console.log('Invalid ID');
  //     this.filteredContacts = []; 
  //   } else {
  //     const filteredUsers = this.transactions.filter(user => user.userid === searchId);
  //     this.filteredContacts = filteredUsers;
  //   }
  // }
  }

  



