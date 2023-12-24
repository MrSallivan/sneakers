import React, { useState } from "react"
import styles from "./Card.module.scss"

const Card = ({ title, price, image, onFavorite, onPlus }) => {
  const [isAdd, setIsAdd] = useState(false)

  const onClickPlus = () => {
		onPlus({title, price, image})
		setIsAdd(!isAdd)
	}

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="../img/heart-unliked.svg" alt="favorite" />
      </div>
      <img width={133} height={112} src={image} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdd ? "../img/btn-checked.svg" : "../img/btn-plus.svg"}
          alt="plus button"
        />
      </div>
    </div>
  )
}

export default Card
