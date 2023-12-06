function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="../img/arrow-btn.svg" alt="arrow-pics" />
            </button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-centr">
          <img src="/img/logo.png" alt="logo sneakers" width={40} height={40} />
          <div>
            <h3 className="text-uppercase">Raect Sneakers</h3>
            <p className="opacity-1">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" alt="cart logo" width={18} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="user logo" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex ">
            <img src="../img/search.svg" alt="search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="d-flex mr-30">
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
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-liked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/5.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/6.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/7.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/8.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/9.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/10.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/11.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="../img/heart-unliked.svg" alt="favorite" />
            <img
              width={133}
              height={112}
              src="../img/sneakers/12.jpg"
              alt="Sneakers"
            />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  src="../img/plus.svg"
                  alt="plus button"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
