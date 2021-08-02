import React from "react";
import Square from "../Square/Square";

export default function Board({squares, onHandleClick}) {

    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => onHandleClick(i)} key={i}/>;
    }
    const rows = 19;
    const cells = 19;

    return (
        <div>
            {[...Array(rows).keys()].map(row => (
                <div className="board-row" key={row}>
                    {[...Array(cells).keys()].map(cell => renderSquare(row * cells + cell))}
                </div>
            ))}
        </div>
    );
}