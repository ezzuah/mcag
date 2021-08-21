import { MembersService } from './../members.service';
import { GroupMinistriesService } from './../../groups-ministries/groups.ministries.service';
import { SundaySchoolService } from './../../sunday-school/sunday.school.service';
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

  ministries: any = [];
  groups: any = [];
  classes: any = [];
  eduLevel: any = [];

  constructor(private fb: FormBuilder,
              private sundaySchoolService: SundaySchoolService,
              private groupsMinistriesService: GroupMinistriesService,
              private memberService: MembersService) {

            this.memberForm = this.fb.group({
              surname: ['', Validators.required],
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
              dateOfBirth: ['', Validators.required],
              memberStatus: ['', Validators.required],
              ministry: [''],
              email: ['']
            });
  }

  ngOnInit() {
    this.loadMinistries();
    this.loadGroups()
    this.loadEduLevel()
    this.loadSundaySchoolClasses();
  }

  loadMinistries() {
    this.groupsMinistriesService.getMinistries().subscribe((response) => {
      if (response) {
        this.ministries = response;
      }
    })
  }

  loadGroups() {
    this.groupsMinistriesService.getGroups().subscribe((response) => {
      if (response) {
        this.groups = response;
      }
    })
  }


  loadSundaySchoolClasses() {
    this.sundaySchoolService.getClasses().subscribe((response) => {
      if (response) {
        this.classes = response;
      }
    }, err => {
      console.log(err)
    })
  }

  loadEduLevel() {
    this.groupsMinistriesService.getEducationalLevels().subscribe((response) => {
      if (response) {
        this.eduLevel = response;
      }
    })
  }


  saveMember() {
    console.log(this.memberForm.value)
    const fv = this.memberForm.value;
    fv.sundaySchoolClass = Number(fv.sundaySchoolClass);
    fv.ministry = Number(fv.ministry);
    fv.educationalLevel = Number(fv.educationalLevel);

    this.memberService.addNew(fv).subscribe((response: any)=> {
      if (response) {
        this.memberForm.reset();
      }
    }, err=> {
      console.log(err)
    })
  }

}
