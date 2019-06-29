import React from 'react';
import { NavLink } from 'react-router-dom';
import './GiphyItem.css';

const API_KEY = "QnJhWIXwS59aPWO6hXi0rUIDNqEZ4mwj";

class GiphyItem extends React.Component{

	state = {
		activeGiphy: [],
		activeGiphyUrl: ''
	};

	componentDidMount = async () => {
		const title = this.props.location.state.giphTitle;
		const isSticker = this.props.location.state.giphOrSticker;
		const gip = await fetch(`http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${API_KEY}`);

		const resp = await gip.json();
		this.setState({
			activeGiphy: resp.data[0],
			activeGiphyUrl: resp.data[0].images.original.url
		});
		console.log(this.state.activeGiphy)
	};

	render(){
		console.log(this.props);
		 const {activeGiphy, activeGiphyUrl} = this.state;
		return(
			<div className="container-fluid">
				{
					activeGiphy.length !== 0 &&
					<div className="active-giphy">
						<img className="active-giphy__img" src={activeGiphyUrl} alt={activeGiphy.title}/>
						<h3 className="active-giphy__title">{activeGiphy.title}</h3>
						<p className="active-giphy__website"> Source:
							<span><a href={activeGiphy.source}>{activeGiphy.source}</a></span>
						</p>
						<a href={activeGiphy.url}><img className="icon_giphy"
													   src="https://giphy.com/static/img/giphy_logo_square_social.png"
													   alt=""/></a>
						<button className="active-giphy__button">
							<NavLink to="/">Go Home</NavLink>
						</button>
						<button className="active-giphy__button">Save</button>
					</div>
				}
			</div>
		)
	}
}

export default GiphyItem;
