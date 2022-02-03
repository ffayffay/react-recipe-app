import React, {usestate} from 'react';


function Tile(props) {
	const { r } = props;
	return (
		<div className="tile">
			<div className="card-img-wrap img-wrap">
				<img src={r.imgUrl}/>
			</div>

			<div className="title tile-title-wrap">
				<p>{r.title}</p>
			</div>
		</div>
	);
}

export default Tile;