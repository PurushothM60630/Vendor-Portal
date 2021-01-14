import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vcmdialog',
  templateUrl: './vcmdialog.component.html',
  styleUrls: ['./vcmdialog.component.css']
})
export class VcmdialogComponent implements OnInit {
  vcm = sessionStorage.getItem("vcm");
  json = JSON.parse(this.vcm);
  constructor() { }

  ngOnInit(): void {
  }

}
