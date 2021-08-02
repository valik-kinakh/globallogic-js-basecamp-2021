import React, {useState} from "react";
import './Square.css'

export default function Square({value, onClick, key}) {
    return (
        <button className="square" onClick={onClick} key={key}>
            {value}
        </button>
    );
}