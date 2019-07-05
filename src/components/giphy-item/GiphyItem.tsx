import  React,{ Suspense, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import './GiphyItem.css';
import {API_KEY} from '../../constants';
import {GiphyItemState, GiphyItemProps} from '../../interface';
import Loading from '../loader/Loading';
const GiphyList = lazy(() => import('../giphy-list/GiphyList'));


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
	};

	render(){
		const {activeGiphy} = this.state;
		const giphUrlProps = this.props.location.state.giphUrl;
		const titleProps = this.props.location.state.giphTitle;
		const sourceProps = this.props.location.state.giphSource;
		return(
			<div className="container-fluid">
				{
					activeGiphy.length !== 0 &&
					<div className="active-giphy">
						<img className="active-giphy__img" src={giphUrlProps} alt={titleProps}/>
						<h3 className="active-giphy__title">{titleProps}</h3>
						<p className="active-giphy__website"> Source:
							{sourceProps !== '' ? <span><a href={sourceProps}>{sourceProps}</a></span> : <p>No source</p>}
						</p>
						<button className="active-giphy__button__giphyitem">
							<NavLink to="/">Go Home</NavLink>
						</button>


						<h3 className="active-giphy__title__similar">Similar</h3>
						<Suspense fallback={<div><Loading /></div>}>
							<GiphyList isSimilar={true} imagesData={activeGiphy} />
						</Suspense>
					</div>
				}
			</div>
		)
	}
}

export default GiphyItem;
