import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/slice/user.slice';
import { Form, useLoaderData } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const { products, categories, category, title } = useLoaderData();

  const [categoryValue, setCategoryValue] = useState(category ?? null);
  const [nameValue, setNameValue] = useState(title ?? '');

  const handleNameValue = (e) => {
    setNameValue(e.target.value);
    setCategoryValue(null);
  };
  //const handleChangeCategory = (e) => {
  //setCategoryValue(e.target.value);
  //};

  useEffect(() => {
    setCategoryValue(category);
  }, [category]);

  useEffect(() => {
    setNameValue(title);
  }, [title]);

  return (
    <div>
      <h1>Home</h1>
      {isLogged && <button onClick={() => dispatch(reset())}>LogOut</button>}
      <section>
        <Form>
          <div>
            <input
              type="search"
              name="title"
              value={nameValue}
              onChange={handleNameValue}
              placeholder="type product name"
            />
          </div>
          <fieldset>
            <legend>Category</legend>
            {categories.map((category) => (
              <div key={category.id}>
                <label htmlFor={category.id + category.name}>{category.name}</label>
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={categoryValue?.id === category.id}
                  id={category.id + category.name}
                  style={{ display: 'none' }}
                  onChange={() => {
                    setCategoryValue(category);
                    setNameValue('');
                  }}
                  className={categoryValue?.id === category.id ? 'text-orange-500' : ''}
                />
              </div>
            ))}
          </fieldset>
          <button type="submit" className="bg-red-400 p-2">
            Filter
          </button>
        </Form>
      </section>
      <section>
        <ul>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        {products.length && <p>No products found for this name'{nameValue}'</p>}
      </section>
    </div>
  );
};

export default Home;
