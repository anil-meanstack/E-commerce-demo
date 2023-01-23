import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  data!: FormGroup;
  constructor(private signup: DataService, private _router: Router) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    })
  }
  get input(): { [key: string]: AbstractControl } {
    return this.data.controls;

  }
  dataSubmit() {
   this.signup.signup(this.data.value).subscribe(res=>{
   console.log(res)
   })
  }

}
