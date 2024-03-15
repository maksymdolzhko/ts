


{
  function zip<T, U>(first: T[], second: U[]): Array<[T,U]> {
    const minLength = Math.min(first.length, second.length);
    const result: Array<[T,U]> = [];
    for (let i = 0; i < minLength; i++) {
      result.push([first[i], second[i]])
    }
    return result;
  }

  const q1: Array<[number, string]> = zip([1, 2, 3, 4, 5, 6], ["1", "2", "3"]);
  const q2: Array<[boolean, boolean]> = zip([true], [false, false]);
  // console.log(q1, q2);
}

// Cтворіть дженерик інтерфейс для функції зворотнього виклику CallbackFn<T>, яка приймає два параметри:
// - err: Error | null,
// - data: T | null
// і нічого не повертає.
// Використайте цей інтерфейс для функції, яка приймає своїм аргументом функцію зворотнього виклику.
{
    interface CallbackFn<T> {
        (err: Error | null, data: T | null): void;
    }

    function callbackFn<T>(err: Error | null, data: T | null): void {
        switch (true) {
            case err instanceof Error:
                console.warn('ERROR :::', err);
                break;
            case typeof data === 'number':
            case typeof data === 'string':
                console.log('DATA :::', data);
                break;
            default:
                break;
        }
    }

    async function doSomething(fn: CallbackFn<number | string>): Promise<void> {
        await new Promise<boolean | void>(resolve => {
            const randomBool: boolean = Math.round(Math.random() * 10) <= 5;
            setTimeout(() => {
                !randomBool ? fn(new Error('Error!!!'), null) : resolve(fn(null, 200));
            }, 500);
        });
        fn(null, 'Success!');
    }

    // doSomething(callbackFn);
}

// 1) Створіть дженерик (загальну) функцію purge(),
//    яка приймає один параметр – дженерик масив inventory та повертає дженерик масив того ж типу,
//    що містить елементи початкового масиву без двох перших елементів.
// 2) Об’явіть змінну inventory, що містить масив книг
// 3) Викличте функцію purge() та передайте їй ці дані. Виведіть результат у консоль.
// 4) Викличте функцію purge() з числовим масивом і знову виведіть результат у консоль.
// 5) Об’явіть змінну purgeNumbers та присвойте їй функцію purge зі значенням параметру типу number.
// 6) Викличте функцію purgeNumbers() та передайте їй числовий масив та масив рядків.

enum Category {
    Software = 'Software',
}

type TInventor = (typeof inventory)[number];
const inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

type TMagazine = (typeof magazines)[number];
const magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

{
    function purge<T>(param: T[]): T[] {
        const filtered: T[] = param.slice(2);
        return filtered;
    }

    const _NUMBERS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const _STRINGS: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const result1 = purge(inventory);
    // console.log('result 1 :::', result1);

    const result2 = purge(_NUMBERS);
    // console.log('result 2 :::', result2);

    const purgeNumbers = purge<number>(_NUMBERS);
    // const purgeNumbers = purge<number>(_STRINGS); // Error: Type 'string' is not assignable to type 'number';
    // console.log('purgeNumbers result :::', purgeNumbers);
}



// Створіть дженерик клас Shelf:
// - додайте приватну властивість items, яка є масивом елементів типу Т.
// - додайте метод add(), який приймає один параметр item типу T і додає його в масив. Нічого не повертає.
// - додайте метод getFirst(), який нічого не приймає, і повертає перший елемент із items.
// Створіть екземпляр класу Shelf - bookShelf
// збережіть усі книжки з inventory в bookShelf.
// Отримайте першу книжку і виведіть її назву в консоль.
// Об'явіть змінну magazines, яка містить дані.
// Створіть екземпляр класу Shelf - magazineShelf і збережіть усі журнали в magazineShelf.
// Отримайте перший журнал і виведіть його в консоль.
{
    // Створіть інтерфейс Magazine, який містить дві рядкові властивості, title, publisher.
    interface IMagazine {
        title: string;
        publisher: string;
    }

    class Shell<T> {
        items!: T[];

        add(item: T): void {
            this.items.push(item);
        }
        getFirst(): T {
            return this.items[0];
        }
    }

    const bookShelf = new Shell<TInventor>();
    bookShelf.items = inventory;
    const firtsBookShelf = bookShelf.getFirst();
    // console.log('First Shelf`s Title :::', firtsBookShelf.title);

    const magazineShelf = new Shell<TMagazine>();
    magazineShelf.items = magazines;
    const firtsMagazinesShelf = magazineShelf.getFirst();
    // console.log('First Magazine`s  Title :::', firtsMagazinesShelf.title);
}
