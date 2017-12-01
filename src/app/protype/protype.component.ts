import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Protype } from '../model/protype';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProtypeService } from './protype.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-protype',
  templateUrl: './protype.component.html',
  styleUrls: ['./protype.component.css']
})
export class ProtypeComponent implements OnInit {
  protypes;
  protypes$: Observable<Protype[]>;
  searchBy = new FormControl();
  private selectedId: number;
  checkAdd = false;
  protypeAddForm: FormGroup;
  messages;

  constructor(
    private service: ProtypeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAll();
    this.createProtypeDataDefault();
  }

  getAll() {
    this.service.getAll().then(prt => this.protypes = prt);
  }

  createProtypeDataDefault() {
    this.protypeAddForm = this.fb.group({
      prtName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    });
  }

  onCheck() {
    this.checkAdd = !this.checkAdd;
  }

  contactTrackByFn(item) {
    return item.prtId;
  }

  delete(id: number): void {
    this.service.delete(id).then (() => this.protypes = this.protypes.filter(p => p.prtId !== id));
  }

  onSubmit() {
    console.log(this.protypeAddForm.value);
    this.service.create(this.protypeAddForm.value).then(data => {
      console.log(data);
      this.checkCodeApi(data);
    });
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
