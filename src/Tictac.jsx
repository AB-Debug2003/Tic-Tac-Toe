import { useState } from "react"
import Button from '@mui/material/Button'
import { RestartAlt } from "@mui/icons-material";

function Tictac() {

    const [turn,setTurn] = useState("X");
    const [squares,setSquares] = useState(Array(9).fill(null));
    const [win, setWin] = useState(false);

    function handleClick(index) {
        if (squares[index] === null) {
            const updatedSquares = [...squares];
            updatedSquares[index] = turn;
            setSquares(updatedSquares);

            if (checkWinner(updatedSquares) != null) {
                setWin(true);
                const btn = document.getElementsByClassName("tiles");
                for (let i = 0; i < btn.length; i++) {
                    btn[i].disabled = true;
                }
            }
            else{
                setTurn(t => t === "X" ? "O" : "X");
            }
        }
        
    }
    
    function checkWinner(squares) {

        const lines = [[0,1,2], [0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
        for (let i = 0; i < lines.length; i++) {
            
            const [a,b,c] = lines[i];
            
            if ((squares[a] === "X" || squares[a] === "O") && squares[a] === squares[b] && squares[a] === squares[c]) {
                return true;
            }
        }
    }
    
    function reset() {
        
        setSquares(Array(9).fill(null));
        setTurn("X");
        setWin(false);
        const btn = document.getElementsByClassName("tiles");
        for (let i = 0; i < btn.length; i++) {
            btn[i].disabled = false;
        }

    }

    return(
        <div className="container text-center">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                <h4>Player {win ? `${turn} Wins!`: `${turn} Turn`}</h4>
                <div className="col">
                    <button className="tiles" onClick={() => handleClick(0)}>{squares[0]}</button>
                    <button className="tiles" onClick={() => handleClick(1)}>{squares[1]}</button>
                    <button className="tiles" onClick={() => handleClick(2)}>{squares[2]}</button>
                </div>
                <div className="col">
                    <button className="tiles" onClick={() => handleClick(3)}>{squares[3]}</button>
                    <button className="tiles" onClick={() => handleClick(4)}>{squares[4]}</button>
                    <button className="tiles" onClick={() => handleClick(5)}>{squares[5]}</button>
                </div>
                <div className="col">
                    <button className="tiles" onClick={() => handleClick(6)}>{squares[6]}</button>
                    <button className="tiles" onClick={() => handleClick(7)}>{squares[7]}</button>
                    <button className="tiles" onClick={() => handleClick(8)}>{squares[8]}</button>
                </div>
                <Button variant="contained" startIcon={<RestartAlt/>} size="large" color="error" className="reset mt-3" onClick={reset}>
                  Reset
                </Button>
            </div>
        </div>
    )
}

export default Tictac