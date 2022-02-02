import React from 'react';
import Form from './Form.jsx';
import ShoppingList from './ShoppingList.jsx';

function MakeshiftRouter({currentRoute, isDarkMode}) {
	switch (currentRoute) {
		case 0: 
			return <div className="gallery-wrap">something</div>;
		case 1: 
			return <Form isDarkMode={isDarkMode} />;
		case 2:
			return <ShoppingList />;
		default:
			return <></>;
	}

}

export default MakeshiftRouter;