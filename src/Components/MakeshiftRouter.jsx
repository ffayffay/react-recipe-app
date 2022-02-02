import React from 'react';
import Form from './Form.jsx';
import ShoppingList from './ShoppingList.jsx';

function MakeshiftRouter({currentRoute, isDarkMode, recipes, addRecipe}) {
	switch (currentRoute) {
		case 0: 
			return <div className="gallery-wrap">
				{recipes.map(r => <><h1>{r.title}</h1><img src={r.imgUrl} alt={r.title} /></>)}
			</div>;
		case 1: 
			return <Form isDarkMode={isDarkMode} addRecipe={addRecipe} />;
		case 2:
			return <ShoppingList />;
		default:
			return <></>;
	}

}

export default MakeshiftRouter;