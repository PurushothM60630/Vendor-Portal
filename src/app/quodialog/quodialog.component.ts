import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quodialog',
  templateUrl: './quodialog.component.html',
  styleUrls: ['./quodialog.component.css']
})
export class QuodialogComponent implements OnInit {
  quo = sessionStorage.getItem("vquo");
  json = JSON.parse(this.quo);
  constructor() { }

  ngOnInit(): void {
  }

}
