import { MembersService } from './members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: any = [];

  constructor(private membersService: MembersService,
              private toast: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.membersService.getMembers().subscribe((response: any) => {
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
