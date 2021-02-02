import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: any[] = [];

  constructor(private router: Router) { }
  ngOnInit(): void {
    for (let i = 0; i < 12; i++) {
      this.books.push({
        id: i,
        title: `Book ${i}`,
        author: `Author ${i}`,
        imageUrl: 'https://place-hold.it/100x100',
        publishedDate: Date.now()
      });
    }
  }

  public async onDetail(book: any): Promise<void> {
    await this.router.navigate([`/books/${book.id}`]);
  }

}
