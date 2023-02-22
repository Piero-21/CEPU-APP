import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CEPU-APP';
  ngOnInit() {
    const inputImage = document.getElementById('inputImage') as HTMLInputElement;
    const previewImage = document.getElementById('previewImage') as HTMLImageElement;

    inputImage.addEventListener('change', (event) => {
      const file = (event.target as HTMLInputElement).files[0];
      previewImage.src = URL.createObjectURL(file);
    });
  }
}