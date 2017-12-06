import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../allservice/product/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProtypeService} from '../../allservice/protype/protype.service';
import {$} from 'jquery';
import { Protypes } from '../../model/protypes';

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
  imageSrc;
  fileName;

  // @ViewChild('fileInput') fileInput: ElementRef;
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

  onFileChange(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      this.fileName = fileInput.target.files[0].name;
      console.log(this.fileName);
      reader.onload = ((e) => {
        this.imageSrc = e.target['result'];
      });

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  createProductDataDefault() {
    this.productAddForm = this.fb.group({
      protype: this.fb.group({
        prtId: ''
      }),
      proName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      proPrice: ['', [Validators.required, Validators.pattern('\\d{2,10}')]],
      proDetails: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      proImage: [''],
    });
  }

  onCheck() {
    this.checkAdd = !this.checkAdd;
  }

  onSubmit() {
    // console.log(this.productAddForm.value);
    this.productAddForm.patchValue({
      proImage: this.fileName
    });
    // console.log(this.productAddForm.value);
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
