import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, Address, Company } from 'src/app/shared/types';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

const fields = {
  commonInfo: {
    name: {
      validators: ['required']
    },
    phone: {
      validators: ['required']
    },
    email: {
      validators: ['required', 'email']
    },
  },
  company: {
    name: {
      validators: ['required']
    },
    catchPhrase: {
      validators: ['required']
    },
    bs: []
  },
  address: {
    street: {
      validators: ['required']
    },
    suite: {
      validators: ['required']
    },
    city: {
      validators: ['required']
    },
    zipcode: {
      validators: ['required']
    }
  }
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User;

  form: FormGroup;

  fieldNameMap = {
    commonInfo: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Phone',
        field: 'phone'
      },
      {
        label: 'Email',
        field: 'email'
      }
    ],
    company: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Catch Phrase',
        field: 'catchPhrase'
      }
    ],
    address: [
      {
        label: 'Street',
        field: 'street'
      },
      {
        label: 'Suite',
        field: 'suite'
      },
      {
        label: 'City',
        field: 'city'
      },
      {
        label: 'ZipCode',
        field: 'zipcode'
      }
    ]
  }

  get bsFormArray(): FormArray {
    return this.form.get('company').get('bs') as FormArray;
  }
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({});

    Object.keys(fields).forEach(groupKey => {

      this.form.addControl(groupKey, new FormGroup({}));

      const group = this.form.get(groupKey) as FormGroup;

      Object.keys(fields[groupKey]).forEach(fieldKey => {
        
        if (Array.isArray(fields[groupKey][fieldKey])){
          group.addControl(fieldKey, new FormArray([]));
          return;
        }

        const validators = [];
        if (fields[groupKey][fieldKey].validators && Array.isArray(fields[groupKey][fieldKey].validators)) {
          fields[groupKey][fieldKey].validators.forEach((validatorName: string) => {
            switch (validatorName) {
              case 'required':
                validators.push(Validators.required);
                break;
              case 'email':
                validators.push(Validators.email);
                break;
            }
          })
        }
        const control = new FormControl('', validators);
        group.addControl(fieldKey, control);
      })
    });
    
    this.route.data
      .subscribe(({user}) => {
        this.user = user;
        this.form.get('commonInfo').patchValue(this.user)
        this.form.get('company').patchValue({...this.user.company, bs: []})
        this.form.get('address').patchValue({...this.user.address})

        this.user.company.bs.split(' ').forEach(bsEl => {
          this.bsFormArray.push(new FormControl(bsEl));
        })
      });
  }

  addBS() {
    const formArray = this.form.get('company').get('bs') as FormArray;
    formArray.push(new FormControl(''));
  }

  saveUser() {

    const newAddress: Address = {
      street: this.form.value.address.street,
      suite: this.form.value.address.suite,
      city: this.form.value.address.city,
      zipcode: this.form.value.address.zipcode
    }

    const newCompany: Company = {
      name: this.form.value.company.name,
      catchPhrase: this.form.value.company.catchPhrase,
      bs: this.form.value.company.bs,
    }

    const newUser: User = {
      id: this.user.id,
      name: this.form.value.commonInfo.name,
      email: this.form.value.commonInfo.email,
      username: this.user.username,
      phone: this.form.value.commonInfo.phone,
      website: this.user.website,
      address: newAddress,
      company: newCompany
    };

    console.log(newUser);
  }
}
