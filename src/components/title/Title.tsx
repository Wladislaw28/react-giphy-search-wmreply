import React from 'react';

import './Title.css';

export interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) => (
	<h1 className="link link--mallki">{title}
			<span data-letters={title}></span>
			<span data-letters={title}></span></h1>
);

export default Title;
