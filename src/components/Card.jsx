import React from "react"

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="../img/heart-unliked.svg" alt="favorite" />
      </div>
      <img
        width={133}
        height={112}
        src="../img/sneakers/1.jpg"
        alt="Sneakers"
      />
      <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена: </span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img src="../img/plus.svg" alt="plus button" width={11} height={11} />
        </button>
      </div>
    </div>
  )
}

export default Card
