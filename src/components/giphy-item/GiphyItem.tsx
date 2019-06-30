import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './GiphyItem.css';
import GiphyList from '../giphy-list/GiphyList';
import {ImagesData} from '../../App';

const API_KEY = "QnJhWIXwS59aPWO6hXi0rUIDNqEZ4mwj";

interface State{
    giphSource: string;
    giphTitle: string;
    giphUrl: string;
}

interface Location{
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: State;
}

interface GiphyItemProps {
   history: object;
   match: object;
    location: Location;
}

interface GiphyItemState {
    activeGiphy: ImagesData[];
}

class GiphyItem extends React.Component<GiphyItemProps, GiphyItemState>{

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
						<GiphyList imagesData={activeGiphy} />
					</div>
				}
			</div>
		)
	}
}

export default GiphyItem;
