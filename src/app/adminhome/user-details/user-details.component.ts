import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id']; 
      this.dataService.getUserById(userId).subscribe(
        (data) => {
          this.user = [data];
          console.log(this.user);
        },
        (error) => {
          console.error('Error fetching user', error);
        }
      );
    });
  }

  getTotalBalance(accounts: any[]): number {
    let totalBalance = 0;
    for (const account of accounts) {
      totalBalance += account.balance;
    }
    return totalBalance;
  }
  
}
