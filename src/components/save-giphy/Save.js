import React from 'react';
import { NavLink } from 'react-router-dom';
import './Save.css'

class Save extends React.Component{

	// state= {
	// 	urlGiph : ''
	// };
	//
	// componentDidMount = () => {
	// 	const json = localStorage.getItem("url");
	//
	// 	this.setState({
	// 		urlGiph: json
	// 	})
	// };
	//
	// componentDidUpdate = () => {
	// 	const url = this.props.location.state.giphUrl;
	// 	localStorage.setItem("url", url);
	// };

	render(){
		console.log(this.props);
		const {dataGf} = this.props;
		return(
			<div>
				<button className="active-giphy__button">
					<NavLink to="/">Go Home</NavLink>
				</button>
				<div>
					{/*{dataGf.map()}*/}
				</div>
			</div>
		)
	}
}

export default Save;
