import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from '../giphy-item/Modal';
import './GiphyList.css';
import Save from '../save-giphy/Save';
import Lazyload from 'react-lazyload'


export const ThemeContext = React.createContext([]);


class GiphyList extends React.PureComponent{

	state = {
		dataImg: []
	};


	getDataId = (id) => {
		const dataI = this.props.imagesData.filter((image) => image.id === id );
		this.setState({
			dataImg: dataI
		})
	};


	render(){
		const {imagesData} = this.props;
		const {dataImg} = this.state;
		return(
			<ThemeContext.Provider value={this.state.dataImg}>
				<div className="grid">
					{imagesData.map((image) => (
						<Lazyload throttle={200} height={300}>
							<div className="grid__item">
								<div key={image.id}>
									<div className="grid__item-imgwrap">
										<img className="grid__item-img grid__item-img--scaled" src={image.images.original.url} alt={image.title}/>
									</div>
									<div className="grid__item-content">
										<h2 className="grid__item-title">
											{image.title.length < 20 ? `${image.title}` : `${image.title.substring(0,25)}...` }
										</h2>

										<button className="giphy_buttons">
											<Link to={{
												pathname: `/giphyitem/${image.id}`,
												state: { giphTitle: image.title,
													     giphOrSticker: image.is_sticker}
											}}>View Giphy</Link>
										</button>

										<button onClick={() => this.getDataId(image.id)} className="giphy_buttons">
											{/*<Link to={{*/}
											{/*pathname: `/savegiphy`,*/}
											{/*state: { giphDataGf: giph.images.original.url }*/}
											{/*}}></Link>*/}
											Save
										</button>
									</div>
								</div>
							</div>
						</Lazyload>
					))}
				</div>
			</ThemeContext.Provider>
		);
	}
}
// const GiphyList = (props) => (
//
// 		<div className="grid">
// 				{props.giphyData.map((giph) => (
// 					<div className="grid__item">
// 						<div key={giph.id}>
// 								<div className="grid__item-imgwrap">
// 									<img className="grid__item-img grid__item-img--scaled" src={giph.images.original.url} alt={giph.title}/>
// 								</div>
// 								<div className="grid__item-content">
// 									<h2 className="grid__item-title">
// 										{giph.title.length < 20 ? `${giph.title}` : `${giph.title.substring(0,25)}...` }
// 									</h2>
//
// 								<button className="giphy_buttons">
// 									<Link to={{
// 										pathname: `/giphyitem/${giph.id}`,
// 										state: { giphTitle: giph.title }
// 									}}>View Giphy</Link>
// 								</button>
// 									<button className="giphy_buttons">
// 										<Link to={{
// 											pathname: `/savegiphy`,
// 											state: { giphUrl: giph.images.original.url }
// 										}}>Save</Link>
// 									</button>
// 								</div>
// 						</div>
// 					</div>
// 				))}
//
// 		</div>
// );

export default GiphyList;
