export default class University {
    constructor(name, city, zipCode) {
        if (/^[A-Za-z -]+$/.test(name) && name.length < 129) {
            this._name = name;
        } else {
            this._name = "";
        }

        this._city = city;
        if (typeof zipCode !== "number" || zipCode > 99999) {
            throw TypeError("Enter only numbers");
        } else {
            this._zipCode = zipCode;
        }
    }

    getAddress() {
        return ` "${this._name}"-${this._city.toUpperCase()}, ${this._zipCode}`;
    }

    get name() {
        return this._name;
    }

    get city() {
        return this._city;
    }

    get zipCode() {
        return this._zipCode;
    }

    set name(value) {
        this._name = value;
    }

    set city(value) {
        this._city = value;
    }

    set zipCode(value) {
        this._zipCode = value
    }
}