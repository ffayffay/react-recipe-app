import React, {useState} from 'react';

function Form({isDarkMode, count, addRecipe}) {

	const [title, setTitle] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	const [course, setCourse] = useState("");
	const [servSize, setServSize] = useState("");
	
	const [direction, setDirection] = useState("");
	const [directions, setDirections] = useState([]);
	const [ingredient, setIngredient] = useState("");
	const [ingredients, setIngredients] = useState([]);

	const addIngredient = (e) => {
		e.preventDefault();

		if (!ingredient) return;

		setIngredients([...ingredients, ingredient]);
		setIngredient("");
	};

	const addDirection = (e) => {
		e.preventDefault();

		if (!direction) return;

		setDirections([...directions, direction]);
		setDirection("");
	};

	const handleChange = (e, setFn) => {
		setFn(e.target.value);
	};

	const resetForm = () => {
		setCourse("Breakfast");
		setImgUrl("");
		setTitle("");
		setServSize("");
		setDirections([]);
		setIngredients([]);
	};


	const handleSubmit = (e) => {
		e.preventDefault();

		const recipe = {
			title,
			imgUrl,
			course,
			servSize,
			ingredients,
			directions,
		};

		console.log("Adding recipe:", recipe);
		addRecipe(recipe);

		resetForm();
	};


	return (

		<div className="form-wrap">

			
			<form onSubmit={handleSubmit}>
				<div id="form-btn-cont">
					<button className="btn btn-secondary btn-lg" type="submit">
						Save
					</button>
				</div>

				{/*<label for="recipe-url">Recipe URL</label><br/>
				<input type="text" name="recipe-url" id="recipe-url"/><br/>*/}
				
				<div className="mb-3">
					<label className="form-label">Title:</label>
 					<input type="text" id="title" name="title" className="form-control" value={title} onChange={(e) => handleChange(e, setTitle)}/>
				</div>

				<div className="mb-3">
					<label className="form-label">Img URL:</label>
 					<input type="text" id="img-url" name="img-url" className="form-control" value={imgUrl} onChange={(e) => handleChange(e, setImgUrl)}/>
				</div>

				<div className="mb-3">
					<label className="form-label">Course:</label>
	 				<select className="form-select" name="course" id="course" value={course} onChange={(e) => handleChange(e, setCourse)}>
	 					<option value="Breakfast">Breakfast</option>
	 					<option value="Lunch">Lunch</option>
	 					<option value="Dinner">Dinner</option>
	 					<option value="Snack">Snack</option>
	 					<option value="Dessert">Dessert</option>
	 				</select>
				</div>

				<div className="mb-3">
					<label className="form-label">Tags:</label><br/>
 					<input className="form-control" type="text" id="tags" name="tags" placeholder="Vegetarian, Gluten Free..etc"/>
				</div>

				<div className="mb-3">
					<label className="form-label">Source:</label><br/>
 					<input className="form-control" type="text" id="source" name="source" placeholder="Optional"/>
				</div>

				<div className="mb-3">
					<label className="form-label">Serving Size:</label><br/>
 					<input className="form-control" type="text" id="servings" name="servings" value={servSize} onChange={(e) => handleChange(e, setServSize)}/>
				</div>

				<div className="mb-3 times-cont">
					<div className="mb-3 time-cont">
						<label id="prep-time-label" className="form-label">Preperation Time:</label>
						<div className="time-item">
	 						<div>
		 						<label className="form-label">Hrs.</label>
		 						<input className="form-control" type="text" name="hrs" id="prep-hrs"/>
		 					</div>
		 					<div>
		 						<label className="form-label">Mins.</label>
		 						<input className="form-control" type="text" name="mins" id="prep-mins"/>
		 					</div>
	 					</div>
					</div>

					<div className="mb-3 time-cont">
						<label id="cook-time-label" className="form-label">Cooking Time:</label>
						<div className="time-item">
	 						<div>
		 						<label className="form-label">Hrs.</label>
		 						<input className="form-control" type="text" name="hrs" id="prep-hrs"/>
		 					</div>
		 					<div>
		 						<label className="form-label">Mins.</label>
		 						<input className="form-control" type="text" name="mins" id="prep-mins"/>
		 					</div>
	 					</div>
					</div>
				</div>

				<div className="mb-3">
					<label className="form-label">Notes:</label><br/>
					<textarea className="form-control" name="notes"></textarea>
				</div>


				<div className="mb-3">
					<label className="form-label">Ingredients:</label>
					<div className="mb-3 input-group">
						<input className="form-control" name="ingredients" value={ingredient} onChange={(e) => handleChange(e, setIngredient)} />
	 					<button className={`plus-btn btn ${isDarkMode ? "btn-outline-light" : "btn-outline-secondary"}`} onClick={addIngredient}>
	 						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
							  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
							</svg>
	 					</button>
	 					
					</div>
					<ul>
						{ingredients.map((i, idx) => <li key={idx+i}>{i}</li>)}
					</ul>
				</div>

				<div className="mb-3">
					<label className="form-label">Directions:</label>
					<div className="mb-3 input-group">
						<input className="form-control" name="directions" value={direction} onChange={(e) => handleChange(e, setDirection)} />
	 					<button className={`plus-btn btn ${isDarkMode ? "btn-outline-light" : "btn-outline-secondary"}`} onClick={addDirection}>
	 						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
							  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
							</svg>
	 					</button>
					</div>
					<ol>
						{directions.map((d, idx)=> <li key={idx+d}>{d}</li>)}
					</ol>
				</div>
			</form>
		</div>
	);
}

export default Form;