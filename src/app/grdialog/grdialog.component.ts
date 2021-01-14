import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grdialog',
  templateUrl: './grdialog.component.html',
  styleUrls: ['./grdialog.component.css']
})
export class GrdialogComponent implements OnInit {
  gr = sessionStorage.getItem("vgr");
  json = JSON.parse(this.gr);
  constructor() { }

  ngOnInit(): void {
  }

}
