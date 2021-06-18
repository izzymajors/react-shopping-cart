import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//contexts
import CartContext from './context/CartContext';
import ProductContext from './context/ProductContext';




function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(products);
	console.log(cart);

	

	const addItem = item => {
		setCart(
			cart.map( toAdd => {
				return toAdd.id !== item;
			})
		);
		
		
		
		
		// add the given item to the cart
	};


	const removeItem = item => {
		setCart(
			cart.filter( toRemove => {
				return toRemove.id !== item
			})
		)
	};

	return (
		
		<div className="App">
			
			<ProductContext.Provider value={{products, addItem, removeItem}}>
				<CartContext.Provider value={cart}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products  />
			</Route>

			<Route path="/cart">
				<ShoppingCart  />
			</Route>
			</CartContext.Provider>
			
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
