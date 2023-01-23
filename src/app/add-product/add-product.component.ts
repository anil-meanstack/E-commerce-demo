import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { product } from '../data-type';
import { DataService } from '../data.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   productData!:FormGroup;
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.productData=new FormGroup({
      name:new FormControl,
      price:new FormControl,
      color:new FormControl,
      category:new FormControl,
      image:new FormControl,
      description:new FormControl
    })
  }
  get input(): { [key: string]: AbstractControl } {
    return this.productData.controls;

  }
  dataSubmit(){
   this.service.addProduct(this.productData.value).subscribe((res)=>{
      this.productData.reset();
   })
  }
}
