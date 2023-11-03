import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any = {}; 

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const userId: number = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    if (userId > 0) {
      this.dataService.getUserById(userId).subscribe(user => {
        this.user = user;
      });
    }
  }

  updateUser(): void {
    console.log('Request Payload:', this.user);
    this.dataService.updateUser(this.user).subscribe(response => {
      console.log('User updated successfully:', response);
    });
  }
}
