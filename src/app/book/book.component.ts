import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  public book = {
    title: 'Book',
    author: 'Author',
    imageUrl: 'https://place-hold.it/100x100',
    publishedDate: Date.now()
  };

}
