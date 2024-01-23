import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  bdate = new Date();
  name = "RUCHI";
  currency = 101;
  pi = 3.1432432434;
  users = [
    {name:'Dennis',age:21},
    {name:'Matt',age:33},
    {name:'Adam',age:21}
  ];
  students = [
    {firstname:'Ruchi',marks:78},
    {firstname:'Dipti',marks:90},
    {firstname:'Rakesh',marks:40},
    {firstname:'Bhavin',marks:45},

  ];
  filteredstring:string = '';
  animals : string[];
  constructor(){

  this.animals = ['tiger','cow','goat','dog','cat'];
  }

  AddUser(){
    this.users = [...this.users,{name:'Ben',age:22}];
  }
}
