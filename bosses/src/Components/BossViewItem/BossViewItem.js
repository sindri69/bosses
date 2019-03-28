import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllBosses } from '../../actions/bossActions.js';


const BossViewItem = (props) => {
	const {id, name, description, img} = props;
	return (
        <li className="card border-dark mb-3">
    		<div className="card-header">{props.bossItem.img}</div>
    		<div className="card-body">
    			<h4 className="card-title"><Link to={ "/" + props.bossItem.id }>{props.bossItem.name}</Link></h4>
    			<p className="card-text">{props.bossItem.description}</p>
    		</div>
    	</li>
    );
};

BossViewItem.propTypes = {
	bossItem: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired
	}).isRequired
};

BossViewItem.defaultProps = {
	bossItem: {
		id: 1,
		name: 'No boss',
		description: 'I am mafakka',
		img: 'lol.is'
	}
}

export default BossViewItem;