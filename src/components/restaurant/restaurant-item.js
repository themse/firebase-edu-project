import React, { Fragment } from 'react';

export const RestaurantItem = ({
	name,
	imageUrl,
	user,
	handleSelect,
	handleDeselect,
	votes = {},
}) => {
	const hasUserSelected = Object.keys(votes).includes(user.uid);

	return (
		<div className="card mb-3">
			{imageUrl && <img src={imageUrl} className="card-img-top" alt={name} />}
			<div className="card-body">
				<h5 className="card-title">
					{name}{' '}
					<span className="badge badge-secondary">{Object.keys(votes).length}</span>
				</h5>
				<p className="card-text">
					{Object.keys(votes).length > 0 ? (
						<Fragment>
							<b>with: </b> {Object.values(votes).join(', ')}
						</Fragment>
					) : (
						<b>Alone</b>
					)}
				</p>
				{hasUserSelected ? (
					<button className="btn btn-warning" onClick={handleDeselect}>
						Nevermind
					</button>
				) : (
					<button className="btn btn-primary" onClick={handleSelect}>
						Go somewhere
					</button>
				)}
			</div>
		</div>
	);
};
