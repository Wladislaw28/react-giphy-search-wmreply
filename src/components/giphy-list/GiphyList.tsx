import * as React from 'react';
import { Link } from 'react-router-dom';
import './GiphyList.css';
import Save from '../save-giphy/Save';
import Lazyload from 'react-lazyload'
import {ImagesData} from '../../App';

interface GiphyListProps {
    imagesData: ImagesData[];
}

interface GiphyListState {
    dataImg: ImagesData[];
}

class GiphyList extends React.PureComponent<GiphyListProps, GiphyListState>{

	state = {
		dataImg: []
	};


	getDataId = (id: string) => {
		const dataI = this.props.imagesData.filter((image) => image.id === id );
		this.setState({
			dataImg: dataI
		})
	};


	render(){
		const {imagesData} = this.props;
		const {dataImg} = this.state;
		return(
				<div className="grid">
					{imagesData.map((image) => (
						<Lazyload throttle={200} height={300} key={image.id}>
							<div className="grid__item" >
								<div>
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
													giphUrl: image.images.original.url,
													giphSource: image.source,
													giphUrlInGiphyCom: image.url}
											}}>View {image.is_sticker !== 1 ? 'Giphy' : 'Stick'}</Link>
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
		);
	}
}

export default GiphyList;
