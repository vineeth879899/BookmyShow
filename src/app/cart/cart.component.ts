import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

// closePaymentDialog() {
//   this.isPaymentSuccessful = false;
// }

isPaymentSuccessful = false;

openPaymentDialog() {
  this.router.navigate(['/dialog'], {
    state: { totalAmount: this.totalAmount }
  });
}


  ticketsBooked = 0;
  bookedTickets: { row: number; col: number; price: number }[] = [];
  totalAmount = 0;
  ticketPrice = 150;

  constructor(private router :Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.ticketsBooked = +params['tickets'] || 0;

      // Mockup of booked ticket positions (could be passed through state or a service)
      // This assumes seats booked are passed or pre-determined for simplicity.
      for (let i = 0; i < this.ticketsBooked; i++) {
        const row = Math.floor(i / 10) + 1; // Simulating rows
        const col = (i % 10) + 1; // Simulating columns
        this.bookedTickets.push({ row, col, price: this.ticketPrice });
      }

      // Calculate total amount
      this.totalAmount = this.ticketsBooked * this.ticketPrice;
    });
  }
}
