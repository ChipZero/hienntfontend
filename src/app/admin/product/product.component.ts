import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../allservice/product/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProtypeService} from '../../allservice/protype/protype.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  products;
  searchBy= new FormControl();
  checkAdd = false;
  productAddForm: FormGroup;
  messages;
  protypes;

  @ViewChild('fileInput') fileInput: ElementRef;
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
    this.searchBy.valueChanges.subscribe(val => {
      val === '' ? this.getAll() : this.service.getByName(val)
        .then( res => this.products = res);
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productAddForm.get('proImage').setValue(file.name);
    }
  }

  createProductDataDefault() {
    this.productAddForm = this.fb.group({
      Protype: this.fb.group({
        prtId: ''
      }),
      proName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      proPrice: ['', [Validators.required, Validators.pattern('\\d{2,10}')]],
      proDetails: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      proImage: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
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
