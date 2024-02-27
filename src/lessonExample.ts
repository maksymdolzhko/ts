{
  console.log('=========== Singlton ===========');

  class Database {
    url;
    private static instance: Database;

    constructor(){
      if(Database.instance){
        return Database.instance;
      }
      this.url = Math.random();
      Database.instance = this;
    }
  }

  const bd1 = new Database();
  const bd2 = new Database();

  console.log(bd1.url);
  console.log(bd2.url);


}
{
  console.log('=========== Repository ===========');

  interface Repository {
    getUser: () => User[];
  }
  class User {
    username: string = '';
    age: number = 0;
  }
  class UserMongoDbRepo implements Repository {
    getUser(): User[] {
      console.log('mongo db Users')
      return [{username: 'MongoDb user', age: 20 }];
    }
  }
  class UserPostgresDbRepo implements Repository {
    getUser(): User[] {
      console.log('PostgresDb Users')
      return [{username: 'PostgresDb', age: 21 }];
    }
  }
  class UserService {
    userRepo: Repository;
    constructor(userRepo: Repository){
      this.userRepo = userRepo;
    }
    filterUserByAge(age: number){
      const users = this.userRepo.getUser();
    }

  }

  const userService = new UserService(new UserPostgresDbRepo());
  userService.filterUserByAge(20);


}
{
  console.log('=========== Car ===========');
  // Композиція і агрегація

  class Engine {
    drive(){
      console.log('an engine is working');
    }
  };
  class Wheel {

    drive(){
      console.log('a wheel is rotating');
    }
  };


  type Smell = 'apple' | 'pineapple' | 'melon' | 'lemon';
  class Fresh {
    private _smell: Smell = 'lemon';

    get smell(){
      return this._smell;
    }
    set smell(value: Smell){
      this._smell = value;
    }
  };

  class Car {
    _engine: Engine;
    _wheels: Wheel[] = [];
    _fresh: Fresh;

    constructor(fresh: Fresh){
      // композиція;
      this._engine = new Engine();

      for( let i = 0; i<4; i++){
        this._wheels.push(new Wheel())
      }

      this._fresh = fresh;
    }

    drive(){
      this._engine.drive();
      for(let i = 0; i < this._wheels.length; i++){
        this._wheels[i].drive();
      }
      console.log(`Driving with fresh: ${this._fresh.smell}`);
    }
  };

  const fresh = new Fresh();
  fresh.smell = 'apple';

  const passat = new Car(fresh);
  passat.drive();
}

{
  console.log('=========== Person ===========');

  class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName: string, lastName: string, age: number){
      this._firstName = firstName;
      this._lastName = lastName; 
      this._age = age;
    }

    get firstName(){
      return this._firstName;
    }
    set firstName(value){
      this._firstName = value;
    }

    get lastName(){
      return this._lastName;
    }
    set lastName(value){
      this._lastName = value;
    }

    get age(){
      return this._age;
    }
    set age(value){
      if(value < 0){
        this._age = 0;
      } else {
        this._age = value;
      }
    }

    get fullName(){
      return `${this._firstName} ${this._lastName}`;
    }

    greeting(): void{
      console.log(`Hi i'm a Person, my name is: ${this.fullName}`);
    }
  }

  class Employee extends Person {
    private _inn;
    private _tel;
    private _email;

    constructor(firstName: string, lastName: string, age: number, inn: number, tel: number, email: string){
        super(firstName, lastName, age);
        this._inn = inn;
        this._tel = tel;
        this._email = email;
    }

    override greeting(): void{
      console.log(`Hi i'm a Employee, my name is: ${this.fullName}`);
    }

  }

  type Level = 'junior' | 'middle' | 'seniour';
  
  class Developer extends Employee {
    private _level;
    
    constructor(firstName: string, lastName: string, age: number, inn: number, tel: number, email: string, level: Level){
      super(firstName, lastName, age, inn, tel, email);
      this._level = level;
    }
    override greeting(): void{
      console.log(`Hi i'm a Developer, my name is: ${this.fullName}`);
    }
  }

  const person1 = new Person('Max', 'De', 40);
  // person1.greeting();
  // console.log('persone1 :::', person1.fullName, ':', person1);

  const employee1 = new Employee('Max', 'De', 40, 1234567890, 66_123_45_67, 'email');
  // employee1.greeting();
  // console.log('eployee1', eployee1.fullName, ':', eployee1);

  const developer1 = new Developer('Max', 'De', 40, 1234567890, 66_098_76_54, 'email', 'seniour');
  // developer1.greeting();
  // console.log('developer1', developer1.fullName, ':', developer1);

  const list: (Person | Employee | Developer)[] = [
    person1,
    employee1,
    developer1
  ];

  for(let i=0; i<list.length; i++){
    const listItem = list[i];
    listItem.greeting();
  } 
}

{
  console.log('=========== Database ===========');

  /**
   * 
   * Инкапсуляция / Сокрытие
  */

  class Database {
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables: unknown[];

    constructor(url: string, port: string, username: string, password: string){
      this._url = url;
      this._port = port;
      this._username = username;
      this._password = password;
      this._tables = [];
    }

    get url(){
      return this._url;
    }
    get port(){
      return this._port;
    }
    get username(){
      return this._username;
    }
    get password(){
      return this._password;
    }
    get table(){
      return this._tables;
    }

    createNewTable(table: unknown){
      this._tables.push(table)
    }
  
  }

  const db = new Database('1','2','3','4');
  db.createNewTable({role: '1'});

}

{
  console.log('=========== Rectangle ===========');

  class Rectangle{
    w;
    h;
    constructor(w: number,h: number){
      this.w = w;
      this.h = h;
    }

    calc(){
      return this.w*this.h;
    }
  }

  const rect = new Rectangle(2,10);

  console.log('rect.calc() :::', rect.calc()) 
}