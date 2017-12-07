import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../allservice/product/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProtypeService} from '../../../allservice/protype/protype.service';

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
  protypes;
  imageSrc= '';
  fileName;
  valuaType;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private prtservice: ProtypeService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllPrt();
    this.getById();
  }
  getById() {
    this.service.getById(this.id).then(res => {
      this.productDetail = res;
      this.imageSrc = 'assets/images/' + this.productDetail.proImage;
      this.valuaType = this.productDetail.protype.prtId;
      this.createProductData();
    });
  }
  getAllPrt() {
    this.prtservice.getAll().then(prt => this.protypes = prt);
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
      this.productData.patchValue({
        proImage: this.fileName
      });
    }
  }
  createProductData() {
    this.productData = this.fb.group({
      proId: this.productDetail.proId,
      protype: this.fb.group({
        prtId: [this.productDetail.protype.prtId]
      }),
      proName: [this.productDetail.proName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      proPrice: [this.productDetail.proPrice, [Validators.required, Validators.pattern('\\d{2,10}')]],
      proDetails: [this.productDetail.proDetails],
      proImage: [this.productDetail.proImage],
      proQuickView: [this.productDetail.proQuickView, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    });
  }
  back() {
    this.router.navigate(['/admin/product']);
  }
  onSubmit() {

    console.log(this.productData.value);
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
