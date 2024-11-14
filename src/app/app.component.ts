import { Component } from '@angular/core';
import { BooksListComponent } from "./books-list/books-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BooksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library-app';
}
