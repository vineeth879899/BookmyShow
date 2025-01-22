import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

isPaymentSuccessful = true;

totalAmount=0;

constructor(private location: Location) {}

ngOnInit(): void {
  // Get the totalAmount passed from the CartComponent via Router state
  const navigationState = this.location.getState() as { totalAmount: number };
  this.totalAmount = navigationState?.totalAmount || 0;  // Default to 0 if no state is passed
}

}
