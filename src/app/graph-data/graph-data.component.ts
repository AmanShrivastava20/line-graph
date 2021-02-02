import { Component, OnInit } from '@angular/core';
import data from '../_file/data.json';
import { AppService } from '../app.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.css']
})
export class GraphDataComponent implements OnInit {

  public dataList = data;

  constructor(
    private service: AppService,
    private router: Router
    ) { }

  ngOnInit(): void {}

  sendData() {
    this.service.sendData(this.dataList);
    this.router.navigate(['/gplot']);
  }

}
