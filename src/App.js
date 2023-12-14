import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

const arr = [
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999 , image: "../img/sneakers/1.jpg"},
  { name: "Мужские Кроссовки Nike Air Max 270", price: 11500 , image: "../img/sneakers/2.jpg"},
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, image: "../img/sneakers/3.jpg" },
  { name: "Кроссовки Puma X Aka Boku Future Rider", price: 8999 , image: "../img/sneakers/4.jpg"},
  { name: "Мужские Кроссовки Under Armour Curry 8", price: 15199 , image: "../img/sneakers/5.jpg"},
  { name: "Мужские Кроссовки Nike Kyrie 7", price: 11299, image: "../img/sneakers/6.jpg"},
  { name: "Мужские Кроссовки Jordan Air Jordan 11", price: 10799 , image: "../img/sneakers/7.jpg"},
  { name: "Мужские Кроссовки Nike LeBron XVIII", price: 16499 , image: "../img/sneakers/8.jpg"},
  { name: "Мужские Кроссовки Nike Lebron XVIII Low", price: 13999 , image: "../img/sneakers/9.jpg"},
  { name: "Мужские Кроссовки Nike Kyrie Flytrap IV", price: 11299 , image: "../img/sneakers/12.jpg"}
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex ">
            <img src="../img/search.svg" alt="search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="d-flex mr-30">
          {arr.map((item, i) => (
            <Card key={i} title ={item.name} price = {item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
