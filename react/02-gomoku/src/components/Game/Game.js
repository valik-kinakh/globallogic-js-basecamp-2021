import './Game.css';
import React, {useState} from "react";
import Board from "../Board/Board";

export default function Game() {

    const [history, setHistory] = useState([{squares: Array(361).fill(null), latestMove: null}]);

    const [stepNumber, setStepNumber] = useState(0);
    const [isStraight, setIsStraight] = useState(true);

    const moves = history.slice(0, stepNumber + 1);
    const current = moves[stepNumber];


    const winner = calculateWinner(current.squares);
    let status;

    if (winner.winner) {
        status = `Winner: ${winner.winner}`
    } else if (winner.draw) {
        status = `It's a Draw`;
    } else {
        status = `Next player: ${stepNumber % 2 === 0 ? '🟢' : '🔴'}`
    }

    const steps = moves.map((step, move) => {

        const row = 1 + Math.floor(step.latestMove / 19);
        const col = 1 + step.latestMove % 19;

        const desc = move ?
            "Move " + move + `(Row: ${row}  Col: ${col})` :
            'Restart';
        return (
            <li key={move}>
                <button className={move === stepNumber ? 'move-list-item-selected buttons' : 'buttons'}
                        onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    if (!isStraight) {
        steps.reverse();
    }

    const handleClick = (i) => {
        const cells = current.squares.slice();
        const lastMove = history.slice(0, stepNumber + 1);
        if (calculateWinner(cells, lastMove.pop()).winner || cells[i]) {
            return;
        }

        cells[i] = (stepNumber % 2 === 0) ? '🟢' : '🔴';
        setHistory(moves.concat([{squares: cells, latestMove: i}]));
        setStepNumber(moves.length);
    }

    function jumpTo(step) {
        setStepNumber(step);
    }

    function calculateWinner(squares) {

        let currentMove = moves[moves.length - 1].latestMove;

        let counterHorizontal = 1;
        let iterations = 0;

        let counter = 1;

        for (let i = currentMove - 1; i >= 0; i--) {
            iterations++;
            if (iterations > 4) break;
            if (squares[i] === squares[currentMove] && typeof squares[currentMove] !== 'undefined' && typeof squares[i] !== 'undefined') {
                counterHorizontal++;

                if (counterHorizontal >= 5) {
                    squares[currentMove] = '🟡';
                    return {
                        winner: squares[currentMove],
                        draw: false
                    };
                }
            }
        }

        iterations = 0;

        for (let i = currentMove + 1; i < squares.length; i++) {
            iterations++;
            if (iterations > 4) break;
            if (squares[i] === squares[currentMove] && typeof squares[currentMove] !== 'undefined' && typeof squares[i] !== 'undefined') {
                counterHorizontal++;
                if (counterHorizontal >= 5) {
                    squares[currentMove] = '🟡';
                    return {
                        winner: squares[currentMove],
                        draw: false
                    };
                }
            }
        }

        counter = 1;
        iterations = 0;

        for (let i = currentMove - 19; i >= 0; i -= 19) {
            iterations++;
            if (iterations > 4) break;
            if (squares[i] === squares[currentMove] && typeof squares[currentMove] !== 'undefined' && typeof squares[i] !== 'undefined') {

                counter = counter + 1;
                if (counter >= 5) {
                    squares[currentMove] = '🟡';
                    return {
                        winner: squares[currentMove],
                        draw: false
                    };
                }
            }
        }

        counter = 1;
        iterations = 0;

        for (let i = currentMove + 19; i < squares.length; i += 19) {
            iterations++;
            if (iterations > 4) break;
            if (squares[i] === squares[currentMove] && typeof squares[currentMove] !== 'undefined' && typeof squares[i] !== 'undefined') {

                counter = counter + 1;
                if (counter >= 5) {
                    squares[currentMove] = '🟡';
                    return {
                        winner: squares[currentMove],
                        draw: false
                    };
                }
            }
        }

        counter = 1;
        iterations = 0;

        for (let i = currentMove - 18; i >= 0; i -= 18) {
            iterations++;
            if (iterations > 4) break;
            if (squares[i] === squares[currentMove] && typeof squares[currentMove] !== 'undefined' && typeof squares[i] !== 'undefined') {

                counter = counter + 1;
                if (counter >= 5) {
                    squares[currentMove] = '🟡';
                    return {
                        winner: squares[currentMove],
                        draw: false
                    };
                }
            }
        }

        counter = 1;
        iterations = 0;

        for (let i = currentMove + 18; i < squares.length; i += 18) {
            iterations++;
            if (iterations > 4) break;
            if (squares[i] === squares[currentMove] && typeof squares[currentMove] !== 'undefined' && typeof squares[i] !== 'undefined') {

                counter = counter + 1;
                if (counter >= 5) {
                    squares[currentMove] = '🟡';
                    return {
                        winner: squares[currentMove],
                        draw: false
                    };
                }
            }
        }

        counter = 1;
        iterations = 0;

        for (let i = currentMove - 20; i >= 0; i -= 20) {
            iterations++;
            if (iterations > 4) break;
            if (squares[i] === squares[currentMove] && typeof squares[currentMove] !== 'undefined' && typeof squares[i] !== 'undefined') {

                counter = counter + 1;
                if (counter >= 5) {
                    squares[currentMove] = '🟡';
                    return {
                        winner: squares[currentMove],
                        draw: false
                    };
                }
            }
        }

        counter = 1;
        iterations = 0;

        for (let i = currentMove + 20; i < squares.length; i += 20) {
            iterations++;
            if (iterations > 4) break;
            if (squares[i] === squares[currentMove] && typeof squares[currentMove] !== 'undefined' && typeof squares[i] !== 'undefined') {

                counter = counter + 1;
                if (counter >= 5) {
                    squares[currentMove] = '🟡';
                    return {
                        winner: squares[currentMove],
                        draw: false
                    };
                }
            }
        }

        let print = true;

        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null) {
                print = false;
                break;
            }
        }

        return {
            winner: null,
            draw: print,
        };

    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onHandleClick={(i) => handleClick(i)}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <button onClick={() => setIsStraight(!isStraight)} className={'buttons'}>
                    {isStraight ? 'Straight' : 'Reverse'}
                </button>
                <ol>{steps}</ol>
            </div>
        </div>
    );
}


