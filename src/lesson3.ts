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
class School {
  
  // what is 'areas' entity ?
  // unfortunately, I didn't get a mission.
  // So, implemented only for entity 'lecturers';
  // I believe it should be almost the same idea for _areas;

  _areas = [];
  _lecturers: Lector[] = [];
  
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

  addArea(){} // ???
  removeArea(){} // ???

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
  _levels: number[] = [];
  _name;

  constructor(name: string) {
	this._name = name;
  }

  get levels(): number[] {
    return this._levels;
  }

  get name(): string{
    return this._name;
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

  _name: string;
  _groups: any;
  _description: string;
  constructor(name: string, description: string) {
  	this._name = name;
	  this._description = description;
  }
}


/* TODO:

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area: any;
  _status: any;
  _students = []; // Modify the array so that it has a valid toSorted method*

  constructor(directionName: string, levelName: string) {
	this.directionName = directionName;
	this.levelName = levelName;
  }

  showPerformance() {
	  const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
	  return sortedStudents;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName;
  _lastName;
  _birthYear;
  _grades = []; // workName: mark
  _visits = []; // lesson: present

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

  getPerformanceRating(): number {
  	const gradeValues = Object.values(this._grades);

	  if (!gradeValues.length) return 0;

	  const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
	  const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

  	return (averageGrade + attendancePercentage) / 2;
  }
}
**/
