// Ви маєте JS код, який необхідно розширити анотацією примітивів, 
// масивів, об'єктів (за необхідності), 
// подумати над використанням перерахувань, 
// а також реалізувати описані у вигляді коментарів властивості та методи. 
// Крім цього є завдання з *, яке не є обов'язковим, але може вас зацікавити.

type Contacts = {
  tel: number;
  email: string;
}
type Lector = {
  name: string;
  surname: string;
  position: string;
  company: string;
  courses: string;
  contacts: Contacts;
  experience: number;
}
type Status = | 'none' | 'beginner' | 'juniour' | 'middle' | 'seniour';


class School {
  private _areas: Area[] = [];
  private _lecturers: Lector[] = [];
  
  get areas() {
  	return this._areas;
  }

  get lecturers(): Lector[] {
  	return this._lecturers;
  }

  /**
   * 
   implement methods:
    - add area
    - remove area
    - add lecturer
    - remove lecturer'
  */


  addArea(param: Area){
    this._areas.push(param);
  }
  removeArea(param: Area){
    const filtered = this._areas.filter(item=>item !== param);
    this._areas = filtered;
  }

  addLecturer(param: Lector){
    this._lecturers.push(param);
  }
  removeLecturer(param: Lector){
    const filtered = this._lecturers.filter(item => item.name !== param.name);
    this._lecturers = filtered;
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _name;
  private _levels: number[] = [];

  constructor(name: string) {
  	this._name = name;
  }

  get name(): string{
    return this._name;
  }
  get levels(): number[] {
    return this._levels;
  }

  addLevel(param: number){
    this._levels.push(param);
  }
  removeLevel(param: number){
    const filtered = this._levels.filter(item=>item !== param);
    this._levels = filtered;
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _name: string = '';
  private _groups: Group[] = [];
  private _description: string  = '';

  constructor(name: string, description: string) {
  	this._name = name;
	  this._description = description;
  }

  get name(): string{
    return this._name;
  }

  get groups(): Group[]{
    return this._groups;
  }

  get description(): string{
    return this._description;
  }

  addGroup(param: Group){
    this._groups.push(param);
  }
  removeGroup(param: Group){
    const filtered = this._groups.filter(item => item !== param);
    this._groups = filtered;
  }

}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area: any;
  private _status: Status = 'none';
  private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*

  levelName: string;
  directionName: string;

  constructor(directionName: string, levelName: string) {
	  this.levelName = levelName;
    this.directionName = directionName;
  }

  set status(param: Status){
    this._status = param;
  }

  get area(){
    return this._area;
  };
  get status(){
    return this._status;
  };
  get students(){
    return this._students;
  };

  get direction(){
    return this.directionName;
  };
  get level(){
    return this.levelName;
  };

  addStudent(param: Student){
    this._students.push(param);
  }

  removeStudent(param: Student){
    this._students = this._students.filter(item => item !== param );
  }

  showPerformance() {
	  return this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: number[] = []; // workName: mark;
  private _visits: boolean[] = []; // lesson: present;

  constructor(firstName: string, lastName: string, birthYear: number) {
  	this._firstName = firstName;
	  this._lastName = lastName;
	  this._birthYear = birthYear;
  }

  get fullName(): string {
  	return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
	  [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
	  return new Date().getFullYear() - this._birthYear;
  }

  set grade(param: number){
    this._grades.push(param);
  }
  
  get visits(){
    return this._visits;
  }
  set visit(param: boolean){
    this._visits.push(param);
  }
  
  getPerformanceRating(): number {
    const {
      _grades: gradeValues,
      _visits: visitValues
    } = this;

	  if (!gradeValues.length) return 0;

	  const averageGrade = gradeValues.reduce((sum: number, grade: number) => (sum + grade), 0) / gradeValues.length;
	  const attendancePercentage = (visitValues.filter((present:boolean) => present).length / visitValues.length) * 100;

  	return (averageGrade + attendancePercentage) / 2;
  }
}

