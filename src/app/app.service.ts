import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 private dataSource = new BehaviorSubject({});
 data = this.dataSource.asObservable();

  sendData(datas) {
    this.dataSource.next(datas);
  }

  displayData(){
    return this.data;
  }

}
