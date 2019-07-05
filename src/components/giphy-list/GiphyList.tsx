import * as React from 'react';
import { Link } from 'react-router-dom';
import './GiphyList.css';
import Lazyload from 'react-lazyload'
import {GiphyListState, GiphyListProps} from '../../interface'

class GiphyList extends React.PureComponent<GiphyListProps, GiphyListState>{

	state = {
		dataImg: [],
	};

	getDataId = (id: string) => {
		const dataI = this.props.imagesData.filter((image) => image.id === id );
        const dataISave = dataI["0"];
		this.setState({
			dataImg: dataI
		}, () => {
            this.props.updateData(this.state.dataImg);
            this.toLocStor(dataISave);
        })
	};

    toLocStor = (dataISave : Object) => {
        const saved = localStorage.getItem('gifs');
        if (saved) {
            const parseGiphs = JSON.parse(saved);
            parseGiphs.push(dataISave);
            localStorage.setItem("gifs", JSON.stringify(parseGiphs));
        } else {
            const gifs = new Array();
            gifs.push(dataISave);
            localStorage.setItem("gifs", JSON.stringify(gifs));
        }
    };

	render(){
		const {imagesData, isSimilar} = this.props;
		return(
				<div className="grid">
					{imagesData.map((image) => (
						<Lazyload throttle={200} height={300} key={image.id}>
							<div className="grid__item" >
								<div>
									<div className="grid__item-imgwrap">
										<img className="grid__item-img grid__item-img--scaled"
                                             src={image.images.original.url} alt={image.title}/>
									</div>
									<div className="grid__item-content">
										<h2 className="grid__item-title">
											{image.title.length < 20 ? `${image.title}` :
                                                `${image.title.substring(0,25)}...` }
										</h2>

                                        {isSimilar === false ? <div>
                                            <button className="giphy_buttons">
                                                <Link to={{
                                                    pathname: `/giphyitem/${image.id}`,
                                                    state: { giphTitle: image.title,
                                                        giphUrl: image.images.original.url,
                                                        giphSource: image.source,
                                                        giphUrlInGiphyCom: image.url}
                                                }}>View {image.is_sticker !== 1 ? 'Giphy' : 'Stick'}</Link>
                                            </button>

                                            <button onClick={() => this.getDataId(image.id)}
                                                    className="giphy_buttons">Save</button>
                                        </div>
                                            : null}
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
