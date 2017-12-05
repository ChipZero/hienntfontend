import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProtypeService} from '../../../allservice/protype/protype.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail-protype',
  templateUrl: './detail-protype.component.html',
  styleUrls: ['./detail-protype.component.css']
})
export class DetailProtypeComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  protypeDetails;
  protypeData: FormGroup;
  messages;

  constructor(
    private route: ActivatedRoute,
    private service: ProtypeService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.service.getById(this.id).then(res => {
      console.log(res);
      this.protypeDetails = res;
      this.createProtypeData();
    });
  }

  createProtypeData() {
    this.protypeData = this.fb.group({
      prtId: this.protypeDetails.prtId,
      prtName: [this.protypeDetails.prtName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    });
  }
  back() {
    this.router.navigate(['/admin/protype']);
  }
  onSubmit() {
    this.service.update(this.protypeData.value).then(res => {
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
