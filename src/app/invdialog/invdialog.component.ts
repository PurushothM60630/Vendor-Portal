import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invdialog',
  templateUrl: './invdialog.component.html',
  styleUrls: ['./invdialog.component.css']
})
export class InvdialogComponent implements OnInit {
  inv = sessionStorage.getItem("vinv");
  json = JSON.parse(this.inv);

  constructor() { }

  ngOnInit(): void {
  }

}
