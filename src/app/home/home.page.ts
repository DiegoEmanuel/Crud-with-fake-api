import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiService) {
    //  this.createData();
    // this.readData();
    this.updateData();
    // this.deleteData();
  }
  createData() {
    const data: any = {
      title: 'Diego',
      body: 'Teste',
      UserId: 10
    };
    this.apiService.createData(data).subscribe(data => {
      console.log(data);
    });
  }
  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  }
  updateData() {
    const data: any = {
      id: 1,
      title: 'Teste',
      body: 'bar',
      userId: 1
    };
    this.apiService.updateData(data).subscribe(data => {
      console.log(data);
    });

  }
}
