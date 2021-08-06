import User from "./user.js";
import University from "./university.js";

export default class Student extends User {
    constructor(_name, _surname, _bDate, year = 1900, university) {
        super(_name, _surname, _bDate);
        if (year < 1900 || year > new Date().getFullYear()) {
            throw Error("Year is wrong");
        } else {
            this._year = year;
        }
        if (university instanceof University) {
            this._university = university.name;
        }
    }

    static counter = 0;

    static getCounter() {

        return ++this.counter;
    }

    get year() {
        return this._year;
    }

    get university() {
        return this._university;
    }

    set university(value) {
        this._university = value;
    }

    set year(value) {
        this._year = value;
    }

    getCourse() {
        return new Date().getFullYear() - this._year;
    }

    isFinished() {
        let bool;
        new Date().getFullYear - this._year ? bool = true : bool = false;
        return bool;
    }

    getFullInfo() {
        return `${this._name} ${this._surname}, ${this._bDate}, ${this._year}, ${this._university}`;
    }

}