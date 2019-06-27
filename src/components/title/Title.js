import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = ({title}) => (
	<h1 className="link link--mallki">{title}
	<span data-letters={title}></span>
		<span data-letters={title}></span></h1>
);

Title.propTypes = {
	title: PropTypes.string
};

Title.defaultProps = {
	title: 'Simple title'
};

export default Title;
