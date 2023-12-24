import React, { useEffect, useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

function App() {
  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch("https://655b5afcab37729791a8f7f5.mockapi.io/sneakers")
      .then((data) => data.json())
      .then((json) => setItems(json))
  }, [])

	const onAddToCart = ()=>{
		alert('1,2,3')
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
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex ">
            <img src="../img/search.svg" alt="search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, i) => (
            <Card
              key={i}
              title={item.name}
              price={item.price}
              image={item.image}
              onFavorite={() => console.log("Добавили в закладки")}
							onPlus={(obj)=>console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
