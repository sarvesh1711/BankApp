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
  searchCriteria: string = 'id'; 
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
  //   searchOk(searchName:string){
  //     searchName=this.searchQuery
  //     console.log(searchName);
      
  //     if(!searchName)
  //     {
  //     console.log("User not found");
      
  // }
  // const filteredUsers=this.filteredContacts.filter(
  //      contact=>JSON.stringify(contact).toLowerCase().includes(searchName.toLowerCase())
  //   )
  //   console.log(filteredUsers);
  //   this.filteredContacts = filteredUsers;
    
  // }

  

  onDelete(id?: any){
    console.log("first step " +id);
    
    if(id){
      this.dataService.deleteUser(id).subscribe((data)=>{
        location.reload();
      });
    }
  }
  loadDataFromService() {
    throw new Error('Method not implemented.');
  }

  search(): void {
    if (!this.searchQuery) {
      console.log('User not found');
      this.filteredContacts = [];
      return;
    }

    const filteredUsers = this.transactions.filter(user => {
      const searchValue = this.searchQuery.toLowerCase();
      if (this.searchCriteria === 'id') {
        return user.userid.toString().includes(searchValue);
      } else if (this.searchCriteria === 'firstname') {
        return user.firstname.toLowerCase().includes(searchValue);
      } else if (this.searchCriteria === 'lastname') {
        return user.lastname.toLowerCase().includes(searchValue);
      } else if (this.searchCriteria === 'username') {
        return user.username.toLowerCase().includes(searchValue);
      }
      return false;
    });

    this.filteredContacts = filteredUsers;
  }
  }

  



