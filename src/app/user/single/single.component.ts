import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../allservice/product/product.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  productDetail;
  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getById();
    this.loadScript('../../../assets/js/core.min.js');
    this.loadScript('../../../assets/js/script.js');
  }
  getById() {
    this.service.getById(this.id).then(res => {
      this.productDetail = res;
    });
  }
  public loadScript(url) {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('main')[0].appendChild(node);
  }
}
