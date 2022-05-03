import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Movies {
  id: Number;
  moviename: String;
  duration: String;
  leadactor: String;
  genre: String;
  director: String;
  rating: String;
}
@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit {
  title = 'MovieStore';

  Movies: Movies[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  uploadMovie() {
    this.router.navigateByUrl('UploadMovie');
  }

  delete(id: any) {
    this.http.delete('http://localhost:3000/movies/' + id).subscribe(
      (res) => {
        alert('Movie deleted Successfully!');
        this.ngOnInit();
        this.router.navigate(['MovieStore']);
      },
      (err: any) => {
        alert('Movie Delete Failed');
      }
    );
  }
  ngOnInit(): void {
    this.http.get<Movies[]>('http://localhost:3000/movies').subscribe((res) => {
      this.Movies = res;
      console.log(res);
    });
  }
}
