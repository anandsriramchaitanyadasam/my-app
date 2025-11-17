import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  loading = false;
  error = '';
  message = '';

  constructor(private http: HttpClient) {}

  loadGreeting() {
    this.loading = true;
    this.error = '';
    this.message = '';

    this.http.get<any>('http://localhost:3000/api/greeting').subscribe({
      next: (res) => {
        this.message = res.message;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch message';
        this.loading = false;
      }
    });
  }
}
