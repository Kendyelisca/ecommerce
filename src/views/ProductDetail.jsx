import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductId } from '../services/getProductById';
import { getAllProducts } from '../services/getAllProducts';
import ProductCard from '../components/common/ProductCard';
import { getCategories } from '../services/getCategories';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [counter, setCounter] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const productData = await getProductId(id);
      const categories = await getCategories();
      const categoryId = categories.find(
        (category) => category.name === productData.category,
      ).id;

      const relatedProductsData = await getAllProducts({
        category: categoryId,
      });

      const relatedProductsWithoutTargetProduct = relatedProductsData.filter(
        (product) => product.id !== productData.id,
      );

      setProduct(productData);
      setRelatedProducts(relatedProductsWithoutTargetProduct);
    };

    loadData();
  }, []);

  const lessOne = () => {
    const newCounter = counter - 1;
    if (newCounter >= 1) setCounter(newCounter);
  };
  return (
    <div className="p-8">
      {!product ? (
        <p>loading product ... </p>
      ) : (
        <section>
          <div>
            {product.productImgs.map((urlImg) => (
              <img src={urlImg} key={urlImg} alt="" className="w-40" />
            ))}
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <section>
              <h1 className="text-2xl text-black font-semibold">{product.title}</h1>
              <p className="mt-5">{product.description}</p>
            </section>

            <section className="flex flex-row gap-32 mt-5">
              <div>
                <h2 className="font-semibold text-gray-400">Price</h2>
                <p className="text-2xl text-black font-semibold">{product.price}</p>
              </div>
              <div>
                <h2>Quantity</h2>
                <div className="flex flex-row ">
                  <button
                    className="w-5 h-10 flex flex-row justify-center border border-gray-600"
                    onClick={lessOne}
                  >
                    -
                  </button>
                  <span className="w-10 text-center">{counter}</span>
                  <button onClick={() => setCounter(counter + 1)}>+</button>
                </div>
              </div>
            </section>

            <button>
              Add to cart <i className="bx bx-cart-add"></i>
            </button>
          </div>
        </section>
      )}

      <aside>
        <h2 className="text-xl font-semibold text-orange-400">Discover similar items</h2>
        <ul>
          {relatedProducts.map((product) => (
            <li key={product}>
              <ProductCard />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ProductDetail;
