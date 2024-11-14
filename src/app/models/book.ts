import { Language } from "./language";
import { Subject } from "./subject";

export class Book {
  title: string;
  subject: Subject;
  publishDate: Date;
  language: Language;
  pages: number;

  constructor(
    title: string,
    subject: Subject,
    publishDate: Date,
    language: Language,
    pages: number
  ) {
    this.title = title;
    this.subject = subject;
    this.publishDate = publishDate;
    this.language = language;
    this.pages = pages;
  }
}
