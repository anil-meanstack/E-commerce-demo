import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { product, signup } from './data-type';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // post api
  signup(data: signup): Observable<any> {
    return this.http.post("http://localhost:3000/seller", data);
  }
  //add product api 
  addProduct(data:product){
    return this.http.post("http://localhost:3000/product",data)
  }
  //products data get api
  productsGetdata():Observable<any> {
    return this.http.get("http://localhost:3000/product");
  }

  // search api
  searchProduct(){
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`)
  }


}
