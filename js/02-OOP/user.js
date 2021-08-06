export default class User {
    constructor(name, surname, bDate) {
        if (/^[A-Za-z -]+$/.test(name) && name.length < 33) {
            this._name = name;
        } else {
            this._name = "";
        }

        if (/^[A-Za-z -]+$/.test(surname) && surname.length < 65) {
            this._surname = surname;
        } else {
            this._surname = "";
        }
        if (bDate < 1900 || bDate > new Date().getFullYear()) {
            throw Error("Your birthday date is wrong");
        } else {
            this._bDate = bDate;
        }
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get bDate() {
        return this._bDate;
    }

    set name(value) {
        this._name = value;
    }

    set surname(value) {
        this._surname = value;
    }

    set bDate(value) {
        this._bDate = value;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }

    getFullInfo() {
        return `${this._name} ${this._surname}, ${this._bDate}`;
    }
}