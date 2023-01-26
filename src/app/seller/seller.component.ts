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
  loginData!: FormGroup;
  showLogin = false;
  authError: string = "";

  constructor(private service: DataService, private _router: Router) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    })
    this.loginData = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
    this.service.reloadSeller();
  }
  get input(): { [key: string]: AbstractControl } {
    return this.data.controls;

  }
  dataSubmit() {
    this.service.signup(this.data.value)
  }
  loginDataSubmit() {
    this.authError = "";
    this.service.login(this.loginData.value)
    this.service.loginError.subscribe((result) => {
      if (result) {
        this.authError = "Email or password not coorect";
      }
    })
  }

  openLogin() {
    this.showLogin = true
  }
  openSignup() {
    this.showLogin = false
  }
}
