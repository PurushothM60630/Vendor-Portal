import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  po = sessionStorage.getItem("vpo");
  json = JSON.parse(this.po);
  constructor() { }

  ngOnInit(): void {
  }

}
