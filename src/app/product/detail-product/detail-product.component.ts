import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailProductComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  productDetail;
  productData: FormGroup;
  messages;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.getById();
  }
  getById() {
    this.service.getById(this.id).then(res => {
      this.productDetail = res;
      this.createProductData();
    });
  }
  createProductData() {
    this.productData = this.fb.group({
      proId: this.productDetail.proId,
      proName: [this.productDetail.proName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      proUnitPrice: [this.productDetail.proUnitPrice, [Validators.required, Validators.pattern('\\d{2,10}')]]
    });
  }
  back() {
    this.router.navigate(['/product']);
  }
  onSubmit() {
    this.service.update(this.productData.value).then(res => {
      this.checkCodeApi(res);
    });
  }

  checkCodeApi(data) {
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
        this.back();
        break;
    }
  }
}
