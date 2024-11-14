import { Component } from '@angular/core';
import { Book } from '../models/book';
import { Language } from '../models/language';
import { Subject } from '../models/subject';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent {
  book: Book = new Book (
    "Book Title",
    Subject.English,
    new Date(),
    Language.English,
    0
  )

}
