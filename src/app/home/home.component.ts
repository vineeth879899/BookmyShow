import { Component } from '@angular/core';
import { SeatSelectionComponent } from '../seat-selection/seat-selection.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  
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
    },
    {
      title: 'McDowell Soda Yaari ',
      description: 'A triangular crime comedy and thrills',
      image: './assets/images/s2.avif',
      link: '/seats' 
    },
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
      title: 'Azaad',
      description: 'Latest action movies just for you.',
      image: './assets/images/m4.avif',
      link: '/seats'
    },
    {
      title: 'RUN WILD MARATHON 2025',
      description: '5k, Marathon | Multi Language | 5yrs +',
      image: './assets/images/e4.avif',
      link: '/seats'
    },
    {
      title: 'Dhayaas INTERNATIONAL',
      description: 'A triangular crime comedy and thrills',
      image: './assets/images/s1.avif',
      link: '/seats' 
    },
    {
      title: ' Sky Force',
      description: 'Action Historical,Thriller',
      image: './assets/images/m6.avif',
      link: '/seats'
    },
    {
      title: 'CHESS',
      description: 'Super Play of the Challengers.',
      image: './assets/images/e6.avif',
      link: '/seats'
    },
    {
      title: 'Unplugged ft. Saleha Live (Night)',
      description: 'Bollywood, Regional, Romantic | English| ',
      image: './assets/images/s6.avif',
      link: '/seats'
    },
    {
      title: 'CHENNAIYIN FC - ISL 2024/2025',
      description: 'Football | 2yrs + | 1hr 30mins',
      image: './assets/images/e5.avif',
      link: '/seats'
    }, 
    {
      title: 'EcoRun System',
      description: 'A triangular crime comedy and Run',
      image: './assets/images/e1.avif',
      link: '/seats' 
    },
  ];
}
