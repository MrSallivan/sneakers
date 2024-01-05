import React, { useEffect, useState } from "react"
import axios from "axios"
import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

function App() {
  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // fetch("https://655b5afcab37729791a8f7f5.mockapi.io/sneakers")
    //   .then((data) => data.json())
    //   .then((json) => setItems(json))
    axios
      .get("https://655b5afcab37729791a8f7f5.mockapi.io/sneakers")
      .then((res) => {
        setItems(res.data.splice(1))
      })
  }, [])

  cartOpened
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible")

  const onAddToCart = (obj) => {
		// axios
    //   .post("https://655b5afcab37729791a8f7f5.mockapi.io/sneakers")
    //   .then((res) => {
    //     setItems(res.data.splice(1))
    //   })
    setCartItems((prev) => [...prev, obj])
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => {
            setCartOpened(false)
          }}
          items={cartItems}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpened(true)
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex ">
            <img src="../img/search.svg" alt="search" />
            {searchValue && (
              <img
                className="removeBtn cu-p clear"
                src="/img/btn-remove.svg"
                alt="clear bth"
                onClick={() => setSearchValue("")}
              />
            )}
            <input
              placeholder="Поиск..."
              value={searchValue}
              type="text"
              onChange={onChangeSearchInput}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.name}
                price={item.price}
                image={item.image}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={(item) => onAddToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
