// тип `DeepReadonly` який буде робити доступними тільки для читання властивості обʼєктів 
// - і вкладені властивості обʼєктів також
{
    type DeepReadonly<T> = {
        +readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
    }

    interface Obj {
        a: string,
        b: {
            c: number,
            d: boolean,
        }
    }

    const obj: DeepReadonly<Obj> = {
        a: 'string',
        b: {
            c: 123,
            d: true,
        }
    };

//   obj.a = ''; 
//    obj.b = {
//         c: 1,
//         d: true
//    };
//    obj.b.c = 444;

}


// тип `DeepRequireReadonly` який буде робити доступними тільки для читання властивості обʼєктів 
// - і вкладені властивості обʼєктів також
// - і робити їх обовʼязковими
{

    interface Obj {
        a?: string,
        b: number,
        c?: {
            d?: boolean,
            e: symbol
        }
    }

    type DeepRequireReadonly<T> = {
        +readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K]
    }

    /**
     * ??? якщо !с.d то чомусь всеодно необовязкове;
     * */ 
    const obj: DeepRequireReadonly<Obj> = {
        a: '',
        b: 123,
        c: {
            // d: true
            e: Symbol('e')
        }
    }
}


// тип `UpperCaseKeys`, який буде приводити всі ключі до верхнього регістру
{
    type ToUpperCase<K extends string> = `${Uppercase<K>}`
    type KeysToUpper<T> = {
        [K in keyof T & string as ToUpperCase<K> ]: T[K]
    }    
    interface ObjA {
        a: string;
        b: string;
        c: string;
    }
    const a: KeysToUpper<ObjA> = {
        A: '',
        B: '',
        C: '',
    }
}


// тип `ObjectToPropertyDescriptor`, який перетворює звичайний обʼєкт на обʼєкт де кожне `value` є дескриптором.
{
    interface ObjA {
        a: string,
        b: number,
    }

    interface Descriptor<T> {
        value: T;
        writable: boolean;
        enumerable: boolean;
        configurable: boolean;
    }
    
    type ObjProps = keyof ObjA;
    type ObjectToPropertyDescriptor = Record<ObjProps, Descriptor<ObjA[ObjProps]>>;
    
    const ADescriptors:ObjectToPropertyDescriptor  = {
        a: {
            value: 1,
            writable: true,
            enumerable: true,
            configurable: true
        },
        b: {
            value: '1',
            writable: false,
            enumerable: false,
            configurable: false
        },
    };
    
}