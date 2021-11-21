import { Component, Input, OnInit } from '@angular/core';
import {LoggingService} from './../../../logging.service'
import {ClickCounter} from './../../../clickCounter.service'
import { UserService } from './../../../user.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css'],
  // providers: [LoggingService]
})
export class OrderProductComponent implements OnInit {
  @Input() productName;
  @Input() productPrice;

//   constructor(private loggingService: LoggingService, private clickCounter: ClickCounter) { 
//     this.clickCounter.onClick.subscribe((status: string) => {
//     alert("Pranešimas iš order-product: " + status);
//   });
// }
users;
constructor(private userService: UserService){
  
}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  order(user){
    console.log("Užsakyta. Produktas " + this.productName + ", vartotojas: " + user.value);
    this.userService.order(user.value, this.productName, this.productPrice);
    
    // console.log("Užsakomas naujas produktas");
    // this.loggingService.logData("Užsakomas naujas produktas");
    // this.clickCounter.click();
  }

}
