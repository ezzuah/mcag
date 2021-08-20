import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  memberForm: FormGroup;
  memberId: string;

  constructor(private fb: FormBuilder) {

            this.memberForm = this.fb.group({
              surName: ['', Validators.required],
              otherNames: ['', Validators.required],
              gender: ['', Validators.required],
              phoneNumber: ['', Validators.required],
              nationality: ['', Validators.required],
              occupation: ['', Validators.required],
              maritalStatus: ['', Validators.required],
              placeOfWork: ['', Validators.required],
              sundaySchoolClass: ['', Validators.required],
              educationalLevel: ['', Validators.required],
              residentialAddress: ['', Validators.required],
              email: ['', Validators.required]
            });
  }

  ngOnInit() {
  }

}
