import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { NavContext } from '../context/CartContext';

const Navigation = props => {
	const cart = useContext(NavContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
