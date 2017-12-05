import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Products} from '../../model/products';

@Injectable()
export class ProductService {
  private url = 'http://localhost:8080/api/product';
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAll() {
    const urlapi = `${this.url}/all`;
    return this.http.get(urlapi).toPromise()
    .then(res => res.json());
  }

  getName(name: string) {
    const urlapi = `${this.url}/getname/?name=${name}`;
    return this.http.get(urlapi).toPromise()
    .then(res => res.json());
  }

  create(product: Products) {
    const urlapi = `${this.url}/add`;
    return this.http.post(urlapi, JSON.stringify(product), { headers: this.headers })
    .toPromise()
      .then(res => res.json())
    .catch(this.handleError);
  }

  update(product: Products) {
    const urlapi = `${this.url}/update`;
    return this.http.put(urlapi, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: number) {
    const urlapi = `${this.url}/${id}`;
    return this.http.delete(urlapi, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  getById(id: number) {
    const urlapi = `${this.url}/${id}`;
    return this.http.get(urlapi).toPromise().then(res => res.json());
  }
  getByType(id: number) {
    const urlapi = `${this.url}/bytype/${id}`;
    return this.http.get(urlapi).toPromise()
      .then(res => res.json());
  }
  getByPrtId(id: number) {
    const urlapi = `${this.url}/getbyprotype/${id}`;
    return this.http.get(urlapi).toPromise().then(res => res.json());
  }

  getByName(proName: string) {
    const urlapi = `${this.url}/getbyname/?proName=${proName}`;
    return this.http.get(urlapi).toPromise().then(res => res.json());
  }

  getByPrice(proPrice: number) {
    const urlapi = `${this.url}/getbyprice/?proPrice=${proPrice}`;
    return this.http.get(urlapi).toPromise().then(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
