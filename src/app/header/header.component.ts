import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }
  searchProduct(query: KeyboardEvent) {
    // if (query) {
    //   const element = query.target as HTMLInputElement;
    //   this.service.searchProduct(element.value).subscribe(() => {

    //   })
    // }
  }
}
