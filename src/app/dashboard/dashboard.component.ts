import { MembersService } from './../members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  members: any = [];

  constructor(private router: Router,
              private membersService: MembersService) { }

  ngOnInit() {
    this.loadMembers()
}

loadMembers() {
  this.membersService.getMembers().subscribe((response) => {
    if (response) {
      this.members = response;
    }
  }, err => {
    console.log(err)
  })
}

addMember() {
  this.router.navigate(['/members/add-member'])
}

}
