import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerService } from './customer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Customer} from '../model/customer';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerComponent implements OnInit {
  checkAdd = false;
  customers$: Observable<Customer[]>;
  customers;
  searchBy= new FormControl();
  messages;
  customerAddForm: FormGroup;

  private selectedId: number;

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // this.searchBy.valueChanges.subscribe(val => {
    //   val === '' ? this.getAll() : this.service.getName(val).then( res => this.customers = res);
    // });
  }
  createFormCustomerAdd() {
    this.customerAddForm = this.fb.group({
      cusName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      cusAddress: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      cusCity: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      cusPhone: ['', [Validators.required, Validators.pattern('(\\+84|0)\\d{9,10}')]],
      cusState: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2}')]],
      cusZip: ['', [Validators.required, Validators.pattern('[0-9]{9,12}')]]
    });
  }

  getAll(): void {
    this.service.getAll().then(cus => {this.customers = cus; console.log('a'); } );
  }
  ngOnInit() {
    this.getAll();
    this.createFormCustomerAdd();
    this.customers$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getById(+params.get('id'));
      });
    this.searchBy.valueChanges.subscribe(val => {
      val === '' ? this.getAll() : this.service.getName(val)
        .then( res => this.customers = res);
    });
  }

  onCheck() {
    this.checkAdd = !this.checkAdd;
  }

  onSubmit() {
    // console.log(this.customerAddForm.contains(Contr));
    // console.log(this.customerAddForm.value);
    this.service.create(this.customerAddForm.value).then(data => {
      console.log(data);
      this.checkCodeApi(data);
    });
  }

  delete(id: number): void {
    this.service.delete(id).then(() => this.customers = this.customers
      .filter(c => c.cusId !== id));
  }

  contactTrackByFn(item) {
    return item.cusId;
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
        this.getAll();
        this.onCheck();
        break;
    }
  }

}
