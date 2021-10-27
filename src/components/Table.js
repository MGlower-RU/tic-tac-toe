export default function Table({gameGrid, setGameGrid, currentPlayer, setCurrentPlayer, winner}) {
  function handleClick(e) {
    const elIndex = e.target.closest('.el');
    if(winner === '') {
      setGameGrid(gameGrid.map((el, i) => i === Number(elIndex.dataset.indexNumber) && el === '' ? currentPlayer : el));
      elIndex.textContent === '' && setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
    }
  }

  return (
    <div className="grid__wrapper">
      {
        gameGrid.map((el, i) => {
          return (
            <div
              key={i}
              className="el"
              data-index-number={i}
              onClick={handleClick}
            >
              {String(el).toUpperCase()}
            </div>
          )
        })
      }
    </div>
  )
}