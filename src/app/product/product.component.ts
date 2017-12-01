import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductService} from './product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/product';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProtypeService} from '../protype/protype.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  products;
  products$: Observable<Product[]>;
  searchBy= new FormControl();
  private selectedId: number;
  checkAdd = false;
  productAddForm: FormGroup;
  messages;
  protypes;

  constructor(
    private service: ProductService,
    private prtservice: ProtypeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  getAll() {
    this.service.getAll().then(pro => this.products = pro);
  }

  getAllPrt() {
    this.prtservice.getAll().then(prt => this.protypes = prt);
  }

  ngOnInit() {
    this.getAll();
    this.getAllPrt();
    this.createProductDataDefault();
    this.products$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getById(+params.get('id'));
      });
    this.searchBy.valueChanges.subscribe(val => {
      val === '' ? this.getAll() : this.service.getByName(val)
        .then( res => this.products = res);
    });
  }

  createProductDataDefault() {
    this.productAddForm = this.fb.group({
      tblProtype: this.fb.group({
        prtId: ''
      }),
      proName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      proUnitPrice: ['', [Validators.required, Validators.pattern('\\d{2,10}')]],
      proDetails: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      proImages: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    });
  }

  onCheck() {
    this.checkAdd = !this.checkAdd;
  }

  onSubmit() {
    console.log(this.productAddForm.value);
    this.service.create(this.productAddForm.value).then(data => {
      console.log(data);
      this.checkCodeApi(data);
    });
  }

  contactTrackByFn(item) {
    return item.proId;
  }

  delete(id: number): void {
    this.service.delete(id).then (() => this.products = this.products.filter(p => p.proId !== id));
  }

  checkCodeApi(data) {
    console.log(data.code);
    switch (data.code) {
      case '011':
        this.messages = data.message;
        break;
      case '012':
        this.messages = data.message;
        break;
      case '013':
        this.messages = data.message;
        break;
      case '014':
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
