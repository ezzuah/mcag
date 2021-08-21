import { SundaySchoolService } from './sunday.school.service';
import { GlobalService } from './../services/global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sunday-school',
  templateUrl: './sunday-school.component.html',
  styleUrls: ['./sunday-school.component.scss']
})
export class SundaySchoolComponent implements OnInit {

  schoolList: any = [];
  hasSchoolListLoad = false;

  modalOption: NgbModalOptions = {};

  newForm: FormGroup;

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private sundaySchoolService: SundaySchoolService,
              private toast: ToastrService,
              private global: GlobalService) {

              this.newForm = this.fb.group({
                name: ['', Validators.required],
                description: ['', Validators.required],
                createdBy: [this.global.adminData.name]
              });
  }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this.sundaySchoolService.getClasses().subscribe((response) => {
      if (response) {
        this.schoolList = response;
        this.hasSchoolListLoad = true;
      }
    }, err => {
      console.log(err)
    })
  }




  addNew(content) {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalService.open(content, this.modalOption);
  }


  saveEntry() {
    const payload = this.newForm.value;
    console.log(payload)
    this.sundaySchoolService.addNew(payload).subscribe((response: any) => {
      if (response) {
        this.toast.success(response.message);
        this.newForm.reset();
        this.loadClasses();
      }
    }, err => {
      console.log(err)
    })

  }

}
