import React from 'react';
import { NavLink } from 'react-router-dom';
import './Save.css'

import ThemeContext from '../giphy-list/GiphyList';

class Save extends React.Component{

	state= {
		urlGiph : []
	};

	static contextType = ThemeContext;

	// componentDidMount = () => {
	// 	const json = localStorage.getItem("url");
	//
	// 	this.setState(prevState  => ({
	// 		urlGiph: [...prevState.urlGiph, json]
	// 	}))
	// };
	//
	// componentDidUpdate = () => {
	// 	if (this.props.location.state.giphDataGf !== '') {
	// 		const url = this.props.location.state.giphDataGf;
	// 		localStorage.setItem("url", url);
	// 	}
	// };

	render(){
		// const url = this.props.location.state.giphDataGf;
		// console.log(this.props);
		console.log(this.context);
		const {urlGiph} = this.state;
		return(
			<div>
				<button className="active-giphy__button">
					<NavLink to="/">Go Home</NavLink>
				</button>
				{/*<div>*/}
					{/*{this.props.location.state.giphDataGf === '' ?*/}
						{/*console.log(null) :*/}
						{/*urlGiph.map((giph) => (*/}
								{/*<div key={new Date()}>*/}
									{/*<img src={giph} alt=""/>*/}
									{/*/!*{console.log(giph)}*!/*/}
								{/*</div>*/}
							{/*))*/}
					{/*}*/}
				{/*</div>*/}
			</div>
		)
	}
}

export default Save;
