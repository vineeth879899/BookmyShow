import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {

  movieTitle: string | null = null;
  movieImage: string | null = null;
  movieDescription: string | null = null;
  
  releaseDate: string;

  constructor(private router: Router, private route: ActivatedRoute){
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    this.releaseDate = today.toLocaleDateString('en-US', options);

    }

    ngOnInit(): void {
      // Retrieve the movie data from query parameters
      this.route.queryParams.subscribe(params => {
        this.movieTitle = params['title'];
        this.movieImage = params['image'];
        this.movieDescription=params['description']
      });
    }

  rows = Array.from({ length: 10 }, (_, i) => i);
  cols = Array.from({ length: 10 }, (_, i) => i);
  seats: boolean[][] = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => false)
  );
  selectedCount = 0;

  onCheckboxChange(row: number, col: number, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.seats[row][col] = isChecked;
    this.selectedCount = this.seats.flat().filter((seat) => seat).length;
  }

  goToCart(): void {
    this.router.navigate(['/cart'], {
      queryParams: { tickets: this.selectedCount },
    });
  }
  }

