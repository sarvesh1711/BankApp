import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-accountrequest',
  templateUrl: './accountrequest.component.html',
  styleUrls: ['./accountrequest.component.css']
})
export class AccountrequestComponent implements OnInit {

  accountrequest:any[]=[];
  
  constructor(private dataService:DataService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    console.log("Hello");
    this.dataService.getAccountRequest().subscribe(
      (data) => {
        this.accountrequest = data;
        console.log(this.accountrequest);
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );

    }

    getSafeUrl(url: string): SafeResourceUrl {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    private getFileNameFromUrl(url: string): string {
      const parts = url.split('/');
      return parts[parts.length - 1];
    }
  }
