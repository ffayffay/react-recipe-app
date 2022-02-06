import React, {usestate} from 'react';


function RecipeCard(props) {

	const { recipeToDisplay } = props;

	return (
		<div className="recipe-card-wrap">


		<div className="delete-btn-wrap">
			<button className="delete-btn">Delete</button>
		</div>
	
		<div className="rec-card-img-wrap">
			<img src={recipeToDisplay.imgUrl}/>
		</div>
		<div className="rec-card-title-wrap">
			<h1 className="rec-card-title">{recipeToDisplay.title}</h1>
		</div>
		<div className="quarter-wrap">
			<div className="quart-column">
				<h2 className="rec-card-sub-title">Course:</h2>
				<div className="quart-item">{recipeToDisplay.course}</div>
			</div>
			<div className="quart-column">
				<h2 className="rec-card-sub-title">Serving Size:</h2>
				<div className="quart-item">{recipeToDisplay.servSize}</div>
			</div>
			<div className="quart-column">
				<h2 className="rec-card-sub-title">Prep Time:</h2>
				<div className="quart-item">
					<div className="time-wrap">Hrs: {recipeToDisplay.prepHrs}</div>
					<div className="time-wrap">Mins: {recipeToDisplay.prepMins}</div>
				</div>
			</div>
			<div className="quart-column">
				<h2 className="rec-card-sub-title">Cook Time:</h2>
				<div className="quart-item">
					<div className="time-wrap">Hrs: {recipeToDisplay.cookHrs}</div>
					<div className="time-wrap">Mins: {recipeToDisplay.cookMins}</div>
				</div>
			</div>
		</div>
		
	
		<div className="thirds-wrap">
			<div className="one-third">
				<div className="head-btn-wrap">
					<h2 className="rec-card-sub-title">Ingredients:</h2>
					<div className="shop-btn-wrap">
						<button className="shop-list-btn" >Add to Shopping List</button>
					</div>
				</div>

				<ul>
					{recipeToDisplay.ingredients.map(ingredient => <li>{ingredient}</li>)}
				</ul>
			</div>
			<div className="two-thirds">
				<h2 className="rec-card-sub-title">Directions:</h2>
				<ol>
					{recipeToDisplay.directions.map(direction => <li>{direction}</li>)}
				</ol>
			</div>
		</div>
		
		<div className="notes-wrap">
			<h2 className="rec-card-sub-title">Notes:</h2>
			<p>{recipeToDisplay.notes}</p>
		</div>
	</div>
	);
};

export default RecipeCard;