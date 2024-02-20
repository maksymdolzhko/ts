// 1
// Реалізуйте функцію getAllBooks(), яка повертає колекцію книжок.
// Об’явіть цю колекцію всередині функції.

enum BooksCategory {
  JS = 'JavaScript',
  CSS = 'CSS',
  HTML = 'HTML',
  TS = 'TypeScript',
  ANGULAR = 'Angular',
}

type Book = {
  id: number,
  title: string,
  author: string,
  available: boolean,
}

type BookWithCategory = Book & {
  category: BooksCategory
}

const books =  [
  { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
  { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
  { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
  { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
];
function getAllBooks(param: Book[]):Book[]{
  return param;
}


// 2
// Реалізуйте функцію logFirstAvailable(),
// яка приймає масив книг як параметр і виводить у консоль:
// ·    кількість книг у масиві
// ·    назву першої доступної книги
// Запустіть функцію logFirstAvailable()

function logFirstAvailable(param: Book[]):number{
  return param.length;
}
logFirstAvailable(books);


// 3
// Об’явіть enum Category для зберігання наступних категорій книг: 
// [JavaScript, CSS, HTML, TypeScript, Angular];
// Додайте категорію до об'єктів у функції getAllBooks().
const categoriesKey = Object.keys(BooksCategory);

function addCategory(list: Book[]): BookWithCategory[] {
  return list.map((item: Book, index: number) => {
    const category = BooksCategory[categoriesKey[index] as keyof typeof BooksCategory];
    return ({
      category,
      ...item
    })
  })
}

// 4
// Реалізуйте функцію getBookTitlesByCategory(), 
// яка на вхід повинна отримувати категорію та повертати масив найменувань книг,
// що належать зазначеній категорії.
const booksWithCategory: BookWithCategory[] = addCategory(books);

function getBookTitlesByCategory(category: BooksCategory, list: BookWithCategory[]): BookWithCategory[]{
  return list.filter((item: BookWithCategory) => item.category === category);
}


// 5 незрозуміла постановка задачі 
// Реалізуйте функцію logBookTitles(), яка повинна приймати масив рядків та виводити його в консоль.
// Викличте функції getBookTitlesByCategory() та logBookTitles().
function logBookTitles(param: string[]): void{
  console.log(param);
}

getBookTitlesByCategory(BooksCategory.TS, booksWithCategory);

logBookTitles(categoriesKey);


// 6
// Реалізуйте функцію getBookAuthorByIndex()
// яка повинна приймати index книжки у масиві та повертати пару:
// назву книжки + автор.
// Використовуйте tuple для типу, що повертається.
// Викличте цю функцію.
// Внесіть зміни до типу, що повертається функцією getBookAuthorByIndex()
// – додайте мітки: 
// title, author для типу tuple.

function getBookAuthorByIndex(ind: number): [string, string]{
  const book = books[ind];
  const {title, author} = book;
  return [title, author];
}

getBookAuthorByIndex(1);


// 7
// Реалізуйте функцію calcTotalPages()
// яка повинна підраховувати кількість сторінок книг у трьох бібліотеках міста
// використовуючи такі дані:
// Для підрахунків використовуйте тип bigint.

const libs = [
  { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
  { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
  { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
];

type Lib = {
  lib: string;
  books: number;
  avgPagesPerBook: number;
}

function calcTotalPages(){
  return libs.reduce((accumulator: bigint, currentItem: Lib) => {
    const {books, avgPagesPerBook} = currentItem;
    const libPages: bigint = BigInt(books) * BigInt(avgPagesPerBook);
    return BigInt(accumulator) + libPages;
  }, BigInt(0));
}
