import React from 'react';

const Cart = ({ isVisible }) => {
  return (
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]">
      <section className="absolute right-0 h-full bg-white w-2/3 p-3">
        <h2>Shopping Cart</h2>
        <ul>
          <li>
            <article>
              <div className="flex flex-row gap-10">
                <div>
                  <img src="" alt="" />
                  <span>Image</span>
                </div>
                <div>
                  <h3>Product Name</h3>
                  <div className="flex flex-row text-xl">
                    <button className="w-7 h-7 flex flex-row justify-center border border-gray-600">
                      -
                    </button>
                    <span className="w-10 h-7 text-center border border-gray-600">1</span>
                    <button className="w-7 h-7 flex flex-row justify-center border border-gray-600">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-right mt-2">
                <span>Total:</span> $ 1000.00
              </p>
            </article>
          </li>
        </ul>
        <section>
          <p>
            <span>Total:</span>
            <span>$850</span>
          </p>
          <button className="w-full bg-orange-500">Buy products</button>
        </section>
      </section>
    </div>
  );
};

export default Cart;
