import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movieTitle: string | null = null;
  movieImage: string | null = null;

  constructor( private route: ActivatedRoute){
      }

  ngOnInit(): void {
    // Retrieve the movie data from query parameters
    this.route.queryParams.subscribe(params => {
      this.movieTitle = params['title'];
      this.movieImage = params['image'];
    });
  }
  
  movies = [
    {
      title: 'Sankranthiki Vasthunam',
      description: 'A triangular crime comedy and thrills',
      image: './assets/images/m1.avif',
      link: '/seats' 
    },
    {
      title: 'Daaku Maharaaj',
      description: 'Discover the greatest hits of the season.',
      image: './assets/images/m2.avif',
      link: '/seats'
    },
    {
      title: 'Emergency',
      description: 'Latest action movies just for you.',
      image: './assets/images/m3.avif',
      link: '/seats'
    },
    {
      title: 'Azaad',
      description: 'Latest action movies just for you.',
      image: './assets/images/m4.avif',
      link: '/seats'
    },
    {
      title: 'Mufasa: The Lion King',
      description: 'Latest action movies just for you.',
      image: './assets/images/m5.avif',
      link: '/seats'
    }
  ]

}
