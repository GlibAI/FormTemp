import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: any;

  constructor() {
    this.form = {
      firstName : '',
      middleName : '',
      lastName : '',
      currentAddress : '',
      email : '',
      mobileNumber : '',
      position : '',
      fileData : ''
    };
  }
  submit() {
    console.log(this.form);
  }
}
