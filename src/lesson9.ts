// Створити аналог класу Shelf
// який не є класом-узагальненням і працює з двома типами:
// Book та Magazine.

// Модифікувати класс Shelf
// Додати метод printTitles, який виводить у консоль заголовки об’єктів (title)
// Додати метод find, який буде перегруженим, прийматиме id чи author і повертатиме об’єкт по id чи author

{
    type Base = {
        title: string;
    }
    type Book = Base & {
        id: number;
    }
    type Magazine = Base & {
        author: string;
    }

    const books = [
        { id: 12, title: '8-Bit Graphics with Cobol'},
        { id: 10, title: 'The C Programming Language'},
        { id: 13, title: 'Cool autoexec.bat Scripts!'},
    ];
    const magazines = [
        { title: 'Five Points', author: 'GSU' },
        { title: 'Programming Language Monthly', author: 'Code Mags' },
        { title: 'Literary Fiction Quarterly', author: 'College Press' },
    ];

    class Shelf {
        books: Book[] = [];
        magazines: Magazine[] = [];

        printTitles<T extends Book | Magazine>(arr: T[]): string[] {
            return arr.map(item => item.title);
        }

        find<T extends number | string>(search: T): Book | Magazine | null {
            if (typeof search === 'number') {
                const filteredBoks = this.books.find(book => book.id === search)
                return filteredBoks ? filteredBoks : null;
            } else if (typeof search === 'string') {
                const filteredMagazines = this.magazines.find(magazine => magazine.author === search);
                return filteredMagazines ? filteredMagazines : null;
            }
            return null;
        }
        
    }

    const shelf = new Shelf();
    shelf.books = books;
    shelf.magazines = magazines;


    console.log('Books :::', shelf.printTitles(books))
    console.log('Magazines :::', shelf.printTitles(magazines))
    
    console.log('Books :::', shelf.find(10));
    console.log('Books :::', shelf.find(1)); // Null
    console.log('Books :::', shelf.find('GSU'));
    console.log('Books :::', shelf.find('GSU_GSU_GSU'));; // Null
    
}