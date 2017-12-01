import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Protype} from '../model/protype';

@Injectable()
export class ProtypeService {
  private url = 'http://localhost:8080/api/protype';
  private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getAll() {
    const urlapi = `${this.url}/all`;
    return this.http.get(urlapi).toPromise()
      .then(res => res.json());
  }

  create(protype: Protype) {
    console.log(protype);
    const urlapi = `${this.url}/add`;
    return this.http.post(urlapi, JSON.stringify(protype), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(protype: Protype) {
    const urlapi = `${this.url}/update`;
    return this.http.put(urlapi, JSON.stringify(protype), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  delete(id: number) {
    const urlapi = `${this.url}/delete/${id}`;
    return this.http.delete(urlapi, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
