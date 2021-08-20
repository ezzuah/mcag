import { GlobalService } from './../services/global.service';
import { GroupMinistriesService } from './groups.ministries.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-groups-ministries',
  templateUrl: './groups-ministries.component.html',
  styleUrls: ['./groups-ministries.component.scss']
})
export class GroupsMinistriesComponent implements OnInit {


  newForm: FormGroup;

  data: any = [];

  constructor(private groupsMinistriesService: GroupMinistriesService,
              private fb: FormBuilder,
              private global: GlobalService,
              private toast: ToastrService,
              private modalService: NgbModal) {

                this.newForm = this.fb.group({
                  name: ['', Validators.required],
                  description: ['', Validators.required],
                  type: [''],
                  createdBy: [this.global.adminData.name]
                });
              }

  ngOnInit() {
    this.loadMinistries()
  }

  loadMinistries() {
    this.groupsMinistriesService.getMinistries().subscribe((response) => {
      if (response) {
        this.data = response;
      }
    })
  }

  getGroups() {

  }

  addNew(content) {
    this.modalService.open(content);
  }

  saveEntry() {
    const payload = this.newForm.value;
    console.log(payload)
    this.groupsMinistriesService.addNew(payload).subscribe((response) => {
      if (response) {
        this.toast.success('Saved Successfully');
        this.loadMinistries();
      }
    }, err => {
      console.log(err)
    })
  }

}
