import React, {usestate} from 'react';


function RecipeCard() {
	return (
		<div className="recipe-card-wrap" id="${recipe.id}">


		<div className="delete-btn-wrap">
			<button className="delete-btn" id="${recipe.id}" onclick="deleteRecipe(event)">Delete</button>
		</div>
	
		<div className="rec-card-img-wrap">
			<img src="${recipe.img}"/>
		</div>
		<div className="rec-card-title-wrap">
			<h1 className="rec-card-title">${recipe.title}</h1>
		</div>
		<div className="quarter-wrap">
			<div className="quart-column">
				<h2 className="rec-card-sub-title">Course:</h2>
				<div className="quart-item">meal</div>
			</div>
			<div className="quart-column">
				<h2 className="rec-card-sub-title">Serving Size:</h2>
				<div className="quart-item">${recipe.servings}</div>
			</div>
			<div className="quart-column">
				<h2 className="rec-card-sub-title">Prep Time:</h2>
				<div className="quart-item">
					<div className="time-wrap">Hrs: 1</div>
					<div className="time-wrap">Mins: 1</div>
				</div>
			</div>
			<div className="quart-column">
				<h2 className="rec-card-sub-title">Cook Time:</h2>
				<div className="quart-item">
					<div className="time-wrap">Hrs: 1</div>
					<div className="time-wrap">Mins: 1</div>
				</div>
			</div>
		</div>
		
	
		<div className="thirds-wrap">
			<div className="one-third">
				<div className="head-btn-wrap">
					<h2 className="rec-card-sub-title">Ingredients:</h2>
					<div className="shop-btn-wrap">
						<button className="shop-list-btn" onclick="getIngredients()">Add to Shopping List</button>
					</div>
				</div>

				<ul>
					${recipe.ingredients.map(ingredient => '<li>' + ingredient + '</li>').join('')}
				</ul>
			</div>
			<div className="two-thirds">
				<h2 className="rec-card-sub-title">Directions:</h2>
				<ul>
					${recipe.directions.map(direction => '<li>' + direction + '</li>').join('')}
				</ul>
			</div>
		</div>
		
		<div className="notes-wrap">
			<h2 className="rec-card-sub-title">Notes:</h2>
			<p>${recipe.notes}</p>
		</div>
	</div>
	);
};

export default RecipCard;