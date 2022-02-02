import React, {usestate} from 'react';


function Tile() {
	return (
		<div className="tile">
			<div className="card-img-wrap img-wrap">
				<img src="${recipe.img}"/>
			</div>

			<div className="title tile-title-wrap">
				<p id="${recipe.id}"</p>
			</div>
		</div>
	);
}