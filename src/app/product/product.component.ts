import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Product_Of_data: any;




  constructor(private userservice: DataService, private _router: Router) { }

  ngOnInit(): void {
    this.userservice.productsGetdata().subscribe((res) => {
      this.Product_Of_data = res
    })
  }

  addcart() {

  }
}
