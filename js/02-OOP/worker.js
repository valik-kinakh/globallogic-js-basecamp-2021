import User from "./user.js";

export default class Worker extends User {
    constructor(_name, _surname, _bDate, rate, days, retired = false) {
        super(_name, _surname, _bDate);
        /^\d+$/.test(rate) ? this.rate = rate : this.rate = 0;
        /^\d+$/.test(days) ? this._days = days : this._days = 0;
        this._retired = retired;
    }

    static getCounter() {
        let _count = 0;
        return function () {
            ++_count;
        }
    }

    get getRate() {
        return this.rate;
    }

    get days() {
        return this._days;
    }

    set setRate(value) {
        this.rate = value;
    }

    set days(value) {
        this._days = value;
    }

    get retired() {
        return this._retired;
    }

    set retired(value) {
        this._retired = value;
    }

    isRetired() {
        return this.retired;
    }

    getSalary() {
        if (this.isRetired()) {
            return 0;
        } else {
            return this.rate * this._days;
        }
    }
}