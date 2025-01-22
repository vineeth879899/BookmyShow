import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
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
      title: 'EcoRun Sports',
      description: 'Marathon | English, Hindi | 5hrs 30mins ',
      image: './assets/images/e1.avif',
      link: '/seats'
    },
    {
      title: 'Red Bull Moto Jam',
      description: 'Bike Racing | English | 6hrs',
      image: './assets/images/e3.avif',
      link: '/seats'
    },
    {
      title: 'CHENNAIYIN FC - ISL 2024/2025',
      description: 'Football | 2yrs + | 1hr 30mins',
      image: './assets/images/e5.avif',
      link: '/seats'
    },
    {
      title: 'RUN WILD MARATHON 2025',
      description: '5k, Marathon | Multi Language | 5yrs +',
      image: './assets/images/e4.avif',
      link: '/seats'
    },
    {
      title: 'CHENNAIYIN FC - ISL 2024/2025',
      description: 'Football | 2yrs + | 1hr 30mins',
      image: './assets/images/e5.avif',
      link: '/seats'
    },
    {
      title: 'EcoRun Sports',
      description: 'Marathon | English, Hindi | 5hrs 30mins ',
      image: './assets/images/e6.avif',
      link: '/seats'
    },
  ];

}
