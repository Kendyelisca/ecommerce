import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cart from './Cart';

const Layout = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  return (
    <>
      <header className="p-5 flex flex-row justify-between bg-white">
        <h1 className="text-3xl text-orange-400 font-semibold">Academlo Ecommerce</h1>
        <nav>
          <ul className="flex flex-row gap-5">
            <li>
              <Link to="/purchases" className="text-4xl">
                pouchase tag
              </Link>
            </li>
            <li>
              <button
                className="text-4xl"
                onClick={() => setIsCartVisible(!isCartVisible)}
              >
                Chart
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
        <Cart isVisible={isCartVisible} />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
