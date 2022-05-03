import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  public uploadForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      moviename: ['', Validators.required],
      duration: ['', Validators.required],
      rating: ['', Validators.required],
      leadactor: ['', Validators.required],
      director: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }
  upload() {
    this.http
      .post<any>('http://localhost:3000/movies', this.uploadForm.value)
      .subscribe(
        (res) => {
          alert('Movie Uploaded SuccessFull');
          this.router.navigate(['MovieStore']);
        },
        (err: any) => {
          alert('Something went wrong');
        }
      );
  }
  reset() {
    this.uploadForm.reset();
  }
}
