import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductOneComponent } from './product-one/product-one.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  isClicked:boolean = false;

  makeItTrue() {
    this.isClicked = true;
  }

  makeItFalse() {
    this.isClicked = false;
  }

}
