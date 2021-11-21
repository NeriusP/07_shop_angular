import { Component, OnInit } from '@angular/core';
import {LoggingService} from './../../logging.service';
import {ClickCounter} from './../../clickCounter.service'
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [LoggingService]
})
export class AddUserComponent implements OnInit {

  // constructor(private loggingService: LoggingService, private clickCounter: ClickCounter) { }
  constructor(private userService: UserService){}
  ngOnInit(): void {
  }

  addUser(name: string, surname: string){
    this.userService.addUser(name, surname);
    // console.log("Pridedame naują vartotoją");
    // this.loggingService.logData("Pridedame naują vartotoją");
    // this.clickCounter.click();
    // this.clickCounter.onClick.emit("PRIDĖJAU NAUJĄ VARTOTOJĄ");
  }

}
