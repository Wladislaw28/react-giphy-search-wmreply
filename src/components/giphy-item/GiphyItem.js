import React from 'react';
import { NavLink } from 'react-router-dom';
import './GiphyItem.css';
import Lazyload from 'react-lazyload'

const API_KEY = "QnJhWIXwS59aPWO6hXi0rUIDNqEZ4mwj";

class GiphyItem extends React.Component{

	state = {
		activeGiphy: [],
	};

	componentDidMount = async () => {
		const title = this.props.location.state.giphTitle;
		const gip = await fetch(`http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${API_KEY}`);

		const resp = await gip.json();
		this.setState({
			activeGiphy: resp.data,
		});
		console.log(this.state.activeGiphy)
	};

	render(){
		console.log(this.props);
		 const {activeGiphy} = this.state;
		const giphUrlProps = this.props.location.state.giphUrl;
		const titleProps = this.props.location.state.giphTitle;
		const sourceProps = this.props.location.state.giphSource;
		const urlProps = this.props.location.state.giphUrlInGiphyCom;
		return(
			<div className="container-fluid">
				{
					activeGiphy.length !== 0 &&
					<div className="active-giphy">
						{console.log(activeGiphy)}
						<img className="active-giphy__img" src={giphUrlProps} alt={titleProps}/>
						<h3 className="active-giphy__title">{titleProps}</h3>
						<p className="active-giphy__website"> Source:
							{sourceProps !== '' ? <span><a href={sourceProps}>{sourceProps}</a></span> : <p>No source</p>}
						</p>
						<button className="active-giphy__button__giphyitem">
							<NavLink to="/">Go Home</NavLink>
						</button>


						<h3 className="active-giphy__title__similar">Similar</h3>
						<div className="grid">
						{
							activeGiphy.map((imageSim) => (
								<Lazyload throttle={200} height={300}>
									<div className="grid__item" key={imageSim.id}>
										<div className="grid__item-imgwrap">
											<img className="grid__item-img grid__item-img--scaled" src={imageSim.images.original.url}
												 alt={imageSim.title}/>
										</div>
										<div className="grid__item-content">
											<h2 className="grid__item-title">
												{imageSim.title.length < 20 ? `${imageSim.title}` : `${imageSim.title.substring(0,25)}...` }
											</h2>
										</div>
									</div>
								</Lazyload>
							))
						}
						</div>
					</div>
				}
			</div>
		)
	}
}

export default GiphyItem;
