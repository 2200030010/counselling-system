import React, { useState } from 'react';

const ProductionList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - ${item.price} (Quantity: {item.quantity})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductionList;
