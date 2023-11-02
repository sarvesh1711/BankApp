import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  showAddButton: boolean = true;
  showForm: boolean = false;

  toggleFormVisibility(): void {
    this.showAddButton = !this.showAddButton;
    this.showForm = !this.showForm;
  }
}
