import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CustomerService } from '../customer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsCustomerComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  customernew;
  customerData: FormGroup;
  messages;
  constructor(
    private route: ActivatedRoute,
    private service: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.getById();
  }
  creatCustomerData() {
    this.customerData = this.fb.group({
      cusId: this.customernew.cusId,
      cusName: [this.customernew.cusName, [Validators.required, Validators.minLength(2), Validators.maxLength(100) ] ],
      cusAddress: [this.customernew.cusAddress, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      cusCity: [this.customernew.cusCity, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      cusState: [this.customernew.cusState, [Validators.required, Validators.pattern('[a-zA-Z]{2}')]],
      cusZip: [this.customernew.cusZip,
        [Validators.required, Validators.pattern('[0-9]{9,12}')]],
      cusPhone: [this.customernew.cusPhone,
        [Validators.required, Validators.pattern('(\\+84|0)\\d{9,10}')]]
    });
  }
  getById() {
    this.service.getById(this.id).then(res => {
      this.customernew = res;
      this.creatCustomerData();
    });
  }
  onSubmit() {
     this.service.update(this.customerData.value).then(res => {
       this.checkCodeApi(res);
     });
  }
  back() {
    this.router.navigate(['/customer']);
  }

  checkCodeApi(data) {
    switch (data.code) {
      case '001':
        this.messages = data.message;
        break;
      case '002':
        this.messages = data.message;
        break;
      case '003':
        this.messages = data.message;
        break;
      case '004':
        this.messages = data.message;
        break;
      case '006':
        this.messages = data.message;
        break;
      case '200':
      case 200:
        this.back();
        break;
    }
  }
}
