import React from 'react'

const Header = () => {
	return (
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
  )
}
 
export default Header;