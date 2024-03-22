// 1. Об'явіть аліас типу BookRequiredFields, використовуючи інтерфейс Book та утиліту Required.

// 2. Об'явіть змінну bookRequiredFields типу BookRequiredFields та присвойте їй відповідний об'єкт.

// 3. Об'явіть аліас типу UpdatedBook, використовуючи інтерфейс Book та утиліту Partial.

// 4. Об'явіть змінну updatedBook типу UpdatedBook і присвойте їй відповідний об'єкт.
{
    type BookRequiredFields<T> = Required<T>;
    type UpdatedBook<T> = Partial<T>

    interface Book {
        title: string;
        pages?: number;
        pictures?: boolean;
    }

    const book: BookRequiredFields<Book> = {
        pages: 100,
        title: 'Dune',
        pictures: true,
    };
    const updatedBook: UpdatedBook<Book> = {
        title: 'Dune 2',
    }
}

// 5. Об'явіть аліас типу AuthorWoEmail, використовуючи інтерфейс Author та утиліту Omit.
{
    interface Author {
        id: number;
        name: string;
    }

    type AuthorWoEmail = Omit<Author,  | 'name'>;
}


// 6. Об'явіть аліас СreateCustomerFunctionType для функціонального типу функції createCustomer(). Функція приймає рядок і число і повертає їх конкатенацію.

// 7. Об'явіть змінну params, використовуючи аліас типу СreateCustomerFunctionType і утиліту Parameters, викличте функцію createCustomer(), передавши змінну params.
{
    type СreateCustomerFunctionType = (str: string, num: number) => string;

    const createCustomer: СreateCustomerFunctionType = (str, num) => {
        return str + num;
    };
    const params: Parameters<typeof createCustomer> = ['',1];
    createCustomer(...params);

}

// 8. Об'явіть аліас fn для функціонального типу функції, яка приймає три параметри з типами string, number, boolean і повертає тип symbol.

// 9. Об'явіть аліаси типів Param1<T>, Param2<T>, Param3<T>, які повертають тип першого, другого та третього параметрів функції відповідно.

// 10.Об'явіть аліаси P1, P2, P3 та отримайте типи першого, другого та третього параметрів типу fn.
{
    type fn =  (str: string, num: number, boll:boolean) => symbol;

    type Param1<T> = T extends (p1: infer P1, p2: never, p3: never) => symbol ? P1 : never;
    type Param2<T> = T extends (p1: never, p2: infer P2, p3: never) => symbol ? P2 : never;
    type Param3<T> = T extends (p: never, p2: never, p3: infer P3) => symbol ? P3 : never;

    type P1 = Param1<fn>;
    type P2 = Param2<fn>;
    type P3 = Param3<fn>;

}


// 11.Створіть утиліти RequiredProps<T> та OptionalProps<T>, які повертають union тип required та optional властивостей об'єкта.
// Використовуйте mapped type для перебору ключів T та conditional type для трансформації значень ключів типу T.
// Додайте загальне обмеження для T розширивши його від типу object у RequiredProps та OptionalProps.

// 12. Об'явіть аліас типу BookRequiredProps та BookOptionalProps, використовуючи інтерфейс Book та утиліти RequiredProps та OptionalProps.
// Спробуйте замість Book передати примітивний тип.
{
    type RequiredProps<T extends object> = {
        [K in keyof T]-?: T[K];
    };
    
    type OptionalProps<T extends object> = {
        [K in keyof T]+?: T[K];
    };

    interface Book {
        title: string;
        author: string;
        pages: number;
    }
    
    type BookRequiredProps = RequiredProps<Book>;
    type BookOptionalProps = OptionalProps<Book>;

    // type BookRequiredProps = RequiredProps<number>;
    // type BookOptionalProps = OptionalProps<string>;
    
}



// 13.Створіть утиліту RemoveProps <T extends object, TProps extends keyof T>, яка видаляє властивості TProps з переданого типу T.
{
    
}


// 14. Об'явіть аліас типу BookRequiredPropsType та BookOptionalPropsType, використовуючи інтерфейс Book, аліаси типу BookRequiredProps та BookOptioalProps та утиліту RemoveProps Спробуйте замість Book передати Author.
{
}


// 15. Створіть функцію update(), яка приймає один параметр типу boolean. Якщо значення аргументу true, функція повинна повертати значення типу string. Якщо значення аргументу false, функція повинна повертати значення типу number.
{
}