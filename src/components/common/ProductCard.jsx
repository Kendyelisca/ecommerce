import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddProductBtn = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      onClick={() => navigate(`/products/${product.id}`)}
      className="cursor-pointer"
    >
      <div className="max-w-[250px]">
        <img src={product.productImgs[0]} alt={product.title} />
      </div>
      <div>
        <h2>{product.title}</h2>
        <div>
          <h3>Price</h3>
          <p>$ {product.price}</p>
        </div>
        <button
          onClick={handleAddProductBtn}
          className="text-3xl flex flex-row justify-center items-center bg-orange-400 rounded-xl p-2 cursor-pointer"
        >
          <i className="bx bx-cart-add"></i>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
