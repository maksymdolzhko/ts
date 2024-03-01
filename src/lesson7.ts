// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.
{
  interface IPost {
    [key: string]: string | number;
  }

  let post190: IPost = {};
  post190 = {
    190: 190,
    title: 'Визначте інтерфейс',
    description: 'Визначте інтерфейс, який використовує сигнатуру індексу з типами обєднання.'
  };

  const post191: IPost = {};
  post191[191] = -191;
  post191['title'] = 'Визначте інтерфейс';
  post191['description'] = 'Визначте інтерфейс, який використовує сигнатуру індексу з типами обєднання.';

  let posts: IPost[] = [];
  posts = [post190, post191];
  console.log('Posts :::', posts);
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
{
  interface IFunctions {
    [key: string]: (value: any) => any | void,
  }

  const obj: IFunctions = {
    onCancel(params: any): any {},
    onChange: event => event.target.value,
  };

  obj['onMouseMove'] = function(event: any){
    return event;
  }

  obj['onClick'] = (event: string | undefined ) => {
    if(typeof event !== 'string' ){
      throw new Error('not string');
    }
    console.log(event);
  }

  console.log('functions object:', obj)
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву.
// Ключі повинні бути числами, а значення - певного типу.
{
  interface IIterable {
    [key: number]: bigint | number;
  }
  const idsObj: IIterable = {
    0: 66_123_45_67,
    1: 80661234567n,
    2: 80661234567,
//    '3:' : 123123123n // Error: ''3:'' does not exist in type 'IIterable'.ts(2353)
  };
  console.log('idsObj :::', idsObj)

}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
{
  interface IProps {
    [key: number]: number;
    id: number;    
    ind: number | string;
    name: string;
  }
  const props: IProps = {
    0: 0,
    1: 1,
    id: 3424234234234,
    ind: 80_67_098_76_54,
    name: 'name',
  }
  console.log('props ::', props);
}
// Створіть два інтерфейси, один з індексною сигнатурою,
// а інший розширює перший, додаючи специфічні властивості.
{

  interface IBaseProps {
    [key: number]: number;
  }
  interface IProps extends IBaseProps {
    id: number;    
    ind: number | string;
    name: string;
  }
  const props: IProps = {
    0: 0,
    1: 1,
    id: 3424234234234,
    ind: 80_67_098_76_54,
    name: 'name',
  }
  console.log('props ::', props);
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
// чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

{
  interface IObj {
    [x: string]: string | number | boolean;
  }
  const o: IObj = {
    name: 'qwerty',
    1: '_',
    bool: true,
    987654321: 987654321,
    id: 'qwerty_0987654321'
  }

  function checker(obj: IObj ){
    let buff: any[] = [];

    for (let key in obj) {
      let type = typeof obj[key];
      if(!buff.includes(type)){
        buff.push(type);
      }
    }  

    return buff;
  }

  const result = checker(o);

  console.log('result :::', result.length ? 'Різні типи': 'Однаковий тип');
}
