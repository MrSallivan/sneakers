import React from "react"

const Card = ({ title, price, image }) => {
  const onClickButton = () => {
    alert(title)
  }
  return (
    <div className="card">
      <div className="favorite">
        <img src="../img/heart-unliked.svg" alt="favorite" />
      </div>
      <img width={133} height={112} src={image} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img src="../img/plus.svg" alt="plus button" width={11} height={11} />
        </button>
      </div>
    </div>
  )
}

export default Card
