import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { login, product, signup } from './data-type';
import { query } from '@angular/animations';
import { Router } from '@angular/router';
import {EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  issellerLoggedIn = new BehaviorSubject<boolean>(false)
  loginError = new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private _router: Router) { }

  // Seller signup post api
  signup(data: signup) {
    this.http.post("http://localhost:3000/seller", data, { observe: 'response' }).subscribe((result) => {
      this.issellerLoggedIn.next(true)
      localStorage.setItem('seller', JSON.stringify(result.body))
      this._router.navigateByUrl("seller-home")
    });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.issellerLoggedIn.next(true)
      this._router.navigateByUrl("seller-home")
    }
  }
  //  Seller Login api
  login(data: login) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: "response" }).subscribe((result: any) => {
      if (result && result.body && result.body.length) {
        localStorage.setItem('seller', JSON.stringify(result.body))
        this._router.navigateByUrl("seller-home") 
      } else {
        this.loginError.emit(true)
      }
    })
  }
  //add product api 
  addProduct(data: product) {
    return this.http.post("http://localhost:3000/product", data)
  }
  //products data get api
  productsGetdata(): Observable<any> {
    return this.http.get("http://localhost:3000/product");
  }

  // search api
  searchProduct() {
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`)
  }


}
