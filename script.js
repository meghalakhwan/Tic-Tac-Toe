const state = {
    scores:{
        player1 : 0,
        player2 : 0
    },

    squares: Array(9).fill(null),
    xIsNext: true
};

function calculateWinner(squares)
{
    const winning_lines =[
        [0,1,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i=0; i<winning_lines.length; i++)
    {
        const [a, b, c] = winning_lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
        {
            showWinner(squares[a]);
            setTimeout(() => resetBoard(null), 1000)
            return squares[a];
        }
    }
    if(!squares.includes(null))
    {
        showWinner(null);
        setTimeout(() => resetBoard(null), 1000)
        return
    }
    return null;
}

function resetBoard(winner)
{
    if(winner)
    {
        if(winner === 'X')
        {
            state.scores.player1++
        }
        else
        {
            state.scores.player2++
        }
    }

    state.squares = Array(9).fill(null)
    document.getElementById
}
