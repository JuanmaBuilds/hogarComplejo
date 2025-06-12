import { Component, Input } from '@angular/core';

@Component({
  selector: 'photo-carrousell',
  templateUrl: './carrousell.component.html',
  styleUrls: ['./carrousell.component.css'],
})
export class CarrousellComponent {
  @Input() photos: string[] = [];
  currentIndex = 0;

  goToPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToNext(): void {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    }
  }

  get currentPhoto(): string {
    return this.photos[this.currentIndex];
  }
}
