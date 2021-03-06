import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../allservice/product/product.service';
import {ProtypeService} from '../../../allservice/protype/protype.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products;
  protypes;
  byType;
  constructor(
    private servicePro: ProductService,
    private servicePrt: ProtypeService
  ) { }

  ngOnInit() {
    this.getAllPro();
    this.getAllPrt();
  }
  getAllPro() {
    this.servicePro.getAll().then(pro => this.products = pro);
  }
  getAllPrt() {
    this.servicePrt.getAll().then(prt => this.protypes = prt);
  }
  getByType(prtId) {
    this.servicePro.getByType(prtId).then(pro => this.byType = pro);
  }
}
