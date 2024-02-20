/**
 * 
  1. Обявіть інтерфейс Book, який включає такі поля:
  - id - число;
  - title - рядок;
  - author - рядок;
  - available - логічний;
  - category – категорія;
*/

enum Category  {
    FANTASY = 'fantasy',
    DOCUMENTARY = 'documentary',
    COMEDY = 'comedy',
    CSS = 'css',
}

interface IDamageLogger {
    (reason: string): void;
}

interface IBook {
    id: number; // число
    title: string; // - рядок
    author: string; // - рядок
    available: boolean; // - логічний
    category: Category;  // категорія
    pages?: number;
    markDamaged?: IDamageLogger,
}


/**
 * 
  2. Створіть функцію printBook();
  - приймає один параметр - книгу;
  - виводити у консоль: 
    book.title + by + book.author.
  - Використайте інтерфейс Book для типу параметра.
*/

function printBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`)
}
const book: IBook = {
    id: 100500,
    title: 'Duna',
    author: 'Frank Gerbert',
    available: false,
    category: Category.FANTASY,
}
printBook(book);


/**
 * 
  3.
  - Обявіть змінну myBook і присвойте їй наступний об'єкт;
  - Викличте функцію printBook() та передайте їй myBook;
  4. 
  - Додайте до інтерфейсу Book властивість pages: number;
  - Ви отримаєте помилку у функції getAllBooks();
  - Щоб помилка не виникала, зробіть властивість необов'язковою;
  5.
  - Вкажіть явно для змінної myBook тип Book.
  - Ви отримаєте помилку.
  - Видаліть властивості year, copies.
  - Додайте властивість pages: 200.
  6.
  - Додайте в інтерфейс Book необов'язкову властивість markDamaged(метод);
  - Метод повинен приймати:
    - reason рядковий параметр
    - нічого не повертати.
  - Додайте цей метод до myBook.
  - Метод повинен виводити рядок:
    - `Damaged: ${reason}`.
  - Викличте цей метод та передайте рядок 'missing back cover'.
*/

const myBook: IBook = {
	id: 5,
	title: 'Colors, Backgrounds, and Gradients',
	author: 'Eric A. Meyer',
	available: true,
	category: Category.CSS,
	// year: 2015,
	// copies: 3
    pages: 100500,
    markDamaged: reason => console.log(`Damaged: ${reason}`)
}

printBook(myBook);

if(myBook.hasOwnProperty('markDamaged')) {
    myBook.markDamaged('missing back cover')
}


/**
 * 
    7.
    - Об’явіть інтерфейс DamageLogger
    - який описуватиме тип функції
    - яка повинна приймати один рядковий параметр
    - нічого не повертати.

    8. Внесіть зміни до інтерфейсу Book: 
    - використайте інтерфейс DamageLogger для поля markDamaged.
*/

let fn: IDamageLogger;

fn = function(param) {};
fn('');


/**
 * 
    9. Об’явіть інтерфейс Person;
    - Person містить дві рядкові властивості:
      – name;
      - email; 
**/

interface IPerson {
    name: string;
    email: string;
}


/**
 * 
    10. Об’явіть інтерфейс Author на основі інтерфейсу Person;
    - який розширює вказаний інтерфейс;
    - numBooksPublished - числовa властивість;
**/

interface IAutor extends IPerson {
    numBooksPublished: number;
}


/**
 * 
    11. Об’явіть інтерфейс Librarian на основі інтерфейсу Person;
    - який розширює цей інтерфейс двома властивостями:
      -- department рядкова властивість;
      -- assistCustomer функція повинна приймати два рядкові параметри:
      -- custName;
      -- bookTitle;
      -- нічого не повертати;
**/

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}